import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import prodimg7 from "../../../assets/images/pro-img7.png";

const Recentviewed = () => {
  return (
    <>
      <div className="recent_prod">
        <div className="container">
          <div className="inner_wrap">
            <h2>Recently Viewed</h2>
            <div className="slider_wrap">
              <ul className="prod_list_wrap">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={4}
                  breakpoints={{
                    // when window width is >= 640px
                    0: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
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
    </>
  );
};

export default Recentviewed;
