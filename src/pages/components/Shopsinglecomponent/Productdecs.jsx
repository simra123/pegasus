import React, { useState, useEffect, useContext, useCallback } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Loader,
	ToastAlertError,
	ToastAlertSuccess,
	LoadingButton,
	ToastCart,
} from "../../../reauseble";
import { ToastContainer } from "react-toastify";
// Import Swiper styles
import { MdAdd } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import parse from "html-react-parser";
import { BeatLoader } from "react-spinners";
import { Pagination } from "swiper";
import { useParams, useNavigate } from "react-router-dom";
import CoreHttpHandler from "../../../http/services/CoreHttpHandler";
import Recentviewed from "./Recentviewed";
import { RelatedProducts } from "../../../context-hooks";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { CartCount } from "../../../context-hooks";
import StarRating from "../../components/Ratings";
const Productdecs = ({ allCarts, fetchCarts, token }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [relatedProducts, setRelatedProducts] = useContext(RelatedProducts);
	const [similarPro, setSimilarPro] = useState([]);
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(false);
	const [loadingCart, setLoadingCart] = useState(false);
	const [loadingRating, setLoadingRating] = useState(false);
	const [proQuantity, setProQuantity] = useState(1);
	const [rating, setRating] = useState(0);
	const [successRating, setSuccessRating] = useState(null);

	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);
	const [cartCount] = useContext(CartCount);

	const getProduct = useCallback(() => {
		setLoading(true);

		CoreHttpHandler.request(
			"products",
			"singleProduct",
			{
				key: ":id",
				value: id,
				key2: "USERTOKEN",
				value2: token,
			},
			(response) => {
				const res = response.data.data.data[0];

				let avg_stars = 0;
				if (res.ratings[0].stars != null) {
					res.ratings.map((r) => {
						avg_stars += r.stars;
					});
				}
				res["avg_rating"] = avg_stars / res.ratings.length;

				setProduct(res);
				setLoading(false);
			},
			(err) => {
				console.log(err);
				setLoading(false);
			}
		);
	}, [id]);

	useEffect(() => {
		getProduct();
	}, [id]);

	useEffect(() => {
		if (product) {
			const filter = relatedProducts?.filter(
				(val) => val.product_category == product.product_category
			);
			setSimilarPro(filter);
		}
	}, [product]);
	useEffect(() => {
		if (proQuantity < 1) {
			ToastAlertError("Quality can not be less than 1");
			setProQuantity(1);
		}
		if (product?.stock) {
			if (proQuantity > product?.stock) {
				ToastAlertError("exceeded the current stock limit");
				setProQuantity(product?.stock);
			}
		}
	}, [proQuantity]);

	const addCart = useCallback(() => {
		CoreHttpHandler.request(
			"cart",
			"create",
			{
				qty: proQuantity,
				id: product.id,
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
	});

	const SendRatings = useCallback((stars) => {
		setRating(stars);
		setLoadingRating(true);
		return MySwal.fire({
			title: "",
			text: `Are you sure you want to send ${stars} Ratings?`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yes, i am",
			customClass: {
				confirmButton: "btn btn-primary",
				cancelButton: "btn btn-outline-danger ms-1",
			},
			buttonsStyling: false,
		}).then(function (result) {
			if (!result.isDismissed) {
				CoreHttpHandler.request(
					"orders",
					"ratings",
					{
						stars: stars,
						store_id: product?.store_id,
						product_id: product.id,
					},
					(response) => {
						setLoadingRating(false);
						//console.log(response);
						setSuccessRating(
							"Thank you for Reaching and Providing us your valuable Feedback!!"
						);
					},
					(err) => {
						setLoadingRating(false);

						ToastAlertError(
							err?.response?.data?.message
								? err?.response.data.message
								: "something went wrong"
						);
					}
				);
			} else {
				setLoadingRating(false);
			}
		});
	});
	const handleCart = (e) => {
		e.preventDefault();
		setLoadingCart(true);

		if (localStorage.getItem("user_token")) {
			let storeExist = true;

			if (allCarts.length) {
				if (allCarts[0]?.hot_deal_id) {
					storeExist =
						allCarts[0]?.products[0].store_name == product.store_name;
				} else {
					storeExist = allCarts[0].store_name == product.store_name;
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
			<ToastContainer limit={2} />
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
						{product?.featured_image && !loading ? (
							<SwiperSlide>
								<img
									loading='lazy'
									className='prod-main'
									alt='featured image'
									src={`https://upload.its.com.pk/${product?.featured_image}`}
								/>
							</SwiperSlide>
						) : null}
						{product?.attachment?.length && !loading
							? product?.attachment?.map((val) => {
									return (
										<>
											{val.url && (
												<SwiperSlide key={val.id}>
													<img
														loading='lazy'
														className='prod-main'
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
					{product.attachment?.length && !loading
						? product.attachment[0].url && (
								<Swiper
									onSwiper={setThumbsSwiper}
									loop={false}
									spaceBetween={1}
									slidesPerView={4}
									freeMode={true}
									style={{ marginTop: "10px" }}
									modules={[FreeMode, Navigation, Thumbs]}
									className='mySwiper'>
									{product?.featured_image && (
										<SwiperSlide>
											<img
												loading='lazy'
												className='prod-pagi'
												alt='featured image'
												src={`https://upload.its.com.pk/${product?.featured_image}`}
											/>
										</SwiperSlide>
									)}
									{product?.attachment && !loading
										? product?.attachment.map((val) => {
												return (
													<>
														{val.url && (
															<SwiperSlide key={val.id}>
																<img
																	loading='lazy'
																	className='prod-pagi'
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

				{product && !loading ? (
					<div className='col'>
						<div className='prod_detial'>
							<div className='prod_title'>
								<h3>{product.name}</h3>
								<span> {product?.size} </span>
							</div>
							<div className='price_wrap'>
								{product?.sale_price > 0 ? (
									<span className='regular_price'>
										<span className='curreny'>$ </span>
										{product.price}
									</span>
								) : (
									<span className='discount_price'>
										<span className='curreny'>$ </span>
										{product.price}
									</span>
								)}

								{product?.sale_price > 0 && (
									<span className='discount_price'>
										<span className='curreny'>$</span>
										{product?.sale_price}
									</span>
								)}
								<h3
									style={{
										color: "rgba(255, 255, 255, 0.5019607843)",
										fontSize: "18px",
										margin: "10px 0px",
									}}>
									<FaStar
										style={{ paddingTop: "4px", marginRight: "2px" }}
										size='20'
										color='yellow'
									/>
									<span>{product?.avg_rating ? product.avg_rating : "0"}</span>
								</h3>
							</div>
							<p>
								{product.description
									? parse(product.description)
									: "Nullam vitae imperdiet metus, eget convallis nibh. Integer ac eros necaugue consectetur tristique. Pellentesque quis dapibus ante, etporttitor urna. Aliquam id nulla ut urna luctus aliquet. Nunc mollisbibendum orci, eget tempus purus semper vel. Integer vitae justo orci. Aliquam aliquet dolor et suscipit gravida"}
							</p>

							<form action=''>
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
									disabled={loadingCart}>
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
										<span className='info_name'>StoreName</span> :
										<span className='info_value'>{product?.store_name}</span>
									</li>
									<li>
										<span className='info_name'>Category</span> :
										<span className='info_value'>
											{product?.product_category}
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				) : null}
			</div>{" "}
			{product?.check_review && !loading ? (
				<div className='ratings'>
					<h4>Rate This Product</h4>
					{!loadingRating ? (
						successRating === null ? (
							<StarRating
								rating={rating}
								count={5}
								onClick={(rate) => SendRatings(rate)}
							/>
						) : (
							<h5> {successRating} </h5>
						)
					) : (
						<BeatLoader
							color={"white"}
							loading={true}
							size={15}
							aria-label='Loading Spinner'
							data-testid='loader'
						/>
					)}
				</div>
			) : null}
			{product && !loading ? (
				<div className='prod_desc'>
					<h4>Description</h4>
					<p>
						{product.description
							? parse(product.description)
							: "Nullam vitae imperdiet metus, eget convallis nibh. Integer ac eros necaugue consectetur tristique. Pellentesque quis dapibus ante, etporttitor urna. Aliquam id nulla ut urna luctus aliquet. Nunc mollisbibendum orci, eget tempus purus semper vel. Integer vitae justo orci. Aliquam aliquet dolor et suscipit gravida"}
					</p>
				</div>
			) : (
				<Loader loading={loading} />
			)}
			<Recentviewed
				loading={loading}
				data={similarPro?.length ? similarPro : relatedProducts}
			/>
		</>
	);
};

export default Productdecs;
