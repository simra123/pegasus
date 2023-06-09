import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import companyLogo from "../../../assets/images/logo.png";
import { ScrollUp } from "../../../reauseble";
import CoreHttpHandler from "../../../http/services/CoreHttpHandler";
const FooterTopComp = ({ show, getProducts }) => {
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();
	const getCategories = () => {
		CoreHttpHandler.request(
			"products",
			"categories",
			{},
			(response) => {
				const res = response.data.data.data.data;
				setCategories(res);
			},
			(err) => {
				console.log(err);
			}
		);
	};

	useEffect(() => {
		if (!show) {
			getCategories();
		}
	}, [show]);
	const handleFilter = (cate) => {
		navigate("/shop");
		ScrollUp();
		getProducts(cate.id, 0);
	};
	return (
		<>
			<div className='footer_top_wrap'>
				<div className='col col1'>
					<Link to='/'>
						<img
							src={companyLogo}
							alt='no'
						/>
					</Link>
					<p>
						We all like to have fun and let loose. Our purpose is to make those
						fun times more convenient and safer. We are committed to brightening
						life's moments big or small with timely and prompt alcohol and vape
						delivery.
					</p>
				</div>
				<div className='col col2'>
					<h4>Quick Links</h4>
					<ul className='menu_wrap'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/shop'>Shop</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/faq'>FAQ's</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
				<div className='col col3'>
					<h4>Categories</h4>
					<ul className='menu_wrap'>
						{categories?.map((val) => {
							return (
								<li key={val.id}>
									<a
										onClick={() => handleFilter(val)}
										key={val.id}
										style={{ textTransform: "capitalize" }}>
										{" "}
										{val?.name}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='col col4'>
					<h4>Contact Info</h4>
					<ul className='menu_wrap'>
						<li>
							<a href='tel:4696349501'>4696349501</a>
						</li>
						<li>
							<a href='mailto:support@pegasusdeliveryllc.com'>
								support@pegasusdeliveryllc.com
							</a>
						</li>
					</ul>
					{/* <div className='info'>
						<span>
							Phone<a href='tel:4696349501'>4696349501</a>
						</span>
					</div>
					<div className='info'>
						<span>
							Email
							<a href='mailto:support@pegasusdeliveryllc.com'>
								support@pegasusdeliveryllc.com
							</a>
						</span>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default FooterTopComp;
