import { useState, useEffect, useContext } from "react";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import CoreHttpHandler from "../http/services/CoreHttpHandler";
import { ToastAlertError, ToastAlertSuccess } from "../reauseble";
import { ToastContainer } from "react-toastify";
import { configConsumerProps } from "antd/lib/config-provider";
import { GrFormClose } from "react-icons/gr";
const Cart = ({ allCarts, totalItems, totalPrice, fetchCarts }) => {
	const token = localStorage.getItem("user_token");
	const navigate = useNavigate();

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text, i) => (
				<a
					onClick={() => {
						i?.id
							? navigate(`/singleproduct/${i.id}`)
							: navigate(`/singledeal/${i.hot_deal_id}`);
					}}>
					{i.name ? i.name : i.hot_deal_name}
				</a>
			),
		},
		{
			title: "Store",
			key: "store_name",
			dataIndex: "store_name",
			render: (text, i) => (
				<span>{text ? text : i.products[0].store_name}</span>
			),
		},

		{
			title: "Price",
			dataIndex: "price",
			key: "price",
			render: (text, i) => (
				<span>
					{i.hot_deal_id
						? i.deal_price
						: i.sale_price > 0
						? i.sale_price
						: i.price}
				</span>
			),
		},
		{
			title: "Quantity",
			dataIndex: "qty",
			key: "qty",
			render: (text) => <span>{text}</span>,
		},
		{
			title: "Remove",
			dataIndex: "qty",
			key: "qty",
			render: (text, i) => (
				<span
					onClick={() => removeCart(i)}
					style={{ cursor: "pointer" }}>
					X {/* <GrFormClose /> */}
				</span>
			),
		},
	];

	const [productsArray, setProductsArray] = useState([]);
	const [dealsArray, setDealsArray] = useState([]);
	const [productQuantity, setProductQuantity] = useState([]);
	const [dealQuantity, setDealQuantity] = useState([]);
	const [discountedPrice, setDiscountedPrice] = useState("");
	const [coupon, setCoupon] = useState();
	const [percent, setPercent] = useState({
		number: "0",
		id: "",
	});

	const removeCart = (cart) => {
		CoreHttpHandler.request(
			"cart",
			"remove",
			{
				product_ids: cart.id ? [cart.id] : [],
				hot_deal_ids: cart.hot_deal_id ? [cart.hot_deal_id] : [],
			},
			(res) => {
				ToastAlertSuccess("Item removed Successfully");
				fetchCarts();
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
	useEffect(() => {
		if (!token) {
			setTimeout(() => {
				navigate("/login");
			}, 2000);
		}
		if (allCarts?.length) {
			let quantities = [];
			let products = [];
			let deals = [];
			let dealQty = [];
			allCarts.map((val) => {
				if (val.id) {
					quantities.push(val.qty);
					products.push(val.id);
				} else {
					deals.push(val.hot_deal_id);
					dealQty.push(val.qty);
				}
			});
			setProductsArray(products);
			setProductQuantity(quantities);
			setDealQuantity(dealQty);
			setDealsArray(deals);
		}
	}, [allCarts]);
	const handleDetails = (e) => {
		navigate("/checkout", {
			state: {
				products: productsArray,
				quantity: productQuantity,
				deals: dealsArray,
				store_id: allCarts[0].store_id,
				dealsQty: dealQuantity,
				orderLocation: allCarts[0].hot_deal_id
					? allCarts[0].products[0].location
					: allCarts[0].location,
				total: discountedPrice ? discountedPrice : totalPrice,
				coupon_id: percent.id,
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
				const discount = res.data.data.data;
				setPercent({
					number: discount.percent,
					id: discount.coupon_id,
				});
				const parse = discount.percent.replace("%", "");
				const subractVal = (totalPrice * parse) / 100;
				const finalPrice = totalPrice - subractVal;
				setDiscountedPrice(finalPrice);
				ToastAlertSuccess(`Successfully added ${discount.percent} OFF`);
				setCoupon("");
			},
			(err) => {
				console.log(err);
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
												scroll={{
													x: 400,
												}}
											/>
										</div>
										<div className='col summery'>
											<div className='added_prod_details'>
												<div className='cartdetails_wrap'>
													<h4>Order Summary</h4>
													<span className='title_label'>Items Total</span>
													<span className='value_label'>{totalItems}</span>
													<span className='title_label'>Coupon Discount</span>
													<span className='value_label'>{percent.number}</span>
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
