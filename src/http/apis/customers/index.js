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
			create: {
				headers: {
					"xt-client-token": null,
				},
				method: "post",
				path: "/create/customers",
			},
			sendEmail: {
				headers: {
					"xt-client-token": null,
				},
				method: "post",
				path: "/customer/send/email",
			},
			reset: {
				headers: {
					"xt-client-token": null,
				},
				method: "post",
				path: "/customer/reset/password",
			},
		};
	}
}

export default new APIS();
