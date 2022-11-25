// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "./assets/scss/main.scss";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Header, Footer } from "./header-footer";
import {
	Home,
	About,
	Shop,
	Singleproduct,
	Faq,
	Contact,
	Wishlist,
	Checkout,
	Cart,
	Orderdetail,
	Error,
	Orderhistory,
	SingleDeal,
} from "./pages/js";
import {
	Loginform,
	Createnewpass,
	Forgotpassword,
	Registerform,
	Verifyemail,
	Sellerform,
} from "./forms";
import { CartCount, RelatedProducts } from "./context-hooks";
import CoreHttpHandler from "./http/services/CoreHttpHandler";
function App() {
	const [cartCount, setCartCount] = useState({
		balance: 0,
		count: 0,
		productIds: [],
		dealsIds: [],
	});
	const [allCarts, setAllCarts] = useState([]);
	const [show, setShow] = useState(true);
	const [searchPro, setSearchPro] = useState([]);
	const [searchVal, setSearchVal] = useState("");
	const [loading, setLoading] = useState(true);
	const [relatedProducts, setRelatedProducts] = useState([]);
	const location = useLocation();
	const token = localStorage.getItem("user_token");
	const fetchCarts = () => {
		if (token) {
			CoreHttpHandler.request(
				"cart",
				"fetch",
				{},
				(response) => {
					if (response.data.data.settings) {
						setAllCarts(response.data.data.settings);
					}
				},
				(err) => {
					console.log(err);
				}
			);
		}
	};
	useEffect(() => {
		setShow(true);

		if (!show) {
			CoreHttpHandler.request(
				"products",
				"allProducts",

				{
					limit: 50,
					page: 0,
				},
				(response) => {
					const res = response.data.data.data;
					setRelatedProducts(res.data);
				},
				(err) => {
					console.log(err);
				}
			);
		}
		fetchCarts();
		const ifExist = localStorage.getItem("client_token");

		CoreHttpHandler.request(
			"client",
			"auth",
			{},
			(response) => {
				const token = response.data.data.token;
				setShow(false);
				//console.log(response, "res");
				if (!ifExist) {
					localStorage.setItem("client_token", token);
				}
			},
			(err) => {
				console.log(err, "auth error ");
			}
		);
	}, [location.pathname]);

	useEffect(() => {
		if (allCarts) {
			let allItems = 0;
			let allPrice = 0;
			let products = [];
			let deals = [];
			allCarts.map((val) => {
				allItems += val.qty;
				if (val.price) {
					allPrice += val.price * val.qty;
				} else {
					allPrice += val.deal_price * val.qty;
				}
				if (val.id) {
					products.push(val.id);
				} else {
					deals.push(val.hot_deal_id);
				}
			});
			setTotalItems(allItems);
			setTotalPrice(allPrice.toString().substring(0, 8));
			setCartCount({
				count: allCarts.length,
				balance: allPrice.toString().substring(0, 8),
				productIds: products,
				dealsIds: deals,
			});
		}
	}, [allCarts]);

	const searchProducts = (clear, page) => {
		let params = {
			key: "nameVal",
			value: searchVal,
			key2: "pageVal",
			value2: page ? page : 0,
		};
		if (clear) {
			setSearchPro([]);
		} else {
			setLoading(true);

			CoreHttpHandler.request(
				"products",
				"search",
				params,
				(response) => {
					const res = response.data.data;
					setSearchPro(res);
					setLoading(false);
				},
				(err) => {
					console.log(err);
					setLoading(false);
				}
			);
		}
	};
	const [totalItems, setTotalItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	return (
		<CartCount.Provider value={[cartCount, setCartCount]}>
			<RelatedProducts.Provider value={[relatedProducts, setRelatedProducts]}>
				<Header
					getProducts={searchProducts}
					setSearchVal={setSearchVal}
					searchVal={searchVal}
				/>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								show={show}
								setShow={setShow}
							/>
						}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/shop'
						element={
							<Shop
								data={searchPro}
								getSearchProducts={searchProducts}
								loading={loading}
								setLoading={setLoading}
							/>
						}
					/>
					<Route
						path='/singleproduct/:id'
						element={
							<Singleproduct
								allCarts={allCarts}
								fetchCarts={fetchCarts}
							/>
						}
					/>

					<Route
						path='/faq'
						element={<Faq />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>
					<Route
						path='/wishlist'
						element={<Wishlist />}
					/>
					<Route
						path='/login'
						element={<Loginform />}
					/>
					<Route
						path='/createnewpass'
						element={<Createnewpass />}
					/>
					<Route
						path='/forgotpassword'
						element={<Forgotpassword />}
					/>
					<Route
						path='/registerform'
						element={<Registerform />}
					/>
					<Route
						path='/verifyemail'
						element={<Verifyemail />}
					/>
					<Route
						path='/sellerform'
						element={<Sellerform />}
					/>
					<Route
						path='/checkout'
						element={<Checkout fetchCarts={fetchCarts} />}
					/>
					<Route
						path='/cart'
						element={
							<Cart
								allCarts={allCarts}
								totalItems={totalItems}
								totalPrice={totalPrice}
							/>
						}
					/>
					<Route
						path='/singledeal/:id'
						element={
							<SingleDeal
								allCarts={allCarts}
								fetchCarts={fetchCarts}
							/>
						}
					/>
					<Route
						path='/orderdetail/:id'
						element={<Orderdetail />}
					/>
					<Route
						path='/orderhistory'
						element={<Orderhistory />}
					/>
					<Route
						path='*'
						element={<Error />}
					/>
				</Routes>
				<Footer />
			</RelatedProducts.Provider>
		</CartCount.Provider>
	);
}

export default App;
