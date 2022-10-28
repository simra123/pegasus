import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Loader } from "../../../reauseble";
const sec5 = ({ data, recent, loading }) => {
	return (
		<>
			<section className='sec sec5'>
				<div className='container'>
					<div className='inner_wrap'>
						<h2>Featured Brands</h2>
						<div className='prod_wrap'>
							<ul className='client_list'>
								{!loading && data
									? data.map((val, index) => {
											return (
												<li key={index}>
													<img
														src={val.image}
														className='prod_img'
														alt='no'
													/>
												</li>
											);
									  })
									: null}
								<Loader loading={loading} />
							</ul>
						</div>
					</div>
				</div>
				<div className='recent_prod'>
					<div className='container'>
						<div className='inner_wrap'>
							<h2>Recently Viewed</h2>
							<div className='slider_wrap'>
								<ul className='prod_list_wrap'>
									<Swiper
										modules={[Navigation]}
										spaceBetween={20}
										slidesPerView={3}
										breakpoints={{
											// when window width is >= 640px
											0: {
												slidesPerView: 1,
											},
											// when window width is >= 768px
											768: {
												slidesPerView: 2,
											},
											1024: {
												slidesPerView: 3,
											},
										}}
										navigation>
										{!loading && recent
											? recent.map((val) => {
													const image = val.attachment.filter(
														(att) => att.type == 0
													);
													return (
														<SwiperSlide>
															<Link to={`/singleproduct/${val.id}`}>
																<li className='prod_list'>
																	<img
																		src={image[0]?.url}
																		alt='no'
																	/>
																	<div className='prod_info'>
																		<h4>{val.name}</h4>
																		<div className='price_wrap'>
																			<span className='regular_price'>
																				<span className='curreny'>$</span>193.52
																			</span>
																			<span className='discount_price'>
																				<span className='curreny'>$</span>
																				{val.price}
																			</span>
																		</div>
																	</div>
																</li>
															</Link>
														</SwiperSlide>
													);
											  })
											: null}
										<Loader loading={loading} />
									</Swiper>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default sec5;
