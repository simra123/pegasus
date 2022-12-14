import React, { useState, useEffect, useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Loader,
	ToastAlertError,
	ToastAlertSuccess,
	ToastCart,
} from "../../../reauseble";
import { ToastContainer } from "react-toastify";
// Import Swiper styles
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import ProductCountdown from "../../js/Prodountdown";
import { FreeMode, Navigation, Thumbs } from "swiper";
import parse from "html-react-parser";
import { BeatLoader } from "react-spinners";
import { Pagination } from "swiper";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import CoreHttpHandler from "../../../http/services/CoreHttpHandler";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { CartCount } from "../../../context-hooks";
const Productdecs = ({ allCarts, fetchCarts }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [attachment, setAttachment] = useState([]);
	const [deal, setDeal] = useState({});
	const [loading, setLoading] = useState(false);
	const [loadingCart, setLoadingCart] = useState(false);
	const [proQuantity, setProQuantity] = useState(1);
	const navigate = useNavigate();
	const [isExpire, setIsExpire] = useState(false);

	const MySwal = withReactContent(Swal);
	const [cartCount] = useContext(CartCount);
	const { id } = useParams();

	useEffect(() => {
		if (proQuantity < 1) {
			ToastAlertError("Quality can not be in Negative");
			setProQuantity(0);
		}
		if (deal?.stock) {
			if (proQuantity > deal?.stock) {
				ToastAlertError("exceeded the current stock limit");
				setProQuantity(deal?.stock);
			}
		}
	}, [proQuantity]);
	const getDeal = () => {
		setLoading(true);

		CoreHttpHandler.request(
			"products",
			"hotDealsById",
			{
				key: ":id",
				value: id,
			},
			(response) => {
				const res = response.data.data.data.hotDeals[0];
				//	setDeal(res);
				setLoading(false);
				setDeal(res);
			},
			(err) => {
				console.log(err);
				setLoading(false);
			}
		);
	};
	useEffect(() => {
		getDeal();
	}, []);

	useEffect(() => {
		let allImage = [];
		if (deal?.products) {
			deal?.products.map((e) => {
				e.attachment.map((val) => {
					allImage.push(val);
				});
			});
		}
		setAttachment(allImage);
	}, [loading]);

	const addCart = () => {
		CoreHttpHandler.request(
			"cart",
			"create",
			{
				hot_deal_qty: proQuantity,
				hot_deal_id: deal.hot_deals_id,
			},
			(response) => {
				setLoadingCart(false);
				ToastCart();
				fetchCarts();
			},
			(err) => {
				setLoadingCart(false);

				ToastAlertError(
					err?.response?.data?.message
						? err?.response.data.message
						: "something went wrong"
				);
			}
		);
	};

	const handleCart = (e) => {
		e.preventDefault();
		setLoadingCart(true);

		if (localStorage.getItem("user_token")) {
			let storeExist = true;
			if (allCarts.length) {
				if (allCarts[0].hot_deal_id) {
					storeExist =
						allCarts[0]?.products[0].store_name == deal.products[0].store_name;
				} else {
					storeExist = allCarts[0].store_name == deal.products[0].store_name;
				}
			}
			if (storeExist) {
				addCart();
			} else {
				return MySwal.fire({
					title: "",
					text: "Adding the Product from a different stote will remove the previous Items!",
					icon: "warning",
					showCancelButton: true,
					confirmButtonText: "Do it Anyway",
					customClass: {
						confirmButton: "btn btn-primary",
						cancelButton: "btn btn-outline-danger ms-1",
					},
					buttonsStyling: false,
				}).then(function (result) {
					if (!result.isDismissed) {
						addCart();
						CoreHttpHandler.request(
							"cart",
							"remove",
							{
								product_ids: cartCount?.productIds,
								hot_deal_ids: cartCount?.dealsIds,
							},
							(res) => {},
							(err) => console.log(err)
						);
					} else {
						setLoadingCart(false);
					}
				});
			}
		} else {
			ToastAlertError("Please Login Please");
			setLoadingCart(false);
			setTimeout(() => {
				navigate("/login");
			}, 2000);
		}
	};

	return (
		<>
			<ToastContainer />
			<div className='single_prod_info'>
				<div className='col'>
					<Swiper
						style={{
							"--swiper-navigation-color": "#fff",
							"--swiper-pagination-color": "#fff",
						}}
						loop={false}
						spaceBetween={10}
						navigation={true}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[FreeMode, Navigation, Thumbs, Pagination]}
						className='mySwiper2'>
						{deal?.featured_image && (
							<SwiperSlide>
								<img
									style={{ height: "540px" }}
									alt='featured image'
									src={`https://upload.its.com.pk/${deal?.featured_image}`}
								/>
							</SwiperSlide>
						)}
						{attachment?.length > 0
							? attachment.map((val) => {
									return (
										<SwiperSlide>
											<img
												style={{ height: "540px" }}
												alt='featured image'
												src={`https://upload.its.com.pk/${val.url}`}
											/>
										</SwiperSlide>
									);
							  })
							: null}
					</Swiper>
					{attachment?.length > 0
						? attachment[0].url && (
								<Swiper
									onSwiper={setThumbsSwiper}
									loop={false}
									spaceBetween={1}
									slidesPerView={4}
									freeMode={true}
									style={{ marginTop: "10px" }}
									watchSlidesProgress={true}
									modules={[FreeMode, Navigation, Thumbs]}
									className='mySwiper'>
									{deal?.featured_image && (
										<SwiperSlide>
											<img
												style={{
													height: "135px",
													width: "135px",
													cursor: "pointer",
												}}
												alt='featured image'
												src={`https://upload.its.com.pk/${deal?.featured_image}`}
											/>
										</SwiperSlide>
									)}
									{attachment?.length
										? attachment.map((val) => {
												return (
													<>
														{val.url && (
															<SwiperSlide key={val.id}>
																<img
																	style={{
																		height: "135px",
																		width: "135px",
																		cursor: "pointer",
																	}}
																	alt='featured image'
																	src={`https://upload.its.com.pk/${val.url}`}
																/>
															</SwiperSlide>
														)}
													</>
												);
										  })
										: null}
								</Swiper>
						  )
						: null}
				</div>
				{deal.products && !loading ? (
					<div className='col'>
						<div className='prod_detial'>
							<ProductCountdown
								start={deal?.start_date}
								end={deal?.end_date}
								isExpire={isExpire}
								setIsExpire={setIsExpire}
							/>

							<div className='prod_title'>
								<h3>{deal.name}</h3>
								<span> {deal?.size} </span>
							</div>
							<div className='price_wrap'>
								{deal?.deal_price > 0 ? (
									<span className='regular_price'>
										<span className='curreny'>$ </span>
										{deal.regular_price}
									</span>
								) : (
									<span className='discount_price'>
										<span className='curreny'>$ </span>
										{deal.regular_price}
									</span>
								)}

								{deal?.deal_price > 0 && (
									<span className='discount_price'>
										<span className='curreny'>$</span>
										{deal?.deal_price}
									</span>
								)}
							</div>
							<h4 style={{ color: "white" }}>Description</h4>
							<div
								style={{
									fontFamily: "Marcellus SC, sans-serif",
									color: "rgba(255, 255, 255, 0.5019607843)",
									fontSize: "20px",
									letterSpacing: "0.5px",
									marginBottom: 0,
								}}>
								{deal?.products.map((val) => {
									return <p style={{ margin: 0 }}>1 x {val?.name}</p>;
								})}
								<p style={{ margin: 0 }}>
									{deal.description
										? parse(deal.description)
										: "Nullam vitae imperdiet metus, eget convallis nibh. Integer ac eros necaugue consectetur tristique. Pellentesque quis dapibus ante, etporttitor urna. Aliquam id nulla ut urna luctus aliquet. Nunc mollisbibendum orci, eget tempus purus semper vel. Integer vitae justo orci. Aliquam aliquet dolor et suscipit gravida"}
								</p>
							</div>

							<form
								action=''
								style={{ marginTop: "30px" }}>
								<AiOutlineMinus
									color='white'
									size='30'
									className='minus'
									onClick={() => setProQuantity(proQuantity - 1)}
								/>

								<input
									type='number'
									value={proQuantity}
									placeholder='1'
									disabled
									className='num_fld'
								/>
								<MdAdd
									color='white'
									size='30'
									className='add'
									onClick={() => setProQuantity(proQuantity + 1)}
								/>

								<button
									type='submit'
									onClick={handleCart}
									disabled={loadingCart || isExpire}>
									{!loadingCart && "Add to Cart"}
									<BeatLoader
										color={"white"}
										loading={loadingCart}
										size={13}
										aria-label='Loading Spinner'
										data-testid='loader'
									/>
								</button>
							</form>
							<div className='prod_info'>
								<ul>
									<li>
										<span className='info_name'>Store</span> :
										<span className='info_value'>
											{deal?.products[0]?.store_name}
										</span>
									</li>
									{/* <li>
										<span className='info_name'>Category</span> :
										<span className='info_value'>
											{deal?.product_category}
										</span>
									</li> */}
								</ul>
							</div>
						</div>
					</div>
				) : null}
			</div>
			{deal && !loading ? (
				<div className='prod_desc'>
					<h4>Description</h4>
					<p>
						{deal.description
							? parse(deal.description)
							: "Nullam vitae imperdiet metus, eget convallis nibh. Integer ac eros necaugue consectetur tristique. Pellentesque quis dapibus ante, etporttitor urna. Aliquam id nulla ut urna luctus aliquet. Nunc mollisbibendum orci, eget tempus purus semper vel. Integer vitae justo orci. Aliquam aliquet dolor et suscipit gravida"}
					</p>
				</div>
			) : (
				<Loader loading={loading} />
			)}
		</>
	);
};

export default Productdecs;
