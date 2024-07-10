import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container p-3">
			<form className=" bg-dark text-light">
				<div className="form-group p-3">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<div className="form-group p-3">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="mt-3">

					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
			</form>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
