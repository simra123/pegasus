import React, { useState } from "react";
import {
	LoadingButton,
	ToastAlertError,
	ToastAlertSuccess,
} from "../reauseble";
import { BeatLoader } from "react-spinners";
import ContentUploadHandler from "../http/services/ContentUploadHandler";
import CoreHttpHandler from "../http/services/CoreHttpHandler";

const Sellerform = () => {
	const [loading, setLoading] = useState(false);
	const [loadingSeller, setLoadingSeller] = useState(false);
	const [showNext, setShowNext] = useState(false);
	const [sellerData, setSellerData] = useState({
		username: "",
		password: "",
		number: "",
		email: "",
		name: "",
		type: "",
		description: "",
		location: "",
		city: "",
	});
	const [imageUrl, setImageUrl] = useState("");
	const handleUpload = (e) => {
		setLoading(true);
		const _data = new FormData();
		_data.append(
			"file",
			e.target.files[0],
			`${new Date().getTime()}_${e.target.files[0].name}`
		);

		ContentUploadHandler.request(
			"content",
			"upload",
			{
				params: _data,
			},
			(response) => {
				const res = response.data.data.file;
				setImageUrl(res);
				setLoading(false);
			},
			(err) => {
				console.log(err);
				setLoading(false);
			}
		);
	};
	const handleSubmit = (e) => {
		setLoadingSeller(true);
		e.preventDefault();

		CoreHttpHandler.request(
			"sellers",
			"create",
			{
				...sellerData,
				image: imageUrl,
			},
			(response) => {
				setLoadingSeller(false);
				ToastAlertSuccess("You have Registered Successfully");
				setTimeout(() => {
					window.open("http://marketplace-portal.uatlink.com/", "_blank");
				}, 3000);
			},
			(err) => {
				setLoadingSeller(false);
				ToastAlertError(
					err?.response?.data?.message
						? err?.response.data.message
						: "something went wrong"
				);
			}
		);
	};
	return (
		<>
			<section className='main_form'>
				{/* <canvas></canvas> */}
				<div className='container'>
					<div className='inner_sec'>
						<h2>Become a Seller</h2>
						<div className='form_wrap'>
							{" "}
							<form>
								{!showNext ? (
									<>
										<div className='field_wrap full_div'>
											<input
												type='text'
												name=''
												placeholder='Username*'
												onChange={(e) =>
													setSellerData({
														...sellerData,
														username: e.target.value,
													})
												}
												required
												value={sellerData.username}
											/>
										</div>
										<div className='field_wrap full_div'>
											<input
												type='password'
												name=''
												placeholder='Password*'
												required
												value={sellerData.password}
												onChange={(e) =>
													setSellerData({
														...sellerData,
														password: e.target.value,
													})
												}
											/>
										</div>
										<div className='field_wrap full_div'>
											<input
												type='email'
												name=''
												value={sellerData.email}
												placeholder='Email*'
												required
												onChange={(e) =>
													setSellerData({
														...sellerData,
														email: e.target.value,
													})
												}
											/>
										</div>

										<div className='field_wrap full_div'>
											<input
												type='number'
												name=''
												value={sellerData.number}
												placeholder='Number*'
												onChange={(e) =>
													setSellerData({
														...sellerData,
														number: e.target.value,
													})
												}
												required
											/>
										</div>

										<div className='field_wrap full_div'>
											<input
												type='text'
												name=''
												value={sellerData.city}
												onChange={(e) =>
													setSellerData({ ...sellerData, city: e.target.value })
												}
												placeholder='City*'
												required
											/>
										</div>
										<LoadingButton
											onClick={() => setShowNext(true)}
											text='next'
											disabled={
												!(
													sellerData.username &&
													sellerData.email &&
													sellerData.password &&
													sellerData.city &&
													sellerData.number
												)
											}
										/>
									</>
								) : (
									<>
										{/* <h2>Bussniss details</h2> */}
										<div className='field_wrap full_div'>
											<input
												type='text'
												name=''
												value={sellerData.name}
												placeholder='Store Name*'
												required
												onChange={(e) =>
													setSellerData({ ...sellerData, name: e.target.value })
												}
											/>
										</div>
										<div className='field_wrap full_div'>
											<input
												type='text'
												name=''
												onChange={(e) =>
													setSellerData({ ...sellerData, type: e.target.value })
												}
												value={sellerData.type}
												placeholder='Store Type*'
												required
											/>
										</div>

										<div className='field_wrap full_div'>
											<input
												type='text'
												name=''
												disabled
												placeholder='Store Image*'
												required
												value={imageUrl}
											/>
										</div>
										<div
											style={{ marginTop: 0, marginBottom: "20px" }}
											class='upload-btn-wrapper btn_wrap'>
											<button
												type='submit'
												className=''
												name=''>
												{!loading ? (
													"Upload image"
												) : (
													<BeatLoader
														color={"white"}
														loading={loading}
														size={13}
														aria-label='Loading Spinner'
														data-testid='loader'
													/>
												)}
											</button>
											<input
												type='file'
												onChange={handleUpload}
												name='myfile'
											/>
										</div>
										<div className='field_wrap full_div'>
											<input
												type='text'
												name=''
												onChange={(e) =>
													setSellerData({
														...sellerData,
														location: e.target.value,
													})
												}
												value={sellerData.location}
												placeholder='Store Location*'
												required
											/>
										</div>

										<div className='field_wrap full_div'>
											<textarea
												placeholder='Store Description*'
												value={sellerData.description}
												onChange={(e) =>
													setSellerData({
														...sellerData,
														description: e.target.value,
													})
												}></textarea>
										</div>
										<LoadingButton
											loading={loadingSeller}
											onClick={handleSubmit}
											disabled={
												!(
													sellerData.name &&
													sellerData.type &&
													sellerData.description &&
													sellerData.location
												)
											}
										/>
									</>
								)}
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Sellerform;
