import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import companyLogo from "../../../assets/images/logo.png";
import bskimg from "../../../assets/images/top-basket.png";
import phnimg from "../../../assets/images/top-phone.png";
import userimg from "../../../assets/images/top-user.png";

const HeaderTopComp = () => {
  
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="top_head">
        <div className="container">
          <div className="inner-wrap">
            <div className="col logo_wrap">
              <Link to="/">
                <img src={companyLogo} alt="no" />
              </Link>
              <div className="menu_btn">
                <Button type="primary" className="nav_menu_btn" onClick={showDrawer}>
                <FontAwesomeIcon icon={faBars} />
                </Button>
              </div>
              <Drawer
                className="main_menu"
                title="Pegasus"
                placement="right"
                onClose={onClose}
                open={open}
              >
                <div className="nav-links">
                  <Link to="/">Home</Link>
                  <Link to="/shop">Shop</Link>
                  <Link to="/about">About</Link>
                  <Link to="/faq">FAQ's</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </Drawer>
            </div>
            <div className="col form_wrap">
              <form>
                <select className="form_field select_field">
                  <option>All Catagories</option>
                </select>
                <input
                  type="text"
                  name=""
                  className="form_field text_field"
                  placeholder="I'm Shopping for..."
                />
                <input type="submit" className="form_field btn_field" name="" />
              </form>
            </div>
            <div className="col info_wrap">
              <div className="icon_blk left">
                <div className="icon_wrap">
                  <img src={phnimg} alt="no" />
                </div>
                <div className="info_wrap">
                  <h4>24/7 Support</h4>
                  <a href="tel:1231234567789"> +123 123 456 7789 </a>
                </div>
              </div>
              <div className="icon_blk center">
                <div className="icon_wrap">
                  <img src={userimg} alt="no" />
                </div>
                <div className="info_wrap">
                  <h4>Account</h4>
                  <Link to="/login"> Sign In </Link>
                </div>
              </div>
              <div className="icon_blk right">
                <div className="icon_wrap">
                  <img src={bskimg} alt="no" />
                  <span className="prod_list">0</span>
                </div>
                <div className="info_wrap">
                  <h4>Cart</h4>
                  <Link to="#0">
                    <span className="curreny">$</span>0.00
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopComp;
