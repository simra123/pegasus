import React from "react";
import { Link } from 'react-router-dom';

const HeaderBottomComp = () => {
  return (
    <>
      <div className="bottom_head">
        <div className="container">
          <div className="inner-wrap">
            <div className="nav">
              <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/faq">FAQ's</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottomComp;
