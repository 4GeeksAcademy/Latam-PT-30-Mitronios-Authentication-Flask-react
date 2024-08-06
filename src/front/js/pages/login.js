import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleClick = async (event) => {
		event.preventDefault();
		const success = await actions.login(email, password);
		if (success) { navigate("/") }
	}

	return (
		<React.Fragment>
			<Navbar />
			<div className="container p-3">
				<form className=" bg-info text-white">

					{/* Email input */}
					<div className="form-group p-3">
						<label for="exampleInputEmail1">Email address</label>
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
						<label for="exampleInputPassword1">Password</label>
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
						>Login</button>
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
