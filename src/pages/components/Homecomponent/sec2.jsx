import React from "react";
// import prodimg from "../../../assets/images/pro-img1.png";
import { Loader } from "../../../reauseble";
import { Link } from "react-router-dom";
import smokeimg from "../../../assets/images/sec-smoke.png";

const sec2 = ({ data, loading }) => {
  return (
    <>
      <section className="sec sec2">
        <div className="banner before smokeani">
          <img src={smokeimg} alt="no" className="smoky_img1" />
          <img src={smokeimg} alt="no" className="smoky_img2" />
          <img src={smokeimg} alt="no" className="smoky_img3" />
          <img src={smokeimg} alt="no" className="smoky_img4" />
          <img src={smokeimg} alt="no" className="smoky_img5" />
          <img src={smokeimg} alt="no" className="smoky_img6" />
        </div>
        <div className="container">
          <div className="inner_wrap">
            <h2>Featured Products</h2>
            <div className="prod_wrap">
              <ul className="prod_list">
                {!loading && data
                  ? data.map((val) => {
                      const image = val.attachment.filter(
                        (att) => att.type == 0
                      );
                      return (
                        <li>
                          <Link to={`/singleproduct/${val.id}`}>
                            <img
                              src={image[0]?.url}
                              className="prod_img"
                              alt="no"
                            />
                          </Link>
                          <h3 className="prod_title">{val.name}</h3>
                          <span className="prod_price">
                            <span className="curreny">$</span>
                            {val.price}
                          </span>
                        </li>
                      );
                    })
                  : null}
                <Loader loading={loading} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default sec2;
