// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "./assets/scss/main.scss";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
} from "./pages/js/index";
import {
	Loginform,
	Createnewpass,
	Forgotpassword,
	Registerform,
	Verifyemail,
	Sellerform,
} from "./forms";
import ScrollToTop from "./pages/js/ScrollToTop";
import { ClientAuthentication } from "./reauseble";
function App() {
	useEffect(() => {
		ClientAuthentication();
	}, []);
	return (
		<>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/shop'
					element={<Shop />}
				/>
				<Route
					path='/singleproduct/:id'
					element={<Singleproduct />}
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
					element={<Checkout />}
				/>
				<Route
					path='/cart'
					element={<Cart />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
