import React from "react";

const Checkout = () => {
  return (
    <>
      <section className="main_form signup chckout_wrap">
        {/* <canvas></canvas> */}
        <div className="container">
          <div className="inner_sec">
            <h2>Checkout</h2>
            <div className="form_wrap chckout_wrap">
              <form>
              <div className="field_wrap hlf_div full_div">
                  <input
                    type="text"
                    name=""
                    placeholder="First Name*"
                    required
                  />
                </div>
                <div className="field_wrap hlf_div full_div">
                  <input
                    type="text"
                    name=""
                    placeholder="Last Name*"
                    required
                  />
                </div>
                <div className="field_wrap hlf_div full_div">
                  <input
                    type="email"
                    name=""
                    placeholder="Your Email*"
                    required
                  />
                </div>
                <div className="field_wrap hlf_div full_div">
                  <input
                    type="email"
                    name=""
                    placeholder="Phone No.*"
                    required
                  />
                </div>
                <div className="field_wrap hlf_div full_div">
                  <input
                    type="text"
                    name=""
                    value="Product Name"
                    required
                  />
                </div>
                <div className="field_wrap hlf_div full_div">
                  <input
                    type="text"
                    name=""
                    value="Store Name"
                    required
                  />
                </div>
                <div className="field_wrap full_div">
                  <input
                    type="number"
                    name=""
                    placeholder="Cart No."
                    required
                  />
                </div>
                <div className="field_wrap full_div">
                  <input
                    type="text"
                    name=""
                    placeholder="Address*"
                    required
                  />
                </div>
                <div className="btn_wrap">
                  <input type="submit" name="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
