import React, { useState } from "react";
import {
	LoadingButton,
	ToastAlertError,
	ToastAlertSuccess,
} from "../reauseble";
import { ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CoreHttpHandler from "../http/services/CoreHttpHandler";
const Checkout = () => {
	const [showSummery, setShowSummery] = useState(false);
	const [allCities, setAllCities] = useState([]);
	const [charges, setCharges] = useState("");
	const [loading, setLoading] = useState(false);
	const [checkoutDetails, setcheckoutDetails] = useState({
		firstname: "",
		lastname: "",
		number: "",
		city: "",
		address: "",
	});
	const { state } = useLocation();
	const navigate = useNavigate();
	console.log(state, "location");
	useEffect(() => {
		if (!state?.products) {
			navigate("/");
		}
	}, []);
	useEffect(() => {
		CoreHttpHandler.request(
			"orders",
			"fetchCity",
			{},
			(response) => {
				setAllCities(response.data.data.data);
			},
			(err) => {
				console.log(err);
			}
		);
	}, []);
	useEffect(() => {
		if (checkoutDetails.city) {
			const res = allCities.filter((val) => val.city == checkoutDetails.city);
			setCharges(res[0].charges);
		}
	}, [checkoutDetails.city]);
	const handleOrder = (e) => {
		setLoading(true);
		e.preventDefault();
		CoreHttpHandler.request(
			"orders",
			"create",
			{
				...checkoutDetails,
				product_ids: state.products,
				quantity: state.quantity,
				order_location: state.location,
				user_location: "24.961, 67.099",
			},
			(response) => {
				//console.log(response.data, "order res");

				CoreHttpHandler.request(
					"cart",
					"remove",
					{
						product_ids: state.products,
					},
					(res) => {
						setLoading(false);
						ToastAlertSuccess("Order Placed Successfully");
						setTimeout(() => {
							window.location.reload(false);
							navigate("/login");
						}, 2000);
					},
					(err) => {
						setLoading(false);
						ToastAlertError(
							err?.response?.data?.message
								? err?.response.data.message
								: "something went wrong"
						);
					}
				);
			},
			(err) => {
				console.log(err);
			}
		);
	};

	return (
		<>
			<ToastContainer />
			<section className='main_form signup chckout_wrap'>
				<div className='container'>
					{!showSummery ? (
						<div className='inner_sec'>
							<h2>Checkout</h2>
							<div className='form_wrap chckout_wrap'>
								<form>
									<div className='field_wrap hlf_div full_div'>
										<input
											type='text'
											name=''
											placeholder='First Name*'
											required
											value={checkoutDetails.firstname}
											onChange={(e) =>
												setcheckoutDetails({
													...checkoutDetails,
													firstname: e.target.value,
												})
											}
										/>
									</div>
									<div className='field_wrap hlf_div full_div'>
										<input
											type='text'
											name=''
											placeholder='Last Name*'
											required
											value={checkoutDetails.lastname}
											onChange={(e) =>
												setcheckoutDetails({
													...checkoutDetails,
													lastname: e.target.value,
												})
											}
										/>
									</div>
									<div className='field_wrap '>
										<select
											value={checkoutDetails.city}
											onChange={(e) =>
												setcheckoutDetails({
													...checkoutDetails,
													city: e.target.value,
												})
											}>
											<option value=''>Select City </option>;
											{allCities?.map((val) => {
												return <option value={val.city}>{val.city}</option>;
											})}
										</select>
									</div>
									<div className='field_wrap hlf_div full_div'>
										<input
											type='number'
											name=''
											placeholder='Phone No.*'
											required
											value={checkoutDetails.number}
											onChange={(e) =>
												setcheckoutDetails({
													...checkoutDetails,
													number: e.target.value,
												})
											}
										/>
									</div>

									<div className='field_wrap full_div'>
										<input
											type='text'
											name=''
											placeholder='Address*'
											required
											value={checkoutDetails.address}
											onChange={(e) =>
												setcheckoutDetails({
													...checkoutDetails,
													address: e.target.value,
												})
											}
										/>
									</div>

									<LoadingButton onClick={() => setShowSummery(true)} />
								</form>
							</div>
						</div>
					) : (
						<div className='inner_sec'>
							<h2>Shipping Details</h2>{" "}
							<div className='form_wrap chckout_wrap'>
								<form>
									<div className='full_div'>
										<input
											type='radio'
											id='shipping-type'
											value='cod'
											name='ok'
											checked
										/>
										 {" "}
										<label for='shipping-type'>
											CASH ON DELIVERY ( ${charges ? charges : "20"} )
										</label>
									</div>
									<LoadingButton
										loading={loading}
										onClick={handleOrder}
										text={`Pay Now $${state?.total + charges}`}
									/>
								</form>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Checkout;
