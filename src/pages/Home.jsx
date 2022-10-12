import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
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
                <Link to="/shop" className="btn">
                  Shop Now
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
                    <h3 className="prod_title">
                      Four Roses Small Batch Bourbon, Kentucky Straight Bourbon
                      Whiskey
                    </h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>731.31
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Tito's Handmade Vodka</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>417.81
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Smirnoff No. 21 Vodka</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>459.61
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Reyka Vodka</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>692.82
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Hidden Stock 1920 Vodka</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>186.83
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">Yuengling Traditional Lager</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>175.84
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">
                      Jack Daniel's Gentleman Jack Tennessee Whiskey
                    </h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>967.84
                    </span>
                  </li>
                  <li>
                    <img src={prodimg} className="prod_img" alt="no" />
                    <h3 className="prod_title">SVEDKA Vodka</h3>
                    <span className="prod_price">
                      <span className="curreny">$</span>329.85
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
              <div className="col">
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
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                  >
                    <SwiperSlide>
                      <ul className="prod_list">
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">
                            Rich & Rare Reserve Canadian Whisky
                          </h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>277.06
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">
                            Rich & Rare Reserve Canadian Whisky
                          </h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>142.87
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">Rico Bay White Rum</h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>165.48
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">Rain Organic Vodka</h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>263.88
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">
                            Independence Brewing Native Texan Pilsner
                          </h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>115.90
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">Jinro Green Grape Soju</h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>59.31
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">
                            Western Son Original Vodka
                          </h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>217.71
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">
                            Oyster Bay New Zealand Sauvignon Blanc White Wine
                          </h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>138.51
                          </span>
                        </li>
                      </ul>
                    </SwiperSlide>

                    <SwiperSlide>
                      <ul className="prod_list">
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">
                            Rich & Rare Reserve Canadian Whisky
                          </h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>277.06
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">
                            Rich & Rare Reserve Canadian Whisky
                          </h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>142.87
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">Rico Bay White Rum</h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>165.48
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">Rain Organic Vodka</h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>263.88
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">
                            Independence Brewing Native Texan Pilsner
                          </h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>115.90
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">Jinro Green Grape Soju</h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>59.31
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">
                            Western Son Original Vodka
                          </h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>217.71
                          </span>
                        </li>
                        <li>
                          <span className="sale_label">20% OFF</span>
                          <img src={prodimg} className="prod_img" alt="no" />
                          <h3 className="prod_title">
                            Oyster Bay New Zealand Sauvignon Blanc White Wine
                          </h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>138.51
                          </span>
                        </li>
                      </ul>
                    </SwiperSlide>
                  </Swiper>
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
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={20}
                      slidesPerView={3}
                      navigation
                    >
                      <SwiperSlide>
                        <li className="prod_list">
                          <img src={prodimg7} alt="no" />
                          <div className="prod_info">
                            <h4>Evan Williams Bourbon</h4>
                            <div className="price_wrap">
                              <span className="regular_price">
                                <span className="curreny">$</span>193.52
                              </span>
                              <span className="discount_price">
                                <span className="curreny">$</span>193.52
                              </span>
                            </div>
                          </div>
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="prod_list">
                          <img src={prodimg7} alt="no" />
                          <div className="prod_info">
                            <h4>Veuve Clicquot Brut Yellow Label Champagne</h4>
                            <div className="price_wrap">
                              <span className="regular_price">
                                <span className="curreny">$</span>615.92
                              </span>
                              <span className="discount_price">
                                <span className="curreny">$</span>615.92
                              </span>
                            </div>
                          </div>
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="prod_list">
                          <img src={prodimg7} alt="no" />
                          <div className="prod_info">
                            <h4>Victoria Mexican Lager Beer</h4>
                            <div className="price_wrap">
                              <span className="regular_price">
                                <span className="curreny">$</span>96.72
                              </span>
                              <span className="discount_price">
                                <span className="curreny">$</span>96.72
                              </span>
                            </div>
                          </div>
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="prod_list">
                          <img src={prodimg7} alt="no" />
                          <div className="prod_info">
                            <h4>Jinro Chamisul Strawberry Soju</h4>
                            <div className="price_wrap">
                              <span className="regular_price">
                                <span className="curreny">$</span>52.72
                              </span>
                              <span className="discount_price">
                                <span className="curreny">$</span>52.72
                              </span>
                            </div>
                          </div>
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="prod_list">
                          <img src={prodimg7} alt="no" />
                          <div className="prod_info">
                            <h4>Jinro Chamisul Strawberry Soju</h4>
                            <div className="price_wrap">
                              <span className="regular_price">
                                <span className="curreny">$</span>52.72
                              </span>
                              <span className="discount_price">
                                <span className="curreny">$</span>52.72
                              </span>
                            </div>
                          </div>
                        </li>
                      </SwiperSlide>
                    </Swiper>
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
