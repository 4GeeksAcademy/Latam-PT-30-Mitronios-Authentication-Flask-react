"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#Create User
@api.route('/user', methods=['POST'])
def create_user():
    data = request.json
    email_in_data = data.get("email")
    password_in_data = data.get("password")
    if None in [email_in_data, password_in_data]:
        return jsonify({
            "Message": "email and password are required"
            }), 400
    new_user_email = email_in_data
    user_exist = db.session.execute(db.select(User).filter_by(email= new_user_email)).one_or_none()
    if user_exist:
        return jsonify({
            "Message": "Invalid email"
        }),400
    new_user = User(email = new_user_email, password = password_in_data, is_active = True )

    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as error:
        print(error)
        db.session.rollback()
        return jsonify({"Message": "Not correct my friend"})

    return jsonify({"Message": "User created successfully"}), 201

#Create Token
@api.route('/token', methods=['POST'])
def login_user():
    data = request.json
    email_in_data = data.get("email")
    password_in_data = data.get("password")
    if None in [email_in_data, password_in_data]:
        return jsonify({
            "Message": "email and password are required"
            }), 400
    
    user_result = db.session.execute(db.select(User).filter_by(email= data["email"])).one_or_none()

    if user_result is None:
        return jsonify({
            "Message": "Email or Password invalid"
        }), 400
    
    user = user_result[0]

    password_is_valid = data["password"] == user.password

    if not password_is_valid:
        return jsonify({
            "Message": "Email or Password invalid"
        }), 400
    
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token}), 201

#Get user private info 
@api.route('/user/private', methods=['GET'])
@jwt_required()
def get_user_private_info():
    user_id = get_jwt_identity()
    user_result = db.session.execute(db.select(User).filter_by(id= user_id)).one_or_none()

    if user_result is None:
        return jsonify({
            "Message": "No info available"
        }), 400
    
    user = user_result[0]

    return jsonify({
        "User_Pivate_info": {
            "email": user.email,
            "password": user.password,
            "user_is_active": user.is_active
        }
        }), 200
