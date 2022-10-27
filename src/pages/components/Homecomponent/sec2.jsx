import React from "react";
import prodimg from "../../../assets/images/pro-img1.png";
import { Link } from "react-router-dom";
const sec2 = ({ data }) => {
	return (
		<>
			<section className='sec sec2'>
				<div className='container'>
					<div className='inner_wrap'>
						<h2>Featured Products</h2>
						<div className='prod_wrap'>
							<ul className='prod_list'>
								{data.map((val) => {
									const image = val.attachment.filter((att) => att.type == 0);
									return (
										<li>
											<Link to={`/singleproduct/${val.id}`}>
												<img
													src={image[0]?.url}
													className='prod_img'
													alt='no'
												/>
											</Link>
											<h3 className='prod_title'>{val.name}</h3>
											<span className='prod_price'>
												<span className='curreny'>$</span>
												{val.price}
											</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default sec2;
