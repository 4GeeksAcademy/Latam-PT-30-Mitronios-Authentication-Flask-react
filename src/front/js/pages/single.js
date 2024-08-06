import React, { useState, useEffect, useContext } from "react";
import { Link, } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {

		if (store.token && store.token != "" && store.token != undefined) actions.privateInfo();

	}, [store.token])

	return (
		<div className="jumbotron bg-success text-white">
			{store.token ? (
				<>
					<h1 className="display-4 mb-4">Hello! and Wellcome! to your private info!</h1>
					<ul className="display-6 mb-4">
						<li>{store.user?.id}</li>
						<li>{store.user?.email}</li>
					</ul>
					<img className="container img-fluid" src={rigoImageUrl} style={{ maxWidth: "300px", maxHeight: "300px" }} />
					<hr className="my-4" />

					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</>
			) : (
				<h1 className="display-4 d-flex justify-content-center align-items-center">Nothing to see here friend! please login!</h1>
			)
			}
		</div>
	);
};

