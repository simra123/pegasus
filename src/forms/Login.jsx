import React, { useState } from "react";
import { Link } from "react-router-dom";
import CoreHttpHandler from "../http/services/CoreHttpHandler";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		CoreHttpHandler.request(
			"customers",
			"login",
			{
				username: username,
				password: password,
			},
			(response) => {
				const token = response.data.data.token;
				localStorage.setItem("user_token", token);
			},
			(err) => {
				console.log(err);
			}
		);
	};

	const token = localStorage.getItem("user_token");
	console.log(token);
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
								<div className='btn_wrap'>
									<input
										type='submit'
										name=''
										onClick={(e) => handleSubmit(e)}
									/>
								</div>
							</form>
						</div>
						<div className='bottom_wrap'>
							<p>
								Don't have an account?{" "}
								<Link to='/registerform'> Register Now </Link>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
