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
			search: {
				headers: {
					"xt-client-token": null,
				},
				method: "get",
				path: "/web/search/product?name=nameVal&limit=9&page=pageVal",
			},
		};
	}
}

export default new APIS();
