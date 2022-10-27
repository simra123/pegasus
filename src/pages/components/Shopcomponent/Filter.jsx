import React from "react";
import prodimg from "../../../assets/images/pro-img1.png";

const Filter = ({ data }) => {
	console.log(data);
	return (
		<>
			<div className='filter_wrap'>
				<div className='inner_wrap'>
					<div className='prod_srch_wrap'>
						<form action=''>
							<input
								type='text'
								className='srch_fld'
								placeholder='Search'
							/>
							<input
								type='submit'
								className='btn_fld'
								value={"s"}
							/>
						</form>
					</div>
					<div className='cat_wrap'>
						<h4>Categories</h4>
						<ul className='cat_list'>
							{data.map((val) => {
								return (
									<li style={{ textTransform: "capitalize" }}>{val.name}</li>
								);
							})}
						</ul>
					</div>
					{/* <div className='price_rng_wrap'>
						<h4>Price Filter</h4>
					</div> */}
					<div className='discnt_prod_list'>
						<h4>Discounted Products</h4>
						<ul className='sidebar_prod_list'>
							<li>
								<div className='img_wrap'>
									<img
										src={prodimg}
										alt='no'
									/>
								</div>
								<div className='price_wrap'>
									<h6>Jinro Chamisul Fresh Soju</h6>
									<span className='regular_price'>
										<span className='curreny'>$</span>39.54
									</span>
									-
									<span className='discount_price'>
										<span className='curreny'>$</span>20.00
									</span>
								</div>
							</li>
							<li>
								<div className='img_wrap'>
									<img
										src={prodimg}
										alt='no'
									/>
								</div>
								<div className='price_wrap'>
									<h6>Crown Royal</h6>
									<span className='regular_price'>
										<span className='curreny'>$</span>20.00
									</span>
									-
									<span className='discount_price'>
										<span className='curreny'>$</span>20.00
									</span>
								</div>
							</li>
							<li>
								<div className='img_wrap'>
									<img
										src={prodimg}
										alt='no'
									/>
								</div>
								<div className='price_wrap'>
									<h6>Crown Royal</h6>
									<span className='regular_price'>
										<span className='curreny'>$</span>20.00
									</span>
									-
									<span className='discount_price'>
										<span className='curreny'>$</span>20.00
									</span>
								</div>
							</li>
						</ul>
					</div>
					<div className='newsletter_wrap'>
						<h4>Newsletter</h4>
						<form action=''>
							<input
								type='email'
								className='email_fld'
								placeholder='Email'
							/>
							<input
								type='submit'
								className='btn_fld'
							/>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Filter;
