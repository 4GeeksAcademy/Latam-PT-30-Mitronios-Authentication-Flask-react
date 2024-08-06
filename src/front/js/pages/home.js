import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<Navbar />
			{store.token ? (
				<div className="text-center mt-5">
					<h1>Wellcome to the login page</h1>
					<p>
						<img src={rigoImageUrl} />
					</p>
				</div>
			) : (
				<div className="text-center mt-5">
					<h1>Hello and wellcome, create an account is free!</h1>
					<p>
						<img src={rigoImageUrl} />
					</p>
				</div>
			)
			}
		</React.Fragment>
	);
};
