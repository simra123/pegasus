import React from "react";
import { WishlistTable } from "./components/Wishlistcomponent";

const Wishlist = () => {
  return (
    <>
      <div className="content_wrap">
        <section className="sec sec2 wishlist_wrap">
          <div className="container">
            <div className="inner_wrap">
              <h2>WishList</h2>
              <WishlistTable />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Wishlist;
