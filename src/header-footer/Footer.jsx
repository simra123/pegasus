import React from "react";
import { FooterTopComp, FooterBottomComp } from "./components/index";

const Footer = ({ show }) => {
	return (
		<>
			<footer id='main_footer'>
				<div className='container'>
					<FooterTopComp show={show} />
					<FooterBottomComp />
				</div>
			</footer>
		</>
	);
};

export default Footer;
