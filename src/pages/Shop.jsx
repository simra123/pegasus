import React from 'react'
import prodimg from "../assets/images/pro-img1.png";
const Shop = () => {
  return (
    <>
      <div className="content_wrap">
        <section className="sec sec2 shop_pg_sec1">
          {/* <canvas></canvas> */}
            <div className="container">
              <div className="inner_wrap">
                <h2>Vape Store</h2>
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
      </div>
    </>
  )
}

export default Shop;