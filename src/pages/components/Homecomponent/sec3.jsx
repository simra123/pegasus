import React from "react";
import Prodountdown from "../../js/Prodountdown";
import { Link } from "react-router-dom";

const sec3 = () => {
	return (
		<>
			<section className='sec sec3'>
				<div className='container'>
					<div className='inner_wrap'>
						<div className='col'>
							<h2>HOT DEALS OF THE WEEK</h2>
							<p>
								Get your favorite drinks and E-cigarette options at the touch of
								a button!
							</p>
							{/* <div id='countdown'>
								<ul>
									<li>
										<span className='exp_tym'>expire in:</span>
									</li>
									<Prodountdown />
								</ul>
							</div> */}
							<Link
								to='/shop'
								className='btn'>
								Shop Now
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default sec3;
