import React, { useState, useEffect } from "react";
import { Filterwrap, Productlist } from "./components/Shopcomponent";
import CoreHttpHandler from "../http/services/CoreHttpHandler";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [totalItems, setTotalItems] = useState("");
	const [loading, setLoading] = useState(true);
	const [categories, setCategories] = useState([]);
	const [currentParams, setCurrentParams] = useState({
		limit: 9,
		page: 0,
	});
	const getProducts = () => {
		setLoading(true);
		CoreHttpHandler.request(
			"products",
			"allProducts",
			{
				...currentParams,
			},
			(response) => {
				setLoading(false);
				const res = response.data.data.data;
				setProducts(res.data);
				setTotalItems(res.totalItems);
			},
			(err) => {
				setLoading(false);
				console.log(err);
			}
		);
	};
	const getCategories = () => {
		CoreHttpHandler.request(
			"products",
			"categories",
			{},
			(response) => {
				const res = response.data.data.data.data;
				setCategories(res);
			},
			(err) => {
				console.log(err);
			}
		);
	};
	useEffect(() => {
		getProducts();
		getCategories();
	}, [currentParams]);
	return (
		<>
			<div id='shop_main'>
				<div className='content_wrap'>
					<section className='sec sec2 shop_pg_sec1'>
						{/* <canvas></canvas> */}
						<div className='container'>
							<div className='inner_wrap'>
								<Filterwrap data={categories} />
								<Productlist
									loading={loading}
									products={products}
									currentParams={currentParams}
									setCurrentParams={setCurrentParams}
									totalItems={totalItems}
								/>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Shop;
