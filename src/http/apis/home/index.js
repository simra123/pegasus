class APIS {
	apis() {
		return {
			main: {
				headers: {
					"xt-client-token": null,
				},
				method: "post",
				path: "/web/products/all",
			},
		};
	}
}
export default new APIS();
