const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			createUser: async () => {
				try {
					const response = await fetch("https://legendary-train-q7v76477wr9rf467-3001.app.github.dev/api/user",
						{
							method: "POSt",
							headers: { "Content-type": "application/json" },
							body: JSON.stringify({
								"email": email,
								"password": password,
							})
						})
					if (!response.ok) {
						console.log("Uh oh!", response.status)
						return
					}
					const data = await response.json()

				} catch (error) {
					console.log("Error", error)
				}
			},
		}
	};
};

export default getState;
