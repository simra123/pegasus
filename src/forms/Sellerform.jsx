import React from 'react'

const Sellerform = () => {
  return (
    <>
        <section className="main_form">
            {/* <canvas></canvas> */}
            <div className="container">
                <div className="inner_sec">
                    <h2>Become a Seller</h2>
                    <div className="form_wrap">
                        {/* <form>
                            <div className="field_wrap full_div">
                                <input type="text" name="" placeholder="Your Name*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="email" name="" placeholder="Your Email*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="number" name="" placeholder="Phone No.*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="password" name="" placeholder="Password*" required />
                            </div>
                            <div className="btn_wrap">
                                <input type="submit" name="" />
                            </div>
                        </form> */}
                        <form>
                            <div className="field_wrap full_div">
                                <input type="text" name="" placeholder="Your Business Name*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="text" name="" placeholder="Business Type*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="text" name="" placeholder="You Location*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="text" name="" placeholder="City" required />
                            </div>
                            <div className="field_wrap full_div">
                                <textarea></textarea>
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
  )
}

export default Sellerform;