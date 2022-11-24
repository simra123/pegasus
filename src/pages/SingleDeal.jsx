import React from "react";
import { Dealdecs } from "./components/Shopsinglecomponent";

const Singleproduct = ({ allCarts, fetchCarts }) => {
	return (
		<>
			<div id='single_prod_main'>
				<div className='content_wrap'>
					<section className='sec sec2 shop_single_pg'>
						<div className='container'>
							<div className='inner_wrap'>
								<Dealdecs
									allCarts={allCarts}
									fetchCarts={fetchCarts}
								/>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Singleproduct;
