import React, { useState } from "react";
import {
	LoadingButton,
	ToastAlertSuccess,
	ToastAlertError,
} from "../../../reauseble";
import { ToastContainer } from "react-toastify";
import CoreHttpHandler from "../../../http/services/CoreHttpHandler";
const Contactsec1 = () => {
	const [contactDetails, setContactDetails] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const handleContact = (e) => {
		setLoading(true);
		e.preventDefault();
		const { name, email, subject, message } = contactDetails;
		if (name && email && subject && message) {
			CoreHttpHandler.request(
				"forms",
				"contact",
				{
					...contactDetails,
				},
				(response) => {
					setLoading(false);
					ToastAlertSuccess("Successfuly submitted");
				},
				(err) => {
					ToastAlertError(
						err?.response?.data?.message
							? err?.response.data.message
							: "something went wrong"
					);
					setLoading(false);
				}
			);
		} else {
			setLoading(false);
			ToastAlertError("Please fill all fields");
		}
	};
	return (
		<>
			<ToastContainer />
			<section className='sec contact_pg_sec1'>
				<div className='container'>
					<div className='inner_wrap'>
						<div className='col content_col'>
							<h3>Contact Info</h3>
							<label>
								Phone
								<a href='tel:888-888-8888'>888-888-8888</a>
							</label>
							<label>
								Email
								<a href='mailto:admin@gmail.com'>admin@gmail.com</a>
							</label>
							<label>
								Address
								<a href='#0'>Ny 1011 Street 13 Newyork</a>
							</label>
						</div>
						<div className='col form_col'>
							<h3>Contact Us</h3>
							<form action=''>
								<input
									type='text'
									name='user-name'
									value={contactDetails.name}
									onChange={(e) =>
										setContactDetails({
											...contactDetails,
											name: e.target.value,
										})
									}
									placeholder='Name*'
									className='fld'
									required
								/>
								<input
									type='email'
									name='user-email'
									value={contactDetails.email}
									onChange={(e) =>
										setContactDetails({
											...contactDetails,
											email: e.target.value,
										})
									}
									placeholder='Email*'
									className='fld'
									required
								/>
								<input
									type='text'
									name='user-subject'
									value={contactDetails.subject}
									onChange={(e) =>
										setContactDetails({
											...contactDetails,
											subject: e.target.value,
										})
									}
									placeholder='Subject*'
									className='fld'
									required
								/>
								<textarea
									name='user-msg'
									value={contactDetails.message}
									onChange={(e) =>
										setContactDetails({
											...contactDetails,
											message: e.target.value,
										})
									}
									rows='10'
									placeholder='Message'
									className='fld'></textarea>
								<LoadingButton
									text='Submit'
									loading={loading}
									className='btn'
									onClick={handleContact}
								/>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contactsec1;
