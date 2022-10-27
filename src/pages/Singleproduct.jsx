import React from "react";
import { Productdecs, Recentviewed } from "./components/Shopsinglecomponent";

const Singleproduct = () => {
	return (
		<>
			<div id='single_prod_main'>
				<div className='content_wrap'>
					<section className='sec sec2 shop_single_pg'>
						<div className='container'>
							<div className='inner_wrap'>
								<Productdecs />
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Singleproduct;
