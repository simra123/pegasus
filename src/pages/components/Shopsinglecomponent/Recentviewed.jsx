import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { ProductImage, Loader } from "../../../reauseble";

const Recentviewed = ({ data }) => {
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
									{data?.length ? (
										data.map((val) => {
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
																	<span className='regular_price'>
																		<span className='curreny'>$</span>
																		{val?.price}
																	</span>
																</div>
															</div>
														</li>
													</Link>
												</SwiperSlide>
											);
										})
									) : (
										<Loader loading={true} />
									)}
								</Swiper>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Recentviewed;
