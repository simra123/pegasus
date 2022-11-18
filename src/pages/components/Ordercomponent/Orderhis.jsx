import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import '../../Orderdetail';
import { Table } from "antd";
import moment from "moment/moment";
import CoreHttpHandler from "../../../http/services/CoreHttpHandler";

const Orderhis = () => {
	const columns = [
		{
			title: "Order #",
			dataIndex: "order_no",
			key: "name",
			render: (text, i) => <a onClick={() => handleSingleOrder(i)}>{text}</a>,
		},
		{
			title: "Placed on",
			key: "store_name",
			dataIndex: "dt",
			render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
		},
		{
			title: "status",
			dataIndex: "status",
			key: "price",
			render: (text) => <span>{text}</span>,
		},
		{
			title: "Items",
			key: "products",
			dataIndex: "products",
			render: (text, i) => <span>{text.length}</span>,
		},
		{
			title: "Delivery fee",
			dataIndex: "delivery_fees",
			key: "price",
			render: (text) => <span>{text}</span>,
		},

		{
			title: "Total",
			dataIndex: "amount",
			key: "qty",
			render: (text, i) => <span>{Number(text) + i.delivery_fees}</span>,
		},
		{
			title: "Details",
			dataIndex: "view",
			key: "qty",
			render: (text, i) => <a onClick={() => handleSingleOrder(i)}>view</a>,
		},
	];
	const [pastOrders, setPastOrders] = useState([]);
	const [ongoingOrders, setOngoingOrders] = useState([]);
	const navigate = useNavigate();

	const handleSingleOrder = (data) => {
		navigate(`/orderdetail/${data.order_no}`, {
			state: {
				...data,
			},
		});
	};
	useEffect(() => {
		CoreHttpHandler.request(
			"orders",
			"history",
			{
				page: 0,
				limit: 15,
				//status: "order_placed",
			},
			(response) => {
				const res = response.data.data.orders.orders;
				console.log(res);
				setOngoingOrders(response.data.data.orders.orders);
			},
			(err) => {
				console.log(err);
			}
		);
		CoreHttpHandler.request(
			"orders",
			"history",
			{
				page: 0,
				limit: 15,
				status: "delieverd",
			},
			(response) => {
				const res = response.data.data.orders.orders;
				//console.log(res);
				setPastOrders(response.data.data.orders.orders);
			},
			(err) => {
				console.log(err);
			}
		);
	}, []);
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
								dataSource={ongoingOrders}
								pagination={false}
							/>
						</div>
						<br />
						<h2>
							Past Orders <span>{pastOrders.length}</span>
						</h2>
						<div className='order_list'>
							<Table
								columns={columns}
								dataSource={pastOrders}
								pagination={false}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Orderhis;
