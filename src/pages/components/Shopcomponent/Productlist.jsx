import React from "react";
// import prodimg from "../../../assets/images/pro-img1.png";
import { Pagination } from "antd";
import { Loader, ProductImage } from "../../../reauseble";
import { Link } from "react-router-dom";
// import "../../Cart";
const Productlist = ({
	products,
	setCurrentParams,
	currentParams,
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
				{/* <div className='prod_added'>
					<span>vape product 4</span>
					<Link
						to='/cart'
						className='viewcart_btn'>
						View Cart
					</Link>
				</div> */}
				<div className='top_wrap'>
					<div className='prod_count'>
						<span>
							1 To 9 Results Out Of{" "}
							{resultProducts ? resultProducts.totalItems : totalItems}
						</span>
					</div>
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
												alt='no'
											/>
											<h3 className='prod_title'>{val.name}</h3>
											<span className='prod_price'>
												<span className='curreny'>$</span>
												{val.price}
											</span>
										</Link>
									</li>
								);
						  })
						: null}
					<Loader loading={loading} />
				</ul>
				<Pagination
					className='active-pagin'
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
			</div>
		</>
	);
};

export default Productlist;
