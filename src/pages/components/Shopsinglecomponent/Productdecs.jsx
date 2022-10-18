import React from "react";
import prodimg from "../../../assets/images/pro-img1.png";

const Productdecs = () => {
  return (
    <>
      <div className="single_prod_info">
        <div className="col">
          <div className="img_glry">
            <div className="main_img">
              <img src={prodimg} alt="no" />
            </div>
            <div className="more_img">
              <img src={prodimg} alt="" />
              <img src={prodimg} alt="" />
              <img src={prodimg} alt="" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="prod_detial">
            <div className="prod_title">
              <h3>Crown Royal</h3>
              <span> 100ml </span>
            </div>
            <div className="price_wrap">
              <span className="regular_price">
                <span className="curreny">$</span>193.52
              </span>
              {/* <span className="discount_price">
                          <span className="curreny">$</span>193.52
                        </span> */}
            </div>
            <p>
              Maecenas nisl diam, laoreet ac ullamcorper vitae, lobortis non
              purus. Donec eleifend luctus odio, porttitor maximus ligula
              iaculis eu. Aliquam quis mollis dolor, nec venenatis lectus.
              Quisque blandit ipsum
            </p>
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
    </>
  );
};

export default Productdecs;