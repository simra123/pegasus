import React, { useEffect } from "react";
import { ProductImage } from "../../../reauseble";
import { useLocation, Link, useNavigate } from "react-router-dom";
import moment from "moment";
import parser from "html-react-parser";

const Orderdetails = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (!state) {
			navigate("/orderhis");
		}
	}, []);
	console.log(state);
	return (
		<div className='content_wrap'>
			<section className='order_details'>
				<div className='container'>
					<div className='inner_wrap'>
						<div className='card'>
							<div className='order_number'>
								{" "}
								<h3>Order # {state?.order_no}</h3>
								<span>
									placed on : {moment(state?.dt).format("YYYY-MM-DD")}
								</span>
							</div>

							<span style={{ marginLeft: "auto", marginTop: "20px" }}>
								total : <b>{Number(state?.amount) + state?.delivery_fees}</b>
							</span>
						</div>

						{state?.products?.map((val) => {
							return (
								<div className='card'>
									<img
										src={
											val.featured_image
												? `https://upload.its.com.pk/v1/fetch/file/${val.featured_image}`
												: ProductImage
										}
										alt='featured image'
										height={100}
										width={100}
										className='p-3'
									/>
									<div
										className='pro_name'
										style={{ paddingLeft: "50px", width: "500px" }}>
										<h3>{val.name}</h3>
										<p>{val.store_name}</p>
									</div>
									<span style={{ padding: "30px" }}>price : {val.price}</span>
									<span style={{ padding: "30px" }}>qty : {val.quantity}</span>
									<Link
										to={`/singleproduct/${val.id}`}
										style={{ padding: "30px" }}>
										view
									</Link>
								</div>
							);
						})}

						<div className='end_card'>
							<div className='card shipping_details'>
								<div className='rider'>
									<h4>Rider Details</h4>
									{state?.rider.number ? (
										<>
											<span>
												Name - {state?.rider.firstname} {state?.rider.lastname}
											</span>
											<br />
											<span>Number - {state?.rider.number}</span>
											<br />
											<span>Username - {state?.rider.username}</span>
											<br />
										</>
									) : (
										"The Rider hasnt assigned yet"
									)}
								</div>
								<div className='shipping'>
									<h4>Shipping details</h4>
									<span>first name - {state?.firstname}</span>
									<br />
									<span>last name - {state?.lastname}</span>
									<br />
									<span>Address - {state?.address}</span>
									<br />
								</div>
							</div>
							<div className='col summery'>
								<div className='added_prod_details'>
									<div className='cartdetails_wrap'>
										<h4>Order Summery</h4>
										<span className='title_label'>Amount:</span>
										<span className='value_label'>$ {state?.amount}</span>

										<span className='title_label'>Delivery Fee</span>
										<span className='value_label'>
											$ {state?.delivery_fees}
										</span>

										<span className='title_label'>Total Payments</span>
										<span className='value_label'>
											$ {Number(state?.amount) + state?.delivery_fees}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Orderdetails;
