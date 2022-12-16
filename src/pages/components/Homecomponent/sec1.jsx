import React from "react";
import { Link } from "react-router-dom";
import homebanner from "../../../assets/images/banner-img.png";
import pckthree from "../../../assets/images/packthree.png";

const sec1 = () => {
	return (
		<>
			<section className='sec sec1'>
				<div className='container'>
					<div className='inner_wrap'>
						<div className='col'>
							<h1>Alcohol and Vape delivery in minutes!</h1>
							<p>
							Get your favorite drinks and E-cigarette options at the touch of a button!
							</p>
							<Link
								to='/shop'
								className='btn'>
								Shop Now
							</Link>
						</div>
						<div className='col'>
							<img
								src={homebanner}
								className='banner_img'
								alt='no'
							/>
							<div className='sale_wrap'>
								<div className='content_wrap'>
									<img
										src={pckthree}
										alt='no'
									/>
									<span className='title'>Pack Of 3</span>
									<div className='price'>
										<span className='curreny'>$</span> 20
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default sec1;
