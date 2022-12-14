import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import '../../Orderdetail';
import { Table } from "antd";
import moment from "moment/moment";
import CoreHttpHandler from "../../../http/services/CoreHttpHandler";
import { Pagination } from "antd";

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
			title: "Products",
			key: "products",
			dataIndex: "products",
			render: (text, i) => <span>{text.length}</span>,
		},
		{
			title: "Deals",
			key: "hot_deals",
			dataIndex: "hot_deals",
			render: (text, i) => <span>{text.length}</span>,
		},
		{
			title: "Delivery fee",
			dataIndex: "delivery_fees",
			key: "price",
			render: (text) => <span>{text ? text : 0}</span>,
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
	const [currentParams, setCurrentParams] = useState({
		page: 0,
		limit: 5,
	});
	const [currentParams2, setCurrentParams2] = useState({
		page: 0,
		limit: 5,
	});
	const [totalPagesNow, setTotalPagesNow] = useState(0);
	const [totalPagesPast, setTotalPagesPast] = useState(0);
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
				...currentParams,
				sortBy: "desc",
			},
			(response) => {
				const res = response.data.data.orders;
				setOngoingOrders(res.orders);
				setTotalPagesNow(res.totalItems);
			},
			(err) => {
				console.log(err);
			}
		);
	}, [currentParams]);
	useEffect(() => {
		CoreHttpHandler.request(
			"orders",
			"history",
			{
				...currentParams2,
				status: "delieverd",
				sortBy: "desc",
			},
			(response) => {
				const res = response.data.data.orders;
				setPastOrders(res.orders);
				setTotalPagesPast(res.totalItems);
			},
			(err) => {
				console.log(err);
			}
		);
	}, [currentParams2]);

	return (
		<>
			<section
				className='sec sec2 orderhis_sec '
				style={{ marginTop: "70px" }}>
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
								scroll={{
									x: 280,
								}}
							/>
						</div>
						{totalPagesNow > 5 && (
							<Pagination
								className='active-pagin'
								pageSize={5}
								style={{ float: "right" }}
								total={totalPagesNow}
								onChange={(e) => {
									setCurrentParams({
										limit: 5,
										page: e - 1,
									});
								}}
							/>
						)}

						<br />
						<h2 style={{ marginTop: "50px" }}>
							Past Orders <span>{pastOrders.length}</span>
						</h2>
						<div className='order_list'>
							<Table
								columns={columns}
								dataSource={pastOrders}
								scroll={{
									x: 280,
								}}
								pagination={false}
							/>
						</div>
						{totalPagesPast > 5 && (
							<Pagination
								className='active-pagin'
								pageSize={5}
								style={{ float: "right" }}
								total={totalPagesPast}
								onChange={(e) => {
									setCurrentParams2({
										limit: 5,
										page: e - 1,
									});
								}}
							/>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Orderhis;
