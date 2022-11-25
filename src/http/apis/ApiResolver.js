import UserApis from "./users";
import ClientApis from "./client";
import Sellers from "./sellers";
import Products from "./products";
import Customers from "./customers";
import Store from "./stores";
import Home from "./home";
import Riders from "./riders";
import Cart from "./cart";
import Forms from "./forms";
import Content from "../content";
import Orders from "./orders";
class ApiResolver {
	constructor() {
		this.apis = {
			users: UserApis.apis(),
			client: ClientApis.apis(),
			sellers: Sellers.apis(),
			products: Products.apis(),
			customers: Customers.apis(),
			stores: Store.apis(),
			riders: Riders.apis(),
			home: Home.apis(),
			cart: Cart.apis(),
			forms: Forms.apis(),
			orders: Orders.apis(),
			content: Content.apis(),
		};
	}

	resolve(name, apiCall) {
		if (!this.apis[name]) throw new Error(`Failed to resolve api [${name}]`);

		if (!this.apis[name][apiCall])
			throw new Error(`Failed to resolve api call [${apiCall}]`);

		return this.apis[name][apiCall];
	}
}

export default new ApiResolver();
