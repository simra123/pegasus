import React from "react";
import ab1 from "../../../assets/images/ab1.jpg";
import ab2 from "../../../assets/images/ab2.jpg";

const Sec2 = () => {
	return (
		<>
			<section className='sec about_pg_sec2'>
				<div className='container'>
					<div className='inner_wrap inner_wrap1'>
						<div className='col img_wrap'>
							<img
								src={ab1}
								alt='no'
							/>
						</div>
						<div className='col content_wrap'>
							<h2>Who We Are</h2>
							<p>
								We all like to have fun and let loose. Our purpose is to make
								those fun times more convenient and safer. We are committed to
								brightening life's moments big or small with timely and prompt
								alcohol and vape delivery. We know planning celebrations can be
								stressful and cumbersome and want to ease some of those hurdles
								where we can. Pegasus aims to be available to customers across
								all cities, offering a rich e-commerce shopping experience with
								personalized content, competitive and transparent pricing, and
								an unrivaled selection.
							</p>
						</div>
					</div>
					<div className='inner_wrap inner_wrap2'>
						<div className='col content_wrap'>
							<h2>Fine Collection Of Vapes</h2>
							<p>
								Pegasus Delivery LLC brings you a fine collection of vapes and a
								wide range of flavors through its trusted vendors. We aim to add
								more in our inventory with time ultimately making it a one stop
								shop of vapes and pods for you.
							</p>
						</div>
						<div className='col img_wrap'>
							<img
								src={ab2}
								alt='no'
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Sec2;
