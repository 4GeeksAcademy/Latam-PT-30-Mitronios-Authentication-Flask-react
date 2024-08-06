import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Register = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleClick = async (event) => {
		event.preventDefault();
		await actions.createUser(email, password).then(navigate("/login"));

	}

	return (
		<React.Fragment>
			<Navbar />
			<div className="container p-3">
				<form className=" bg-dark text-light">

					{/* Email input */}
					<div className="form-group p-3">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group p-3">

						{/* Password input */}
						<label htmlFor="exampleInputPassword1">Password</label>
						<input type="password" className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mt-3">

						<button type="submit"
							className="btn btn-primary"
							onClick={handleClick}
						>Submit</button>
					</div>
				</form>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</React.Fragment>
	);
};
