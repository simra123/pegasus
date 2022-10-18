import React from "react";
import {Link } from 'react-router-dom';
import companyLogo from '../../../assets/images/logo.png';

const FooterTopComp = () => {
  return (
    <>
      <div className="footer_top_wrap">
        <div className="col col1">
          <Link to="/">
            <img src={companyLogo} alt="no" />
          </Link>
          <p>
            Maecenas nisl diam, laoreet ac ullamcorper vitae, lobortis non
            purus. Donec eleifend luctus odio, porttitor maximus ligula iaculis
            eu. Aliquam quis mollis dolor, nec venenatis lectus. Quisque blandit
            ipsum
          </p>
        </div>
        <div className="col col2">
          <h4>Quick Links</h4>
          <ul className="menu_wrap">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">FAQ's</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col col3">
          <h4>Categories</h4>
          <ul className="menu_wrap">
            <li>
              <Link to="">Vape</Link>
            </li>
            <li>
              <Link to="">Alcohol</Link>
            </li>
          </ul>
        </div>
        <div className="col col4">
          <h4>Contact Info</h4>
          <div className="info">
            <span>
              Phone
              <a href="tel:888-888-8888">888-888-8888</a>
            </span>
          </div>
          <div className="info">
            <span>
              Email
              <a href="mailto:admin@gmail.com">admin@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTopComp;
