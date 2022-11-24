import React, { useState } from "react";
import {
	ToastAlertSuccess,
	ToastAlertError,
	LoadingButton,
} from "../reauseble";
import { ToastContainer } from "react-toastify";
import CoreHttpHandler from "../http/services/CoreHttpHandler";

const Registerform = () => {
	const [signinCred, setSigninCred] = useState({
		username: "",
		password: "",
		number: "",
		email: "",
		confirmPassword: "",
	});

	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		if (signinCred.password == signinCred.confirmPassword) {
			CoreHttpHandler.request(
				"customers",
				"create",
				signinCred,
				(response) => {
					setLoading(false);
					ToastAlertSuccess("You have Registered Successfully");
					setSigninCred({
						username: "",
						password: "",
						number: "",
						email: "",
						confirmPassword: "",
					});
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
		} else {
			ToastAlertError("Confirm Password doesnt match");
			setLoading(false);
		}
	};
	return (
		<>
			<ToastContainer />
			<section className='main_form signup'>
				{/* <canvas></canvas> */}
				<div className='container'>
					<div className='inner_sec'>
						<h2>Register Now</h2>
						<div className='form_wrap'>
							<form>
								<div className='field_wrap full_div'>
									<input
										type='text'
										name=''
										placeholder='User Name*'
										required
										value={signinCred.username}
										onChange={(e) =>
											setSigninCred({ ...signinCred, username: e.target.value })
										}
									/>
								</div>
								<div className='field_wrap full_div'>
									<input
										type='email'
										name=''
										placeholder='Your Email*'
										value={signinCred.email}
										required
										onChange={(e) =>
											setSigninCred({ ...signinCred, email: e.target.value })
										}
									/>
								</div>
								<div className='field_wrap full_div'>
									<input
										type='password'
										name=''
										placeholder='Password*'
										required
										value={signinCred.password}
										onChange={(e) =>
											setSigninCred({ ...signinCred, password: e.target.value })
										}
									/>
								</div>
								<div className='field_wrap full_div'>
									<input
										type='password'
										name=''
										placeholder='Confirm Password*'
										required
										value={signinCred.confirmPassword}
										onChange={(e) =>
											setSigninCred({
												...signinCred,
												confirmPassword: e.target.value,
											})
										}
									/>
								</div>
								<LoadingButton
									loading={loading}
									onClick={handleSubmit}
									text={"Create"}
								/>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Registerform;
