class APIS {
	apis() {
		return {
			fetchCity: {
				headers: {
					"xt-user-token": null,
				},
				method: "get",
				path: "/fetch/delivery/fees",
			},
			create: {
				headers: {
					"xt-user-token": null,
				},
				method: "post",
				path: "/create/order",
			},
			history: {
				headers: {
					"xt-user-token": null,
				},
				method: "post",
				path: "/web/customer/orders",
			},
			coupon: {
				headers: {
					"xt-user-token": null,
				},
				method: "post",
				path: "/fetch/coupon",
			},
		};
	}
}

export default new APIS();
