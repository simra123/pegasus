class APIS {
	apis() {
		return {
			create: {
				headers: {
					"xt-user-token": null,
				},
				method: "post",
				path: "/create/cart",
			},
			fetch: {
				headers: {
					"xt-user-token": null,
				},
				method: "get",
				path: "/fetch/cart",
			},
			remove: {
				headers: {
					"xt-user-token": null,
				},
				method: "post",
				path: "/remove/cart",
			},
		};
	}
}

export default new APIS();
