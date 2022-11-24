import CoreHttpHandler from "../http/services/CoreHttpHandler";

export const ClientAuthentication = () => {
	CoreHttpHandler.request(
		"client",
		"auth",
		{},
		(response) => {
			const token = response.data.data.token;
			const ifExist = localStorage.getItem("client_token");
			if (!ifExist) {
				localStorage.setItem("client_token", token);
			}
		},
		(err) => {
			console.log(err, "auth error ");
		}
	);
};
