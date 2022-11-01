// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useEffect } from "react";
import "./assets/scss/main.scss";
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
import CoreHttpHandler from "./http/services/CoreHttpHandler";
function App() {
	const clientAuthentication = () => {
		CoreHttpHandler.request(
			"client",
			"auth",
			{},
			(response) => {
				const token = response.data.data.token;
				localStorage.setItem("client_token", token);
			},
			(err) => {
				console.log(err);
			}
		);
	};
	useEffect(() => {
		clientAuthentication();
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
			</Routes>
			<Footer />
		</>
	);
}

export default App;
