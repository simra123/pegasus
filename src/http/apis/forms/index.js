class APIS {
	apis() {
		return {
			newsletter: {
				headers: {
					"xt-client-token": null,
				},
				method: "post",
				path: "/create/news-letter",
			},
			contact: {
				headers: {
					"xt-client-token": null,
				},
				method: "post",
				path: "/create/contact-us",
			},
			// remove: {
			// 	headers: {
			// 		"xt-user-token": null,
			// 	},
			// 	method: "post",
			// 	path: "/remove/cart",
			// },
		};
	}
}

export default new APIS();
