import React, { useEffect, useState } from "react";
import { Loader, ProductImage } from "../../../reauseble";
import CoreHttpHandler from "../../../http/services/CoreHttpHandler";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const HotDeals = ({ show }) => {
	const [loading, setLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [hotDeals, setHotDeals] = useState([]);
	const navigate = useNavigate();
	const getHotDeals = (page) => {
		setLoading(true);
		let params = {
			key: "pageVal",
			value: page ? page : 0,
		};
		CoreHttpHandler.request(
			"products",
			"hotDeals",
			{
				params,
			},
			(response) => {
				setLoading(false);
				const res = response.data.data.data;
				setTotalPages(res.totalItems);
				setHotDeals(res.hotDeals);
			},
			(err) => {
				setLoading(false);
				console.log(err);
			}
		);
	};
	useEffect(() => {
		if (!show) {
			getHotDeals();
		}
	}, [show]);
	const handleDeals = (deal) => {
		navigate(`/singledeal/${deal?.hot_deals_id}`);
	};
	return (
		<>
			<section className='sec sec4'>
				<div className='container'>
					<div className='inner_wrap'>
						<div className='head_wrap'>
							<h2>Hot Deals</h2>
						</div>
						<div className='prod_wrap'>
							<div className='carousel'>
								<ul className='prod_list'>
									{!loading && hotDeals
										? hotDeals?.map((val) => {
												return (
													<li
														style={{ cursor: "pointer" }}
														key={val.hot_deals_id}
														onClick={() => handleDeals(val)}>
														<span className='sale_label'>20% OFF</span>
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
														<div className='price_wrap'>
															<span className='regular_price'>
																<span className='curreny'>$</span>
																{val.regular_price}
															</span>
															<span className='discount_price'>
																<span className='curreny'>$</span>
																{val.deal_price}
															</span>
														</div>
													</li>
												);
										  })
										: null}

									<Loader loading={loading} />
								</ul>
							</div>
						</div>
					</div>
					{!loading && totalPages > 8 ? (
						<Pagination
							className='active-pagin'
							pageSize={9}
							total={totalPages}
							onChange={(e) => {
								getHotDeals(e - 1);
							}}
						/>
					) : null}
				</div>
			</section>
		</>
	);
};

export default HotDeals;
