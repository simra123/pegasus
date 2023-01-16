import { useState, useEffect } from "react";
import Routes from "./Routes";
import CoreHttpHandler from "./http/services/CoreHttpHandler";
import { useLocation } from "react-router-dom";
import { ScrollUp } from "./reauseble";
import { ToastContainer } from "react-toastify";
const App = () => {
	const [products, setProducts] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [loading, setLoading] = useState(true);
	const [sortBy, setSortBy] = useState("desc");
	const [searchVal, setSearchVal] = useState("");
	const [searchPro, setSearchPro] = useState([]);
	const [currentParams, setCurrentParams] = useState({
		limit: 9,
		page: 0,
	});
	const location = useLocation();
	const getProducts = (selectedCate, page, all) => {
		setLoading(true);
		if (selectedCate || all) {
			setSearchPro([]);
			setSearchVal("");
		}
		CoreHttpHandler.request(
			"products",
			"allProducts",
			{
				limit: currentParams.limit,
				page: page ? page : currentParams.page,
				id: selectedCate ? selectedCate : "",
				sortBy: sortBy ? sortBy : "desc",
			},
			(response) => {
				setLoading(false);
				const res = response.data.data.data;
				setProducts(res);
				setTotalItems(res.totalItems);
			},
			(err) => {
				setLoading(false);
				console.log(err);
			}
		);
	};
	useEffect(() => {
		ScrollUp();
	}, [location.pathname]);
	return (
		<>
			<ToastContainer />
			<Routes
				getProducts={getProducts}
				loading={loading}
				setLoading={setLoading}
				products={products}
				searchPro={searchPro}
				setSearchPro={setSearchPro}
				setProducts={setProducts}
				searchVal={searchVal}
				setSearchVal={setSearchVal}
				totalpages={totalItems}
				setCurrentParams={setCurrentParams}
				sortBy={sortBy}
				currentParams={currentParams}
				setSortBy={setSortBy}
			/>
		</>
	);
};

export default App;
