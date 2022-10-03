import React from 'react'

const Registerform = () => {
  return (
    <>
        <section className="main_form signup">
            {/* <canvas></canvas> */}
            <div className="container">
                <div className="inner_sec">
                    <h2>Register Now</h2>
                    <div className="form_wrap">
                        <form>
                            <div className="field_wrap full_div">
                                <input type="text" name=""  placeholder="User Name*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="email" name="" placeholder="Your Email*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="password" name="" placeholder="Password*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="password" name="" placeholder="Confirm Password*" required />
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

export default Registerform;