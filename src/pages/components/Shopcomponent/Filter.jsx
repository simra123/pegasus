import { Slider } from "antd";
import React, { useState } from "react";
import {
	ProductImage,
	ToastAlertError,
	ToastAlertSuccess,
} from "../../../reauseble";
import CoreHttpHandler from "../../../http/services/CoreHttpHandler";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BeatLoader } from "react-spinners";
const Filter = ({ data, getProducts, loading, discountedProducts }) => {
	const [email, setEmail] = useState("");
	const [loading1, setLoading1] = useState(false);
	const navigate = useNavigate();
	const handleNewletter = (e) => {
		if (email) {
			setLoading1(true);
			e.preventDefault();
			CoreHttpHandler.request(
				"forms",
				"newsletter",
				{
					email: email,
				},
				(response) => {
					setLoading1(false);
					setEmail("");
					ToastAlertSuccess("You have subscribed for new updates ");
				},
				(err) => {
					ToastAlertError(
						err?.response?.data?.message
							? err?.response.data.message
							: "something went wrong"
					);
					setLoading1(false);
				}
			);
		}
	};
	return (
		<>
			<ToastContainer />
			<div className='filter_wrap'>
				<div className='inner_wrap'>
					{/* <div className='prod_srch_wrap'>
						<form action=''>
							<input
								type='text'
								className='srch_fld'
								placeholder='Search'
							/>
							<input
								type='submit'
								className='btn_fld'
								value={"s"}
							/>
						</form>
					</div> */}
					<div className='cat_wrap'>
						<h4>Categories</h4>
						<ul className='cat_list'>
							<li
								onClick={() => getProducts(null, 0, true)}
								style={{ textTransform: "capitalize" }}>
								<a style={{ color: "#f3ac3b" }}> All</a>
							</li>
							{data?.map((val) => {
								return (
									<li
										key={val.id}
										onClick={() => getProducts(val.id, 0)}
										style={{ textTransform: "capitalize" }}>
										<a style={{ color: "#f3ac3b" }}> {val.name}</a>
									</li>
								);
							})}
						</ul>
					</div>
					{/* <div className='price_rng_wrap'>
						<h4>Price Filter</h4>
					</div> */}
					<div className='discnt_prod_list'>
						<h4>Discounted Products</h4>
						<ul className='sidebar_prod_list'>
							{!loading && discountedProducts
								? discountedProducts.map((val) => {
										return (
											<li
												key={val.id}
												style={{ cursor: "pointer" }}
												onClick={() => navigate(`/singleproduct/${val.id}`)}>
												<div className='img_wrap'>
													<img
														style={{ height: "auto", width: "100%" }}
														src={
															val.featured_image
																? `https://upload.its.com.pk/v1/fetch/file/${val.featured_image}`
																: ProductImage
														}
														alt='featured image'
													/>
												</div>
												<div
													className='price_wrap'
													style={{ marginTop: 0, paddingTop: 0 }}>
													<Link to={`/singleproduct/${val.id}`}>
														<h6>{val?.name}</h6>
													</Link>
													<span className='regular_price'>
														<span className='curreny'>$</span>
														{val?.price}
													</span>

													<span className='discount_price'>
														<span className='curreny'>$</span>
														{val?.sale_price}
													</span>
												</div>
											</li>
										);
								  })
								: null}
						</ul>
					</div>
					<div className='newsletter_wrap'>
						<h4>Newsletter</h4>
						<form action=''>
							<input
								type='email'
								className='email_fld'
								required
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{!loading1 && (
								<input
									className='btn_fld'
									type='submit'
									onClick={handleNewletter}
								/>
							)}
							<BeatLoader
								color={"black"}
								loading={loading1}
								size={13}
								aria-label='Loading Spinner'
								data-testid='loader'
							/>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Filter;
