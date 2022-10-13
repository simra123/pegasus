import React from "react";
import {Filterwrap, Productlist} from './components/Shopcomponent';

const Shop = () => {
  return (
    <>
      <div id="shop_main">
        <div className="content_wrap">
          <section className="sec sec2 shop_pg_sec1">
            {/* <canvas></canvas> */}
            <div className="container">
              <div className="inner_wrap">
                <Filterwrap />
                <Productlist />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Shop;
