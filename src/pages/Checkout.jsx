import React, { useState, useCallback } from "react";
import {
	LoadingButton,
	ToastAlertError,
	ToastAlertSuccess,
} from "../reauseble";
import { ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CoreHttpHandler from "../http/services/CoreHttpHandler";
import GoogleMap from "../reauseble/googleMap";
const Checkout = ({ fetchCarts }) => {
	const [showSummery, setShowSummery] = useState(false);
	const [showMap, setShowMap] = useState(false);
	const [allCities, setAllCities] = useState([]);
	const [charges, setCharges] = useState("");
	const [loading, setLoading] = useState(false);
	const [checkoutDetails, setcheckoutDetails] = useState({
		firstname: "",
		lastname: "",
		number: "",
		address: "",
	});
	const [center, setCenter] = React.useState({
		lat: 22,
		lng: 22,
	});
	const { state } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (!state?.products) {
			navigate("/");
		}
	}, []);

	const handleOrder = useCallback(
		(e) => {
			setLoading(true);
			e.preventDefault();
			CoreHttpHandler.request(
				"orders",
				"create",
				{
					...checkoutDetails,
					product_ids: state.products,
					hot_deal_ids: state?.deals,
					quantity: state.quantity,
					store_id: state?.store_id,
					hot_deal_quantity: state?.dealsQty,
					order_location: state?.location,
					user_location: `${Number(center.lat)} , ${Number(center.lng)}`,
					coupon_id: state?.coupon_id,
				},
				(response) => {
					CoreHttpHandler.request(
						"cart",
						"remove",
						{
							product_ids: state?.products,
							hot_deal_ids: state?.deals,
						},
						(res) => {
							setLoading(false);
							ToastAlertSuccess("Order Placed Successfully");
							//window.location.reload(false);
							fetchCarts();

							setTimeout(() => {
								navigate("/orderhistory");
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
		},
		[checkoutDetails, state]
	);

	console.log(checkoutDetails.firstname, checkoutDetails.address, "details");
	return (
		<>
			<GoogleMap
				showMap={showMap}
				setShowMap={setShowMap}
				setCharges={setCharges}
				checkoutDetails={checkoutDetails}
				setCheckoutDetails={setcheckoutDetails}
				store_id={state?.store_id}
				setCenter={setCenter}
				center={center}
			/>
			<section className='main_form signup chckout_wrap'>
				<div className='container'>
					{!showSummery ? (
						<div className='inner_sec'>
							<h2>Checkout</h2>
							<div className='form_wrap chckout_wrap'>
								<form>
									<div className='field_wrap full_div'>
										<input
											type='text'
											name=''
											placeholder='Address*'
											required
											autoComplete='false'
											readOnly
											onClick={() => setShowMap(true)}
											value={checkoutDetails.address}
										/>
									</div>
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
									<div className='field_wrap '></div>
									<div className='field_wrap  full_div'>
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

									<LoadingButton
										disabled={
											!(checkoutDetails.firstname && checkoutDetails.address)
										}
										onClick={() => setShowSummery(true)}
									/>
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
										text={`Pay Now $${(
											Number(state?.total) + Number(charges)
										).toFixed(2)}`}
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
