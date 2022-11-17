import React from "react";
import { HeaderTopComp, HeaderBottomComp } from "./components/index";

const Header = ({ getProducts, setSearchVal, searchVal }) => {
	return (
		<>
			<header id='main_header'>
				<HeaderTopComp
					getProducts={getProducts}
					setSearchVal={setSearchVal}
					searchVal={searchVal}
				/>
				<HeaderBottomComp />
			</header>
		</>
	);
};

export default Header;
