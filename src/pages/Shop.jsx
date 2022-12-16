import React, { useState, useEffect } from "react";
import { Filterwrap, Productlist } from "./components/Shopcomponent";
import CoreHttpHandler from "../http/services/CoreHttpHandler";

const Shop = ({
	data,
	getSearchProducts,
	loading,
	products,
	getProducts,
	currentParams,
	setCurrentParams,
	sortBy,
	setSortBy,
	totalItems,
}) => {
	const [categories, setCategories] = useState([]);

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
