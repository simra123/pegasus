import React, { useState } from "react";
import CoreHttpHandler from "../http/services/CoreHttpHandler";
import {
	ToastAlertSuccess,
	ToastAlertError,
	LoadingButton,
} from "../reauseble";
import { ToastContainer } from "react-toastify";
const Forgotpassword = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [showFields, setshowFields] = useState(false);
	const [password, setPassword] = useState("");
	const [token, setToken] = useState("");
	const handleSubmit = (e) => {
		if (email) {
			setLoading(true);
			e.preventDefault();
			CoreHttpHandler.request(
				"customers",
				"sendEmail",
				{
					email: email,
				},
				(response) => {
					setLoading(false);
					setEmail("");
					ToastAlertSuccess("Token successfully sent to your Email");
					setshowFields(true);
				},
				(err) => {
					setLoading(false);
					setshowFields(false);

					ToastAlertError(
						err?.response?.data?.message
							? err?.response.data.message
							: "something went wrong"
					);
				}
			);
		}
	};
	const handleReset = (e) => {
		e.preventDefault();
		if (password && token) {
			setLoading(true);
			e.preventDefault();
			CoreHttpHandler.request(
				"customers",
				"reset",
				{
					token: token,
					password: password,
				},
				(response) => {
					setLoading(false);
					setPassword("");
					setToken("");
					setshowFields(false);

					ToastAlertSuccess("Your Password is successfully Changed");
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
		}
	};
	return (
		<>
			<ToastContainer />
			{!showFields ? (
				<section className='main_form forgot_sec'>
					{/* <canvas></canvas> */}
					<div className='container'>
						<div className='inner_sec'>
							<h4>
								Please Enter Your Email Address To Receive a Verification Code
							</h4>
							<div className='form_wrap'>
								<form>
									<div className='field_wrap full_div'>
										<input
											type='email'
											name=''
											placeholder='Enter Your Email'
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<LoadingButton
										loading={loading}
										onClick={handleSubmit}
										text={"Submit"}
									/>
								</form>
							</div>
						</div>
					</div>
				</section>
			) : (
				<section className='main_form craetenewpass'>
					<div className='container'>
						<div className='inner_sec'>
							<h2>Create New Password</h2>
							<div className='form_wrap'>
								<form>
									<div className='field_wrap full_div'>
										<input
											type='text'
											name=''
											placeholder='Token*'
											required
											value={token}
											onChange={(e) => setToken(e.target.value)}
										/>
									</div>
									<div className='field_wrap full_div'>
										<input
											type='password'
											name=''
											placeholder='New Password*'
											required
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<LoadingButton
										loading={loading}
										onClick={handleReset}
										text={"Reset"}
									/>
								</form>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Forgotpassword;
