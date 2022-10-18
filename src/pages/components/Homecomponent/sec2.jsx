import React from 'react'
import prodimg from "../../../assets/images/pro-img1.png";

const sec2 = () => {

  return (
    <>
        <section className="sec sec2">
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
    </>
  )
}

export default sec2