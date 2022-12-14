import { useState, useEffect } from "react";
import Routes from "./Routes";
import CoreHttpHandler from "./http/services/CoreHttpHandler";

const App = () => {
	const [products, setProducts] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [loading, setLoading] = useState(true);
	const [sortBy, setSortBy] = useState("desc");
	const [searchPro, setSearchPro] = useState([]);
	const [currentParams, setCurrentParams] = useState({
		limit: 9,
		page: 0,
	});
	const getProducts = (selectedCate, page) => {
		setLoading(true);
		if (selectedCate) {
			setSearchPro([]);
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

	return (
		<Routes
			getProducts={getProducts}
			loading={loading}
			setLoading={setLoading}
			products={products}
			searchPro={searchPro}
			setSearchPro={setSearchPro}
			setProducts={setProducts}
			totalpages={totalItems}
			setCurrentParams={setCurrentParams}
			sortBy={sortBy}
			currentParams={currentParams}
			setSortBy={setSortBy}
		/>
	);
};

export default App;
