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
const Productdecs = ({ allCarts, fetchCarts }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [relatedProducts, setRelatedProducts] = useContext(RelatedProducts);
	const [similarPro, setSimilarPro] = useState([]);
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(false);
	const [loadingCart, setLoadingCart] = useState(false);
	const [proQuantity, setProQuantity] = useState(1);
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);
	const [cartCount] = useContext(CartCount);

	const getProduct = () => {
		setLoading(true);

		CoreHttpHandler.request(
			"products",
			"singleProduct",
			{
				key: ":id",
				value: id,
			},
			(response) => {
				const res = response.data.data.data[0];
				setProduct(res);
				setLoading(false);
			},
			(err) => {
				console.log(err);
				setLoading(false);
			}
		);
	};
	useEffect(() => {
		getProduct();
	}, []);

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
			ToastAlertError("Quality can not be in Negative");
			setProQuantity(0);
		}
		if (product?.stock) {
			if (proQuantity > product?.stock) {
				ToastAlertError("exceeded the current stock limit");
				setProQuantity(product?.stock);
			}
		}
	}, [proQuantity]);

	const addCart = () => {
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
	};

	const handleCart = (e) => {
		e.preventDefault();
		setLoadingCart(true);

		if (localStorage.getItem("user_token")) {
			let storeExist = true;
			if (allCarts.length) {
				storeExist = allCarts[0].store_name == product.store_name;
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
							},
							(res) => console.log(res),
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
						loop={true}
						spaceBetween={10}
						navigation={true}
						thumbs={{ swiper: thumbsSwiper }}
						//	pagination={pagination}
						modules={[FreeMode, Navigation, Thumbs, Pagination]}
						className='mySwiper2'>
						{product?.featured_image && (
							<SwiperSlide>
								<img
									alt='no'
									src={`https://upload.its.com.pk/${product?.featured_image}`}
								/>
							</SwiperSlide>
						)}
						{product?.attachment
							? product?.attachment.map((val) => {
									return (
										<SwiperSlide>
											<img
												alt='no'
												src={`https://upload.its.com.pk/${val.url}`}
											/>
										</SwiperSlide>
									);
							  })
							: null}
					</Swiper>
					<Swiper
						onSwiper={setThumbsSwiper}
						loop={true}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						style={{ marginTop: "10px" }}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className='mySwiper'>
						{product?.featured_image && (
							<SwiperSlide>
								<img
									alt='no'
									src={`https://upload.its.com.pk/${product?.featured_image}`}
								/>
							</SwiperSlide>
						)}
						{product?.attachment?.length > 1
							? product?.attachment.map((val) => {
									return (
										<SwiperSlide>
											<img
												alt='no'
												src={`https://upload.its.com.pk/${val.url}`}
											/>
										</SwiperSlide>
									);
							  })
							: null}
					</Swiper>
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
			</div>
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
			<Recentviewed data={similarPro ? similarPro : relatedProducts} />
		</>
	);
};

export default Productdecs;
