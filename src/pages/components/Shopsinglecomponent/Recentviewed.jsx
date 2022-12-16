import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { ProductImage, Loader, DataNotFound } from "../../../reauseble";

const Recentviewed = ({ data, loading }) => {
	return (
		<>
			<div className='recent_prod'>
				<div className='container'>
					<div className='inner_wrap'>
						<h2>Related Products</h2>
						<div className='slider_wrap'>
							<ul className='prod_list_wrap'>
								<Swiper
									modules={[Navigation]}
									spaceBetween={20}
									slidesPerView={4}
									breakpoints={{
										// when window width is >= 640px
										0: {
											slidesPerView: 1,
										},
										// when window width is >= 768px
										768: {
											slidesPerView: 3,
										},
										1024: {
											slidesPerView: 4,
										},
									}}
									navigation>
									{!loading && data?.length
										? data.map((val) => {
												return (
													<SwiperSlide key={val.id}>
														<Link to={`/singleproduct/${val.id}`}>
															<li className='prod_list'>
																<img
																	src={
																		val.featured_image
																			? `https://upload.its.com.pk/v1/fetch/file/${val.featured_image}`
																			: ProductImage
																	}
																	alt='featured image'
																/>
																<div className='prod_info'>
																	<h4>{val?.name}</h4>
																	<div className='price_wrap'>
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
																				style={{
																					textDecoratione: "line-through",
																				}}>
																				<span className='curreny'>$ </span>
																				{val.price}
																			</span>
																		)}

																		{val?.sale_price > 0 && (
																			<span
																				className='discount_price'
																				style={{ marginLeft: "0px" }}>
																				<span className='curreny'>$</span>
																				{val?.sale_price}
																			</span>
																		)}
																	</div>
																</div>
															</li>
														</Link>
													</SwiperSlide>
												);
										  })
										: null}
									{!loading && !data?.length && <DataNotFound />}
								</Swiper>
							</ul>
						</div>
					</div>
					<Loader loading={loading} />
				</div>
			</div>
		</>
	);
};

export default Recentviewed;
