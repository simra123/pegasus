import React from "react";
import { Link } from "react-router-dom";

const Sec1 = () => {
	return (
		<>
			<section className='sec about_pg_sec1'>
				<div className='container'>
					<div className='inner_wrap'>
						<div className='col content_col'>
							<h2>About Us</h2>
							<p>
								In 2021, after a conversation regarding the convenience of
								delivery and the lack of options for alcohol and vape delivery,
								Co-Founders Chris May and Dylan Owusu sparked an idea. There was
								a need for a company that specialized solely in delivering these
								products! The concept of instant delivery for alcohol and vapes
								didn’t readily exist, and they took on the challenge of changing
								that. Combining an in-store experience online with on-demand
								innovation, Pegasus Delivery was born with the
								convenience-driven consumer in mind.
							</p>
							<Link
								to='/shop'
								className='btn_link'>
								{" "}
								Shop Now{" "}
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Sec1;
