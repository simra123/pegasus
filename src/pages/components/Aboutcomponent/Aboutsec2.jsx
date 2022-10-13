import React from "react";
import ab1 from "../../../assets/images/ab1.jpg";
import ab2 from "../../../assets/images/ab2.jpg";

const Sec2 = () => {
  return (
    <>
      <section className="sec about_pg_sec2">
        <div className="container">
          <div className="inner_wrap inner_wrap1">
            <div className="col img_wrap">
              <img src={ab1} alt="no" />
            </div>
            <div className="col content_wrap">
              <h2>Who We Are</h2>
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
            </div>
          </div>
          <div className="inner_wrap inner_wrap2">
            <div className="col content_wrap">
              <h2>Sed ut dui in nisl</h2>
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
            </div>
            <div className="col img_wrap">
              <img src={ab2} alt="no" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sec2;
