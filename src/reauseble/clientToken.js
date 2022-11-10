import CoreHttpHandler from "../http/services/CoreHttpHandler";

export const ClientAuthentication = () => {
	console.log("henlo");
	CoreHttpHandler.request(
		"client",
		"auth",
		{},
		(response) => {
			const token = response.data.data.token;
			const ifExist = localStorage.getItem("client_token");
			if (!ifExist) {
				localStorage.setItem("client_token", token);
				console.log("henlo 2");
			}
		},
		(err) => {
			console.log(err, "auth error ");
		}
	);
};
