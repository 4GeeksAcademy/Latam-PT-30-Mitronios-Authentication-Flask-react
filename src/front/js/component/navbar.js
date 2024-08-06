import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				{store.token ? (
					<>
						<div className="navbar-text text-dark me-3 d-flex flex-column">
							<i className="fa-regular fa-user text-success" /> <strong>{store.user?.email}</strong>
							<Link to="/single"><span>Click here to go to your profile</span></Link>


						</div>
						<Link to="/">
							<button className="btn btn-outline-danger justify-content-end" type="button" onClick={actions.logout}>Cerrar sesión</button>
						</Link>
					</>
				) : (
					<>
						<Link to="/register">
							<span className="navbar-brand mb-0 h1">Create your account</span>
						</Link>
						<div className="ml-auto">
							<Link to="/login">
								<button className="btn btn-primary">Login</button>
							</Link>
						</div>
					</>
				)}
			</div>
		</nav>
	);
};
