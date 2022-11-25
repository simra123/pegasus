import React from "react";
import { FooterTopComp, FooterBottomComp } from "./components/index";

const Footer = ({ categories }) => {
	return (
		<>
			<footer id='main_footer'>
				<div className='container'>
					<FooterTopComp categories={categories} />
					<FooterBottomComp />
				</div>
			</footer>
		</>
	);
};

export default Footer;
