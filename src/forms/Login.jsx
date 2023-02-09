import React, { useState } from "react";
import { Link } from "react-router-dom";
import CoreHttpHandler from "../http/services/CoreHttpHandler";
import {
	ToastAlertSuccess,
	ToastAlertError,
	LoadingButton,
} from "../reauseble";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Login = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		CoreHttpHandler.request(
			"customers",
			"login",
			{
				username: username,
				password: password,
			},
			(response) => {
				setLoading(false);
				const token = response.data.data.token;
				localStorage.setItem("user_token", token);

				ToastAlertSuccess("you have Login Successfully");

				setTimeout(() => {
					navigate("/");
					window.location.reload(false);
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
	};

	return (
		<>
			<section className='main_form'>
				{/* <canvas></canvas> */}
				<div className='container'>
					<div className='inner_sec'>
						<h2>Login</h2>
						<div className='form_wrap'>
							<form>
								<div className='field_wrap full_div'>
									<input
										type='text'
										name=''
										placeholder='User Name*'
										required
										onChange={(e) => setUsername(e.target.value)}
									/>
								</div>
								<div className='field_wrap full_div'>
									<input
										type='password'
										name=''
										placeholder='Password*'
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>
								<div className='field_wrap hlf_div'>
									<input
										type='checkbox'
										name=''
									/>{" "}
									Remember Me
								</div>
								<div className='field_wrap hlf_div'>
									<Link to='/forgotpassword'> Forget Password </Link>
								</div>
								<LoadingButton
									loading={loading}
									onClick={handleSubmit}
								/>
							</form>
						</div>
						<div className='bottom_wrap'>
							<p>
								Don't have an account?{" "}
								<Link to='/registerform'> Register Now </Link>
							</p>
							<Link
								style={{ color: "#f3ac3b" }}
								to='/sellerform'>
								{" "}
								Become a Seller{" "}
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
