import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import '../../Orderdetail';
import { Table } from "antd";
import CoreHttpHandler from "../../../http/services/CoreHttpHandler";
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
const allCarts = [
	{
		price: 20,
		qty: 3,
		product_category: "wine",
		store_name: "My store",
		name: "whatever it is",
	},
];

const Orderhis = () => {
	const [pastOrders, setPastOrders] = useState([]);
	const [ongoingOrders, setOngoingOrders] = useState([]);
	useEffect(() => {
		CoreHttpHandler.request(
			"orders",
			"history",
			{
				page: 0,
				limit: 15,
				//	status: "order_placed",
			},
			(response) => {
				const res = response.data.data.orders.orders;
				//res.filter((val)=> )
				setOngoingOrders(response.data.data.orders.orders);
			},
			(err) => {
				console.log(err);
			}
		);
	}, []);
	console.log(ongoingOrders, "orders");
	return (
		<>
			<section className='sec sec2 orderhis_sec'>
				<div className='container'>
					<div className='inner_wrap'>
						<h2>
							Now{" "}
							<span>{ongoingOrders?.length ? ongoingOrders?.length : 0}</span>
						</h2>
						<div className='order_list'>
							<Table
								columns={columns}
								dataSource={allCarts}
								pagination={false}
							/>
						</div>
						<br />
						<h2>
							Past Orders <span>0</span>
						</h2>
					</div>
				</div>
			</section>
		</>
	);
};

export default Orderhis;
