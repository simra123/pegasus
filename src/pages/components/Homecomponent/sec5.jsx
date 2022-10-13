import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import prodimg7 from "../../../assets/images/pro-img7.png";
import clientlogo1 from "../../../assets/images/clientlogo1.png";
import clientlogo2 from "../../../assets/images/clientlogo2.png";
import clientlogo3 from "../../../assets/images/clientlogo3.png";
import clientlogo4 from "../../../assets/images/clientlogo4.png";
import clientlogo5 from "../../../assets/images/clientlogo5.png";
import clientlogo6 from "../../../assets/images/clientlogo6.png";
import clientlogo7 from "../../../assets/images/clientlogo7.png";
import clientlogo8 from "../../../assets/images/clientlogo8.png";
const sec5 = () => {
  return (
    <>
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
                    breakpoints={{
                      // when window width is >= 640px
                      0: {
                        slidesPerView: 1,
                      },
                      // when window width is >= 768px
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
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
    </>
  );
};

export default sec5;
