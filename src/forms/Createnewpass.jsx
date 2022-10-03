import React from 'react'

const Createnewpass = () => {
  return (
    <>
        <section className="main_form craetenewpass">
            {/* <canvas></canvas> */}
            <div className="container">
                <div className="inner_sec">
                    <h2>Create New Password</h2>
                    <div className="form_wrap">
                        <form>
                            <div className="field_wrap full_div">
                                <input type="password" name="" placeholder="Old Password*" required />
                            </div>
                            <div className="field_wrap full_div">
                                <input type="password" name="" placeholder="New Password*" required />
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

export default Createnewpass;