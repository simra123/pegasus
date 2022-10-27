class APIS {
	apis() {
		return {
			singleProduct: {
				headers: {
					"xt-client-token": null,
				},
				method: "get",
				path: "/web/product/:id",
			},
			categories: {
				headers: {
					"xt-client-token": null,
				},
				method: "get",
				path: "/web/categories",
			},
			allProducts: {
				headers: {
					"xt-client-token": null,
				},
				method: "post",
				path: "/web/product/categories",
			},
		};
	}
}

export default new APIS();
