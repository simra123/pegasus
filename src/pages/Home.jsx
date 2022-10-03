import React from "react";
import { Link } from "react-router-dom";
import homebanner from "../assets/images/banner-img.png";
import pckthree from "../assets/images/packthree.png";
import prodimg from "../assets/images/pro-img1.png";
import prodimg7 from "../assets/images/pro-img7.png";
import clientlogo1 from "../assets/images/clientlogo1.png";
import clientlogo2 from "../assets/images/clientlogo2.png";
import clientlogo3 from "../assets/images/clientlogo3.png";
import clientlogo4 from "../assets/images/clientlogo4.png";
import clientlogo5 from "../assets/images/clientlogo5.png";
import clientlogo6 from "../assets/images/clientlogo6.png";
import clientlogo7 from "../assets/images/clientlogo7.png";
import clientlogo8 from "../assets/images/clientlogo8.png";

const Home = () => {
  return (
    <>
      <div className="content_wrap">
        <section className="sec sec1">
          <div className="container">
            <div className="inner_wrap">
              <div className="col">
                <h1>E-cigrattes are significantly less harmful than smoking</h1>
                <p>
                  ElectroMaecenas eget libero sit amet erat iaculis malesuada
                  maecenas tempor ultricies nulla et tempus.
                </p>
                <Link to="#0" className="btn">
                  {" "}
                  Shop Now{" "}
                </Link>
              </div>
              <div className="col">
                <img src={homebanner} className="banner_img" alt="no" />
                <div className="sale_wrap">
                  <div className="content_wrap">
                    <img src={pckthree} alt="no" />
                    <span className="title">Pack Of 3</span>
                    <div className="price">
                      <span className="curreny">$</span> 20
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec2">
        {/* <canvas></canvas> */}
          <div className="container">
            <div className="inner_wrap">
              <h2>Featured Products</h2>
              <div className="prod_wrap">
                <ul className="prod_list">
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Crown Royal</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>20.00
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Crown Royal</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>20.00
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Crown Royal</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>20.00
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Crown Royal</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>20.00
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Crown Royal</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>20.00
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Crown Royal</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>20.00
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Crown Royal</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>20.00
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Crown Royal</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>20.00
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec3">
          <div className="container">
            <div className="inner_wrap">
              <div className="col col1">
                <h2>HOT DEALS OF THE WEEK</h2>
                <p>
                  ElectroMaecenas eget libero sit amet erat iaculis malesuada
                  maecenas tempor ultricies nulla et tempus.
                </p>
                <div id="countdown">
                  <ul>
                    <li>
                      <span className="exp_tym">expire in:</span>
                    </li>
                    <li className="num_list">
                      <span id="days" className="num_span day"></span>D
                    </li>
                    <li className="num_list">
                      <span id="hours" className="num_span hour"></span>H
                    </li>
                    <li className="num_list">
                      <span id="minutes" className="num_span min"></span>M
                    </li>
                    <li className="num_list">
                      <span id="seconds" className="num_span  sec"></span>S
                    </li>
                  </ul>
                </div>
                <Link to="#0" className="btn">
                  {" "}
                  Shop Now{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec4">
          <div className="container">
            <div className="inner_wrap">
              <div className="head_wrap">
                <h2>Hot Deals</h2>
                <div id="countdowntwo">
                  <ul>
                    <li>
                      <span className="exp_tym">expire in:</span>
                    </li>
                    <li className="num_list">
                      <span id="sec_days" className="num_span day"></span>D
                    </li>
                    <li className="num_list">
                      <span id="sec_hours" className="num_span hour"></span>H
                    </li>
                    <li className="num_list">
                      <span id="sec_minutes" className="num_span min"></span>M
                    </li>
                    <li className="num_list">
                      <span id="sec_seconds" className="num_span  sec"></span>S
                    </li>
                  </ul>
                </div>
              </div>
              <div className="prod_wrap">
                <div className="carousel">
                  <div>
                    <ul className="prod_list">
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="prod_list">
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                      <li>
                        <span className="sale_label">20% OFF</span>
                        <img src={prodimg} className="prod_img" alt="no" />
                        <h3 className="prod_title">Crown Royal</h3>
                        <span className="prod_price">
                          <span className="curreny">$</span>20.00
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec5">
          <div className="container">
              <div className="inner_wrap">
                  <h2>Featured Brands</h2>
                  <div className="prod_wrap">
                      <ul className="client_list">
                          <li>
                              <img src={clientlogo1} className="prod_img" alt="no" />
                          </li>
                          <li>
                              <img src={clientlogo2} className="prod_img" alt="no" />
                          </li>
                          <li>
                              <img src={clientlogo3} className="prod_img" alt="no" />
                          </li>
                          <li>
                              <img src={clientlogo4} className="prod_img" alt="no" />
                          </li>
                          <li>
                              <img src={clientlogo5} className="prod_img" alt="no" />
                          </li>
                          <li>
                              <img src={clientlogo6} className="prod_img" alt="no" />
                          </li>
                          <li>
                              <img src={clientlogo7} className="prod_img" alt="no" />
                          </li>
                          <li>
                              <img src={clientlogo8} className="prod_img" alt="no" />
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="recent_prod">
              <div className="container">
                  <div className="inner_wrap">
                      <h2>Recently Viewed</h2>
                      <div className="slider_wrap">
                          <ul className="prod_list_wrap">
                              <li className="prod_list">
                                  <img src={prodimg7} alt="no" />
                                  <div className="prod_info">
                                      <h4>Crown Royal</h4>
                                      <div className="price_wrap">
                                          <span className="regular_price">
                                              <span className="curreny">$</span>20.00 
                                          </span>
                                          <span className="discount_price">
                                              <span className="curreny">$</span>20.00 
                                          </span>
                                      </div>
                                  </div>
                              </li>
                              <li className="prod_list">
                                  <img src={prodimg7} alt="no" />
                                  <div className="prod_info">
                                      <h4>Crown Royal</h4>
                                      <div className="price_wrap">
                                          <span className="regular_price">
                                              <span className="curreny">$</span>20.00 
                                          </span>
                                          <span className="discount_price">
                                              <span className="curreny">$</span>20.00 
                                          </span>
                                      </div>
                                  </div>
                              </li>
                              <li className="prod_list">
                                  <img src={prodimg7} alt="no" />
                                  <div className="prod_info">
                                      <h4>Crown Royal</h4>
                                      <div className="price_wrap">
                                          <span className="regular_price">
                                              <span className="curreny">$</span>20.00 
                                          </span>
                                          <span className="discount_price">
                                              <span className="curreny">$</span>20.00 
                                          </span>
                                      </div>
                                  </div>
                              </li>
                              <li className="prod_list">
                                  <img src={prodimg7} alt="no" />
                                  <div className="prod_info">
                                      <h4>Crown Royal</h4>
                                      <div className="price_wrap">
                                          <span className="regular_price">
                                              <span className="curreny">$</span>20.00 
                                          </span>
                                          <span className="discount_price">
                                              <span className="curreny">$</span>20.00 
                                          </span>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
