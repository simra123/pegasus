import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import prodimg from "../../../assets/images/pro-img1.png";
import { useParams } from "react-router-dom";
import CoreHttpHandler from "../../../http/services/CoreHttpHandler";
import Recentviewed from "./Recentviewed";
const Productdecs = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const getProduct = () => {
    CoreHttpHandler.request(
      "products",
      "singleProduct",
      {
        key: ":id",
        value: id,
      },
      (response) => {
        console.log(response.data.data.data[0]);
        setProduct(response.data.data.data[0]);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {product ? (
        <div className="single_prod_info">
          <div className="col">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img alt="no" src={prodimg} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="no" src={prodimg} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="no" src={prodimg} />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img alt="no" src={prodimg} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="no" src={prodimg} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="no" src={prodimg} />
              </SwiperSlide>
            </Swiper>
            {/* <div className='img_glry'>
							<div className='main_img'>
								<img
									src={prodimg}
									alt='no'
								/>
							</div>
							<div className='more_img'>
								<img
									src={prodimg}
									alt=''
								/>
								<img
									src={prodimg}
									alt=''
								/>
								<img
									src={prodimg}
									alt=''
								/>
							</div>
						</div> */}
          </div>
          <div className="col">
            <div className="prod_detial">
              <div className="prod_title">
                <h3>{product.name}</h3>
                {/* <span> 100ml </span> */}
              </div>
              <div className="price_wrap">
                <span className="regular_price">
                  <span className="curreny">$ </span>
                  {product.price}
                </span>
                {/* <span className="discount_price">
                          <span className="curreny">$</span>193.52
                        </span> */}
              </div>
              <p>{product.description}</p>
              <form action="">
                <input
                  type="number"
                  value=""
                  placeholder="1"
                  className="num_fld"
                />
                <input type="submit" value="Add to Cart" />
              </form>
              <div className="prod_info">
                <ul>
                  <li>
                    <span className="info_name">SKU</span> :
                    <span className="info_value">0123467445</span>
                  </li>
                  <li>
                    <span className="info_name">Category</span> :
                    <span className="info_value">Alcohol</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="prod_desc">
        <h4>Description</h4>
        <p>
          Nullam vitae imperdiet metus, eget convallis nibh. Integer ac eros nec
          augue consectetur tristique. Pellentesque quis dapibus ante, et
          porttitor urna. Aliquam id nulla ut urna luctus aliquet. Nunc mollis
          bibendum orci, eget tempus purus semper vel. Integer vitae justo orci.
          Aliquam aliquet dolor et suscipit gravida. Proin luctus varius nulla
          nec porttitor. Pellentesque sodales viverra nunc, eget lobortis dolor
          porttitor eu. Vestibulum vel quam nunc. Nam non semper orci. Curabitur
          nec neque sit amet sem lacinia tincidunt. In a blandit nibh. Duis et
          porttitor dui.
        </p>
        <p>
          Nullam vitae imperdiet metus, eget convallis nibh. Integer ac eros nec
          augue consectetur tristique. Pellentesque quis dapibus ante, et
          porttitor urna. Aliquam id nulla ut urna luctus aliquet. Nunc mollis
          bibendum orci, eget tempus purus semper vel. Integer vitae justo orci.
          Aliquam aliquet dolor et suscipit gravida. Proin luctus varius nulla
          nec porttitor. Pellentesque sodales viverra nunc, eget lobortis dolor
          porttitor eu. Vestibulum vel quam nunc. Nam non semper orci. Curabitur
          nec neque sit amet sem lacinia tincidunt. In a blandit nibh. Duis et
          porttitor dui.
        </p>
      </div>
      <Recentviewed />
    </>
  );
};

export default Productdecs;
