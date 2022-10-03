import React from 'react'

const Forgotpassword = () => {
  return (
    <>
        <section className="main_form forgot_sec">
            {/* <canvas></canvas> */}
            <div className="container">
                <div className="inner_sec">
                    <h4>Please Enter Your Email Address To Receive a Verification Code</h4>
                    <div className="form_wrap">
                        <form>
                            <div className="field_wrap full_div">
                                <input type="text" name="" placeholder="Enter Your Email" required />
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

export default Forgotpassword;