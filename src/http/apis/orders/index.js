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

			ratings: {
				headers: {
					"xt-user-token": null,
				},
				method: "post",
				path: "/create/rating",
			},
			coupon: {
				headers: {
					"xt-user-token": null,
				},
				method: "post",
				path: "/fetch/coupon",
			},
			getAddress: {
				headers: {
					"xt-user-token": null,
				},
				method: "post",
				path: "/fetch/delivery/cordinates",
			},
		};
	}
}

export default new APIS();
