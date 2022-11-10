import React from "react";
// import prodimg from "../../../assets/images/pro-img1.png";
import { Pagination } from "antd";
import { Loader, ProductImage } from "../../../reauseble";
import { Link } from "react-router-dom";
import "../../Cart";
const Productlist = ({ products, setCurrentParams, totalItems, loading }) => {
	console.log(totalItems);
	return (
		<>
			<div className='prod_wrap'>
				<div className='prod_added'>
					<span>vape product 4</span>
					<Link
						to='/cart'
						className='viewcart_btn'>
						View Cart
					</Link>
				</div>
				<div className='top_wrap'>
					<div className='prod_count'>
						<span>1 To 9 Results Out Of 1000</span>
					</div>
					<div className='prod_sort_wrap'>
						<form action=''>
							<select
								name=''
								id=''>
								<option value='Sorting'>Sorting</option>
								<option value='A - Z'>A - Z</option>
								<option value='A - Z'>Z - A</option>
							</select>
						</form>
					</div>
				</div>
				<ul className='prod_list'>
					{!loading && products
						? products.map((val) => {
								// const image = val.attachment.filter((att) => att.type == 0);
								return (
									<li key={val.id}>
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
									</li>
								);
						  })
						: null}
					<Loader loading={loading} />
				</ul>
				<Pagination
					defaultCurrent={1}
					total={totalItems}
					onChange={(e) => {
						setCurrentParams({
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
