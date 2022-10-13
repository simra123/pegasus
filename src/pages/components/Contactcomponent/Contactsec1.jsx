import React from "react";

const Contactsec1 = () => {
  return (
    <>
      <section className="sec contact_pg_sec1">
        <div className="container">
          <div className="inner_wrap">
            <div className="col content_col">
              <h3>Contact Info</h3>
              <label>
                Phone
                <a href="tel:888-888-8888">888-888-8888</a>
              </label>
              <label>
                Email
                <a href="mailto:admin@gmail.com">admin@gmail.com</a>
              </label>
              <label>
                Address
                <a href="#0">Ny 1011 Street 13 Newyork</a>
              </label>
            </div>
            <div className="col form_col">
              <h3>Contact Us</h3>
              <form action="">
                <input
                  type="text"
                  name="user-name"
                  placeholder="Name*"
                  className="fld"
                  required
                />
                <input
                  type="email"
                  name="user-email"
                  placeholder="Email*"
                  className="fld"
                  required
                />
                <input
                  type="text"
                  name="user-subject"
                  placeholder="Subject*"
                  className="fld"
                  required
                />
                <textarea
                  name="user-msg"
                  rows="10"
                  placeholder="Message"
                  className="fld"
                ></textarea>
                <input type="submit" value={"submit"} className="btn" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactsec1;
