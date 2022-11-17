import { useState, useEffect, useContext } from "react";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CoreHttpHandler from "../http/services/CoreHttpHandler";
import { ToastAlertError, ToastAlertSuccess } from "../reauseble";
import { ToastContainer } from "react-toastify";
import { configConsumerProps } from "antd/lib/config-provider";
const columns = [
	{
		title: "Product Name",
		dataIndex: "name",
		key: "name",
		render: (text, i) => <Link to={`/singleproduct/${i.id}`}>{text}</Link>,
	},
	{
		title: "Store",
		key: "store_name",
		dataIndex: "store_name",
		render: (text) => <span>{text}</span>,
	},
	{
		title: "Category",
		key: "product_category",
		dataIndex: "product_category",
		render: (text) => <span>{text}</span>,
	},
	{
		title: "Price",
		dataIndex: "price",
		key: "price",
		render: (text) => <span>{text}</span>,
	},
	{
		title: "Quantity",
		dataIndex: "qty",
		key: "qty",
		render: (text) => <span>{text}</span>,
	},
];

const Cart = ({ allCarts, totalItems, totalPrice }) => {
	const token = localStorage.getItem("user_token");
	const navigate = useNavigate();
	const [productsArray, setProductsArray] = useState([]);
	const [productQuantity, setProductQuantity] = useState([]);
	const [discountedPrice, setDiscountedPrice] = useState("");
	const [coupon, setCoupon] = useState("");
	useEffect(() => {
		if (!token) {
			setTimeout(() => {
				navigate("/login");
			}, 2000);
		}
		if (allCarts?.length) {
			let quantities = [];
			let products = [];
			allCarts.map((val) => {
				quantities.push(val.qty);
				products.push(val.id);
			});
			setProductsArray(products);
			setProductQuantity(quantities);
		}
	}, [allCarts]);
	const handleDetails = (e) => {
		navigate("/checkout", {
			state: {
				products: productsArray,
				quantity: productQuantity,
				orderLocation: allCarts[0]?.location,
				total: discountedPrice ? discountedPrice : totalPrice,
			},
		});
	};
	const handleCoupon = (e) => {
		e.preventDefault();
		CoreHttpHandler.request(
			"orders",
			"coupon",
			{
				coupon: coupon,
			},
			(res) => {
				const discount = res.data.data.data.percent;
				const parse = discount.replace("%", "");
				const subractVal = (totalPrice * parse) / 100;
				const finalPrice = totalPrice - subractVal;
				setDiscountedPrice(finalPrice);
				ToastAlertSuccess(`Successfully added ${discount} OFF`);
				setCoupon("");
			},
			(err) => {
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
			<ToastContainer />
			<div className='content_wrap'>
				<section className='sec sec2 wishlist_wrap cart_wrap'>
					<div className='container'>
						<div className='inner_wrap'>
							{token ? (
								<>
									{" "}
									<h2>Cart</h2>
									<div className='content_wrap'>
										<div className='col'>
											<Table
												columns={columns}
												dataSource={allCarts}
												pagination={false}
											/>
										</div>
										<div className='col summery'>
											<div className='added_prod_details'>
												<div className='cartdetails_wrap'>
													<h4>Order Summery</h4>
													<span className='title_label'>Items Total</span>
													<span className='value_label'>{totalItems}</span>
													{/* <span className='title_label'>Delivery Fee</span>
													<span className='value_label'>$ 0</span> */}
													<span className='title_label'>Total Payments</span>
													<span className='value_label'>
														$ {discountedPrice ? discountedPrice : totalPrice}
													</span>
													<form style={{ width: "100%" }}>
														<input
															type='text'
															name=''
															placeholder='Apply Coupon'
															required
															value={coupon}
															onChange={(e) => setCoupon(e.target.value)}
														/>
														<button onClick={handleCoupon}>apply</button>
													</form>
												</div>
											</div>

											<button
												onClick={handleDetails}
												className='chckout_btn'>
												Proceed to Checkout
											</button>
										</div>
									</div>
								</>
							) : (
								<h2>Please Login First</h2>
							)}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Cart;
