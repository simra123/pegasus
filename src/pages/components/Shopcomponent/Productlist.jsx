import React from "react";
import prodimg from "../../../assets/images/pro-img1.png";
import { Pagination } from "antd";

const Productlist = () => {
  return (
    <>
      <div className="prod_wrap">
        <div className="top_wrap">
          <div className="prod_count">
            <span>1 To 9 Results Out Of 1000</span>
          </div>
          <div className="prod_sort_wrap">
            <form action="">
              <select name="" id="">
                <option value="Sorting">Sorting</option>
                <option value="A - Z">A - Z</option>
                <option value="A - Z">Z - A</option>
              </select>
            </form>
          </div>
        </div>
        <ul className="prod_list">
          <li>
            <img src={prodimg} className="prod_img" alt="no" />
            <h3 className="prod_title">Taaka Red Vodka 100</h3>
            <span className="prod_price">
              <span className="curreny">$</span>127.33
            </span>
          </li>
          <li>
            <img src={prodimg} className="prod_img" alt="no" />
            <h3 className="prod_title">Relax Riesling</h3>
            <span className="prod_price">
              <span className="curreny">$</span>84.63
            </span>
          </li>
          <li>
            <img src={prodimg} className="prod_img" alt="no" />
            <h3 className="prod_title">Rich & Rare Canadian Whisky</h3>
            <span className="prod_price">
              <span className="curreny">$</span>115.43
            </span>
          </li>
          <li>
            <img src={prodimg} className="prod_img" alt="no" />
            <h3 className="prod_title">Kono Sauvignon Blanc</h3>
            <span className="prod_price">
              <span className="curreny">$</span>115.43
            </span>
          </li>
          <li>
            <img src={prodimg} className="prod_img" alt="no" />
            <h3 className="prod_title">Taaka Red Vodka 100</h3>
            <span className="prod_price">
              <span className="curreny">$</span>127.33
            </span>
          </li>
          <li>
            <img src={prodimg} className="prod_img" alt="no" />
            <h3 className="prod_title">E&J V.S.O.P Premium Brandy</h3>
            <span className="prod_price">
              <span className="curreny">$</span>184.73
            </span>
          </li>
          <li>
            <img src={prodimg} className="prod_img" alt="no" />
            <h3 className="prod_title">Kona Longboard Island Lager</h3>
            <span className="prod_price">
              <span className="curreny">$</span>84.63
            </span>
          </li>
          <li>
            <img src={prodimg} className="prod_img" alt="no" />
            <h3 className="prod_title">EFFEN Black Cherry Vodka</h3>
            <span className="prod_price">
              <span className="curreny">$</span>169.33
            </span>
          </li>
          <li>
            <img src={prodimg} className="prod_img" alt="no" />
            <h3 className="prod_title">Burnett's Vodka</h3>
            <span className="prod_price">
              <span className="curreny">$</span>92.33
            </span>
          </li>
        </ul>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};

export default Productlist;
