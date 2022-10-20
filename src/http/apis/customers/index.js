class APIS {
	apis() {
		return {
			login: {
				headers: {
					"xt-client-token": null,
				},
				method: "post",
				path: "/customer/login",
			},
		};
	}
}

export default new APIS();
