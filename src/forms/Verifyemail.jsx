import React from 'react'
import {Link } from 'react-router-dom';

const Verifyemail = () => {
  return (
    <>
        <section className="main_form verifyemail">
            {/* <canvas></canvas> */}
            <div className="container">
                <div className="inner_sec">
                    <h4>Please Enter the 4 Digits Code Send To johndoe123@gmail.com</h4>
                    <div className="form_wrap verifyemailform">
                        <form>
                            <div className="field_wrap full_div box_wrap">
                                <input type="number" name="" />
                            </div>
                            <div className="field_wrap full_div box_wrap">
                                <input type="number" name="" />
                            </div>
                            <div className="field_wrap full_div box_wrap">
                                <input type="number" name="" />
                            </div>
                            <div className="field_wrap full_div box_wrap">
                                <input type="number" name="" />
                            </div>
                            <div className="field_wrap resnt_wrap">
                                <Link to="/verifyemail"> Resent Code </Link>
                            </div>
                            <div className="btn_wrap">
                                <input type="submit" name="" value="Verify" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Verifyemail;