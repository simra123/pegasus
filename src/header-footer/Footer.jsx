import React from "react";
import { FooterTopComp, FooterBottomComp } from "./components/index";

const Footer = ({ show, getProducts }) => {
	return (
		<>
			<footer
				id='main_footer'
				style={{ padding: "20px" }}>
				<div className='container'>
					<FooterTopComp
						getProducts={getProducts}
						show={show}
					/>
					<FooterBottomComp />
				</div>
			</footer>
		</>
	);
};

export default Footer;
