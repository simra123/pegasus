import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
        <section className="main_form">
            {/* <canvas></canvas> */}
            <div className="container">
                <div className="inner_sec">
                    <h2>Login</h2>
                    <div className="form_wrap">
                        <form>
                            <div className="field_wrap full_div">
                                <input type="text" name="" placeholder="User Name*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="password" name="" placeholder="Password*" required />
                            </div>
                            <div className="field_wrap hlf_div">
                                <input type="checkbox" name="" /> Remember Me
                            </div>
                            <div className="field_wrap hlf_div">
                                <Link to="/forgotpassword"> Forget Password </Link>
                            </div>
                            <div className="btn_wrap">
                                <input type="submit" name="" />
                            </div>
                        </form>
                    </div>
                    <div className="bottom_wrap">
                        <p>Don't have an account? <Link to="/registerform"> Register Now </Link></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login;