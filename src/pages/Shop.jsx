import React, { useState, useEffect } from "react";
import { Filterwrap, Productlist } from "./components/Shopcomponent";
import CoreHttpHandler from "../http/services/CoreHttpHandler";

const Shop = ({ data, getSearchProducts, loading, setLoading, categories }) => {
	const [products, setProducts] = useState([]);
	const [totalItems, setTotalItems] = useState("");
	const [sortBy, setSortBy] = useState("desc");
	const [currentParams, setCurrentParams] = useState({
		limit: 9,
		page: 0,
	});
	const getProducts = (selectedCate, page) => {
		setLoading(true);
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
		getProducts();
	}, [currentParams, sortBy]);
	return (
		<>
			<div id='shop_main'>
				<div className='content_wrap'>
					<section className='sec sec2 shop_pg_sec1'>
						{/* <canvas></canvas> */}
						<div className='container'>
							<div className='inner_wrap'>
								<Filterwrap
									data={categories}
									getProducts={getProducts}
									discountedProducts={products?.discounted_products}
									loading={loading}
								/>
								<Productlist
									loading={loading}
									products={data.data ? data.data.data : products}
									currentParams={currentParams}
									resultProducts={data.data ? data.data : null}
									setCurrentParams={setCurrentParams}
									totalItems={totalItems}
									getSearchProducts={getSearchProducts}
									setSortBy={setSortBy}
									sortBy={sortBy}
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
