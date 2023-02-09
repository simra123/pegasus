class APIS {
	apis() {
		return {
			singleProduct: {
				headers: {
					"xt-client-token": null,
				},
				method: "get",
				path: "/web/product/:id?usr=USERTOKEN",
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
			hotDeals: {
				headers: {
					"xt-client-token": null,
				},
				method: "get",
				path: "/web/fetch/hot-deals?limit=8&page=pageVal",
			},
			hotDealsById: {
				headers: {
					"xt-client-token": null,
				},
				method: "get",
				path: "/hot-deal/by/:id",
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
