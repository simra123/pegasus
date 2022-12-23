import React from "react";
// import prodimg from "../../../assets/images/pro-img1.png";
import { Pagination } from "antd";
import { Loader, ProductImage, DataNotFound } from "../../../reauseble";
import { Link } from "react-router-dom";

// import "../../Cart";
const Productlist = ({
	products,
	setCurrentParams,
	totalItems,
	loading,
	resultProducts,
	getSearchProducts,
	sortBy,
	setSortBy,
}) => {
	const allProducts = resultProducts ? resultProducts.data : products.data;
	return (
		<>
			<div className='prod_wrap'>
				<div className='top_wrap'>
					{allProducts?.length && (
						<div className='prod_count'>
							<span>
								1 To 9 Results Out Of{" "}
								{resultProducts ? resultProducts.totalItems : totalItems}
							</span>
						</div>
					)}

					<div className='prod_sort_wrap'>
						<form action=''>
							<select
								name=''
								onChange={(e) => setSortBy(e.target.value)}
								value={sortBy}
								id=''>
								<option value='desc'>Z - A</option>
								<option value='asc'>A - Z</option>
							</select>
						</form>
					</div>
				</div>
				<ul className='prod_list'>
					{!loading && allProducts
						? allProducts.map((val) => {
								return (
									<li key={val.id}>
										<Link to={`/singleproduct/${val.id}`}>
											<img
												src={
													val.featured_image
														? `https://upload.its.com.pk/v1/fetch/file/${val.featured_image}`
														: ProductImage
												}
												className='prod_img'
												alt='featured image'
											/>
											<h3 className='prod_title'>{val.name}</h3>
											<div className='prod_price'>
												{val?.sale_price > 0 ? (
													<span
														className='regular_price'
														style={{
															textDecoration: "line-through",
														}}>
														<span className='curreny'>$ </span>
														{val.price}
													</span>
												) : (
													<span
														className='discount_price'
														style={{ textDecoratione: "line-through" }}>
														<span className='curreny'>$ </span>
														{val.price}
													</span>
												)}

												{val?.sale_price > 0 && (
													<span
														className='discount_price'
														style={{ marginLeft: "10px" }}>
														<span className='curreny'>$</span>
														{val?.sale_price}
													</span>
												)}
											</div>
											{/* <span className='curreny'>$</span>
												{val.price}
											</span> */}
										</Link>
									</li>
								);
						  })
						: null}
					<Loader loading={loading} />
					{!loading && !allProducts?.length ? (
						<DataNotFound lowerText="We're sorry. We cannot find any matches for your search term." />
					) : null}
				</ul>
				{allProducts?.length && (
					<Pagination
						className='active-pagin'
						pageSize={9}
						total={resultProducts ? resultProducts.totalItems : totalItems}
						onChange={(e) => {
							resultProducts
								? getSearchProducts(false, e - 1)
								: setCurrentParams({
										limit: 9,
										page: e - 1,
								  });
						}}
					/>
				)}
			</div>
		</>
	);
};

export default Productlist;
