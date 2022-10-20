class APIS {
	apis() {
		return {
			fetch: {
				headers: {
					"xt-user-token": null,
				},
				method: "get",
				path: "/stores",
			},
			fetch_products: {
				headers: {
					"xt-user-token": null,
				},
				method: "post",
				path: "/products",
			},
		};
	}
}

export default new APIS();
