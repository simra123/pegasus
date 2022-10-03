import React from "react";
import aboutimg from "../assets/images/about.jpg";
import clientlogo1 from "../assets/images/clientlogo1.png";
import clientlogo2 from "../assets/images/clientlogo2.png";
import clientlogo3 from "../assets/images/clientlogo3.png";
import clientlogo4 from "../assets/images/clientlogo4.png";
import clientlogo5 from "../assets/images/clientlogo5.png";
import clientlogo6 from "../assets/images/clientlogo6.png";
import clientlogo7 from "../assets/images/clientlogo7.png";
import clientlogo8 from "../assets/images/clientlogo8.png";

const About = () => {
  return (
    <>
      <div className="content_wrap">
        <section className="sec about_pg_sec1">
          <div className="container">
            <div className="inner_wrap">
              <div className="col content_col">
                <h2>About Us</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
              <div className="col img_col">
                <img src={aboutimg} alt="no" />
              </div>
            </div>
          </div>
        </section>
        <section className="sec sec5 about_pg_sec2">
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
        </section>
      </div>
    </>
  );
};

export default About;
