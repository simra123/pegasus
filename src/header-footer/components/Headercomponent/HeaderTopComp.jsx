import React, { useState, useContext, useEffect, useRef } from "react";
import { Button, Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import companyLogo from "../../../assets/images/logo.png";
import bskimg from "../../../assets/images/top-basket.png";
import phnimg from "../../../assets/images/top-phone.png";
import userimg from "../../../assets/images/top-user.png";
import { CartCount } from "../../../context-hooks";
import { RiArrowDownSFill } from "react-icons/ri";
const HeaderTopComp = ({ getProducts, setSearchVal, searchVal }) => {
	const [open, setOpen] = useState(false);
	const [showDropdowm, setShowDropdowm] = useState(false);
	const [cartCount] = useContext(CartCount);
	const navigate = useNavigate();
	const location = useLocation();

	const token = localStorage.getItem("user_token");
	const handleLogout = () => {
		localStorage.removeItem("user_token");
		window.location.reload(false);
	};
	const handleSearch = (e) => {
		e.preventDefault();
		getProducts();
		navigate("/shop");
	};
	const dropdown = useRef(null);

	useEffect(() => {
		setOpen(false);
	}, [location.pathname]);

	return (
		<>
			<div className='top_head'>
				<div className='container'>
					<div className='inner-wrap'>
						<div className='col logo_wrap'>
							<Link to='/'>
								<img
									src={companyLogo}
									alt='image'
								/>
							</Link>
							<div className='menu_btn'>
								<Button
									type='primary'
									className='nav_menu_btn'
									onClick={() => setOpen(true)}>
									<FontAwesomeIcon icon={faBars} />
								</Button>
							</div>
							<Drawer
								className='main_menu'
								title='Pegasus'
								placement='right'
								onClose={() => setOpen(false)}
								open={open}>
								<div className='nav-links'>
									<Link to='/'>Home</Link>
									<Link to='/shop'>Shop</Link>
									<Link to='/about'>About</Link>
									<Link to='/faq'>FAQ's</Link>
									<Link to='/contact'>Contact</Link>
									<Link to='/cart'>Cart</Link>
									<div className='icon_blk center'>
										<div
											className='info_wrap'
											ref={dropdown}>
											{token ? (
												<div className='dropdown-content'>
													<a
														style={{ cursor: "pointer" }}
														onClick={() => navigate("/orderhistory")}>
														Order History
													</a>
													<a onClick={handleLogout}>Logout</a>
												</div>
											) : (
												<Link to='/login'> Sign In </Link>
											)}
										</div>
									</div>
								</div>
							</Drawer>
						</div>
						<div className='col form_wrap'>
							<form>
								{/* <select className='form_field select_field'>
									<option>All Catagories</option>
								</select> */}
								<input
									type='text'
									value={searchVal}
									onChange={(e) => setSearchVal(e.target.value)}
									className='form_field text_field'
									placeholder="I'm Shopping for..."
								/>
								{searchVal && (
									<input
										className='form_field btn_field_close'
										style={{ cursor: "pointer" }}
										onClick={() => {
											setSearchVal("");
											getProducts(true);
										}}
									/>
								)}

								<input
									type='submit'
									className='form_field btn_field'
									onClick={handleSearch}
								/>
							</form>
						</div>
						<div className='col info_wrap'>
							<div className='icon_blk left'>
								<div className='icon_wrap'>
									<img
										src={phnimg}
										alt='image'
									/>
								</div>
								<div className='info_wrap'>
									<h4>24/7 Support</h4>
									<a href='tel:4696349501'>4696349501</a>
								</div>
							</div>
							<div className='icon_blk center'>
								<div className='icon_wrap'>
									<img
										src={userimg}
										alt='image'
									/>
								</div>
								<div
									className='info_wrap'
									ref={dropdown}>
									<h4>Account</h4>
									{token ? (
										<div className='dropdown'>
											<button
												className='dropbtn'
												onClick={() => setShowDropdowm(!showDropdowm)}>
												Profile
												<RiArrowDownSFill size={15} />
											</button>
											{showDropdowm && (
												<div className='dropdown-content'>
													<a onClick={handleLogout}>Logout</a>
													<a
														style={{ cursor: "pointer" }}
														onClick={() => navigate("/orderhistory")}>
														Order History
													</a>
												</div>
											)}
										</div>
									) : (
										<Link to='/login'> Sign In </Link>
									)}
								</div>
							</div>
							<div className='icon_blk right'>
								<Link to='/cart'>
									<div className='icon_wrap'>
										<img
											src={bskimg}
											alt='image'
										/>
										<span className='prod_list'>{cartCount.count}</span>
									</div>
								</Link>
								<div className='info_wrap'>
									<h4>Cart</h4>
									<Link to='/cart'>
										<span className='curreny'>$ </span>
										{cartCount.balance}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderTopComp;
