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
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import CoreHttpHandler from "./http/services/CoreHttpHandler";
function AppRoutes({
	getProducts,
	sortBy,
	setSortBy,
	loading,
	setLoading,
	currentParams,
	searchPro,
	setSearchPro,
	setCurrentParams,
	products,
	searchVal,
	setSearchVal,
	totalpages,
}) {
	const [cartCount, setCartCount] = useState({
		balance: 0,
		count: 0,
		productIds: [],
		dealsIds: [],
	});
	const [show, setShow] = useState(true);

	const [allCarts, setAllCarts] = useState([]);
	const [ageModal, setAgeModal] = useState(true);
	const [relatedProducts, setRelatedProducts] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
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
		const isUserValid = sessionStorage.getItem("isValid");
		if (!isUserValid) {
			ageValidations();
		}
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

				if (val.hot_deal_id) {
					allPrice += val.deal_price * val.qty;
				} else if (val.sale_price > 0) {
					allPrice += val.sale_price * val.qty;
				} else {
					allPrice += val.price * val.qty;
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
	const ageValidations = () => {
		const MySwal = withReactContent(Swal);
		MySwal.fire({
			title: "VERIFY!!",
			text: "You Need to be above 21 to Access the Pegasus",
			icon: "warning",
			allowOutsideClick: false,
			type: "input",
			showCancelButton: true,
			confirmButtonText: "Yes, I am",
			customClass: {
				confirmButton: "btn btn-primary",
				cancelButton: "btn btn-outline-danger ms-1",
			},
			buttonsStyling: false,
		}).then(function (result) {
			if (!result.isConfirmed) {
				MySwal.fire({
					title: "sorry",
					text: "You are not old enough to view the site",
					icon: "error",
					showCancelButton: false,
					showConfirmButton: false,
					allowOutsideClick: false,
					buttonsStyling: false,
				});
			} else {
				sessionStorage.setItem("isValid", true);
			}
		});
	};

	return (
		<div style={{ overflowY: "auto" }}>
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
									ageModal={ageModal}
									setAgeModal={setAgeModal}
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
									getProducts={getProducts}
									products={products}
									currentParams={currentParams}
									setCurrentParams={setCurrentParams}
									sortBy={sortBy}
									setSortBy={setSortBy}
									totalItems={totalpages}
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
						{!token && (
							<Route
								path='/login'
								element={<Loginform />}
							/>
						)}
						{!token && (
							<Route
								path='/createnewpass'
								element={<Createnewpass />}
							/>
						)}
						{!token && (
							<Route
								path='/forgotpassword'
								element={<Forgotpassword />}
							/>
						)}

						{!token && (
							<Route
								path='/registerform'
								element={<Registerform />}
							/>
						)}

						{!token && (
							<Route
								path='/verifyemail'
								element={<Verifyemail />}
							/>
						)}

						{!token && (
							<Route
								path='/sellerform'
								element={<Sellerform />}
							/>
						)}

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
									fetchCarts={fetchCarts}
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
						{token && (
							<Route
								path='/orderdetail/:id'
								element={<Orderdetail />}
							/>
						)}

						{token && (
							<Route
								path='/orderhistory'
								element={<Orderhistory />}
							/>
						)}

						<Route
							path='*'
							element={<Error />}
						/>
					</Routes>
					<Footer
						show={show}
						getProducts={getProducts}
					/>
				</RelatedProducts.Provider>
			</CartCount.Provider>
		</div>
	);
}

export default AppRoutes;
