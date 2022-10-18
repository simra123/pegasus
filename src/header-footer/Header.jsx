import React from "react";
import { HeaderTopComp, HeaderBottomComp } from "./components/index";

const Header = () => {
  return (
    <>
      <header id="main_header">
        <HeaderTopComp />
        <HeaderBottomComp />
      </header>
    </>
  );
};

export default Header;
