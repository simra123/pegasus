import React from "react";
import { Pagination } from "antd";
import prodimg from "../assets/images/pro-img1.png";
const Shop = () => {
  return (
    <>
      <div className="content_wrap">
        <section className="sec sec2 shop_pg_sec1">
          {/* <canvas></canvas> */}
          <div className="container">
            <div className="inner_wrap">
              {/*============= filter_wrap =============*/}
              <div className="filter_wrap">
                <div className="inner_wrap">
                  <div className="prod_srch_wrap">
                    <form action="">
                      <input
                        type="text"
                        className="srch_fld"
                        placeholder="Search"
                      />
                      <input type="submit" className="btn_fld" value={"s"} />
                    </form>
                  </div>
                  <div className="cat_wrap">
                    <h4>Categories</h4>
                    <ul className="cat_list">
                      <li>Vape</li>
                      <li>Alcohol</li>
                    </ul>
                  </div>
                  <div className="price_rng_wrap">
                    <h4>Price Filter</h4>
                  </div>
                  <div className="discnt_prod_list">
                    <h4>Discounted Products</h4>
                    <ul className="sidebar_prod_list">
                      <li>
                        <div className="img_wrap">
                          <img src={prodimg} alt="no" />
                        </div>
                        <div className="price_wrap">
                          <h6>Jinro Chamisul Fresh Soju</h6>
                          <span className="regular_price">
                            <span className="curreny">$</span>39.54
                          </span>
                          -
                          <span className="discount_price">
                            <span className="curreny">$</span>20.00
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="img_wrap">
                          <img src={prodimg} alt="no" />
                        </div>
                        <div className="price_wrap">
                          <h6>Crown Royal</h6>
                          <span className="regular_price">
                            <span className="curreny">$</span>20.00
                          </span>
                          -
                          <span className="discount_price">
                            <span className="curreny">$</span>20.00
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="img_wrap">
                          <img src={prodimg} alt="no" />
                        </div>
                        <div className="price_wrap">
                          <h6>Crown Royal</h6>
                          <span className="regular_price">
                            <span className="curreny">$</span>20.00
                          </span>
                          -
                          <span className="discount_price">
                            <span className="curreny">$</span>20.00
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="newsletter_wrap">
                    <h4>Newsletter</h4>
                    <form action="">
                      <input
                        type="email"
                        className="email_fld"
                        placeholder="Email"
                      />
                      <input type="submit" className="btn_fld" />
                    </form>
                  </div>
                </div>
              </div>
              {/*============= prod_wrap =============*/}
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shop;
