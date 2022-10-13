import React from "react";
import { Link } from "react-router-dom";

const Sec1 = () => {
  return (
    <>
      <section className="sec about_pg_sec1">
        <div className="container">
          <div className="inner_wrap">
            <div className="col content_col">
              <h2>About Us</h2>
              <p>
                Nullam vitae imperdiet metus, eget convallis nibh. Integer ac
                eros nec augue consectetur tristique. Pellentesque quis dapibus
                ante, et porttitor urna. Aliquam id nulla ut urna luctus
                aliquet. Nunc mollis bibendum orci, eget tempus purus semper
                vel. Integer vitae justo orci. Aliquam aliquet dolor et suscipit
                gravida. Proin luctus varius nulla nec porttitor. Pellentesque
                sodales viverra nunc, eget lobortis dolor porttitor eu.
                Vestibulum vel quam nunc. Nam non semper orci. Curabitur nec
                neque sit amet sem lacinia tincidunt. In a blandit nibh. Duis et
                porttitor dui.
              </p>
              <Link to="/shop" className="btn_link">
                {" "}
                Shop Now{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sec1;
