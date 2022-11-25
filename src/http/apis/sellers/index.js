class APIS {
	apis() {
		return {
			approval: {
				headers: {
					"xt-user-token": null,
				},
				method: "put",
				path: "/sellers/approval/:id",
			},
			create: {
				headers: {
					"xt-client-token": null,
				},
				method: "post",
				path: "/create/seller",
			},
			fetchAdmin: {
				headers: {
					"xt-user-token": null,
				},
				method: "post",
				path: "/sellers/list",
			},
		};
	}
}

export default new APIS();
