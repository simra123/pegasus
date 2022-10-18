import React from "react";
import {FooterTopComp, FooterBottomComp} from './components/index';

const Footer = () => {
  return (
    <>
      <footer id="main_footer">
        <div className="container">
          <FooterTopComp />
          <FooterBottomComp />
        </div>
      </footer>
    </>
  );
};

export default Footer;