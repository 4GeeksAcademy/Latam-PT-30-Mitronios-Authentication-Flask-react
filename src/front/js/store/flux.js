const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			token: null,
		},
		actions: {

			setToken: () => {
				const token = sessionStorage.getItem('token')
				const user = JSON.parse(sessionStorage.getItem('user'))
				setStore({ ...getStore(), user: user, token: token })
			},

			createUser: async (email, password) => {
				try {
					const response = await fetch("https://legendary-train-q7v76477wr9rf467-3001.app.github.dev/api/register",
						{
							method: "POST",
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
					console.log("This is my data:", data)

				} catch (error) {
					console.log("Error", error)
				}
			},

			login: async (email, password) => {
				try {
					const response = await fetch("https://legendary-train-q7v76477wr9rf467-3001.app.github.dev/api/login/",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({ email: email, password: password })
						});

					if (response.status !== 201) {
						console.log("There has been some error");
						return false;
					}

					const data = await response.json()
					sessionStorage.setItem("token", data.token)
					sessionStorage.setItem("user", JSON.stringify(data.user))
					setStore({ ...getStore(), token: data.token, user: data.user })
					return true

				} catch (error) {
					console.log("error catch:", error)
				}
			},

			logout: async () => {
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("user");
				setStore({ ...getStore(), token: null, user: null })
			},

			privateInfo: async () => {
				const store = getStore();
				const opts = {
					headers: {
						Authorization: "Bearer " + store.token
					}
				};
				try {
					const response = await fetch("https://legendary-train-q7v76477wr9rf467-3001.app.github.dev/api/single", opts)
					if (response.status !== 200) {
						console.log("There has been some error");
						return false;
					}
					const data = await response.json()
					setStore({ ...getStore(), user: data.user })
					return true

				} catch (error) {
					console.log("Not working as expected")
				}
			}

		},


	}
};


export default getState;
