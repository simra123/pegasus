import React from "react";
import Prodountdown from '../../js/Prodountdown';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import prodimg from "../../../assets/images/pro-img1.png";

const sec4 = () => {
  return (
    <>
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
                  <Prodountdown />
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
    </>
  );
};

export default sec4;