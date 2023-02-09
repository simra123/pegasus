import React from "react";
// import prodimg from "../../../assets/images/pro-img1.png";
import { Loader, ProductImage } from "../../../reauseble";
import { Link } from "react-router-dom";
import smokeimg from "../../../assets/images/sec-smoke.png";
import { FaStar } from "react-icons/fa";
const sec2 = ({ data, loading }) => {
	return (
		<>
			<section className='sec sec2'>
				<div className='banner before smokeani'>
					<img
						src={smokeimg}
						alt='banner'
						className='smoky_img1'
					/>
					<img
						src={smokeimg}
						alt='banner'
						className='smoky_img2'
					/>
					<img
						src={smokeimg}
						alt='banner'
						className='smoky_img3'
					/>
					<img
						src={smokeimg}
						alt='banner'
						className='smoky_img4'
					/>
					<img
						src={smokeimg}
						alt='banner'
						className='smoky_img5'
					/>
					<img
						src={smokeimg}
						alt='banner'
						className='smoky_img6'
					/>
				</div>
				<div className='container'>
					<div className='inner_wrap'>
						<h2>Featured Products</h2>
						<div className='prod_wrap'>
							<ul className='prod_list'>
								{!loading && data
									? data.map((val) => {
											const image = val.attachment.filter(
												(att) => att.type == 0
											);
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
													</Link>
													<h3 className='prod_title'>{val.name}</h3>
													<span className='prod_price'>
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
													</span>
													<h3
														style={{
															color: "white",
															fontSize: "14px",
															margin: "10px 0px",
														}}>
														<span>
															{val?.avg_rating ? val.avg_rating : "0"}
														</span>

														<FaStar
															style={{
																paddingTop: "4px",
																marginLeft: "1px",
															}}
															size='16'
															color='yellow'
														/>
													</h3>
												</li>
											);
									  })
									: null}
								<Loader loading={loading} />
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default sec2;
