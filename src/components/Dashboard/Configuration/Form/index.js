import React from 'react';
import './index.scss';

export default function DashboardForm() {
    return(
        <div className="container-configure100">
            <div className="wrap-configure100">
                <div className="configure100-img">
                    <img src='https://res.cloudinary.com/skiltime/image/upload/v1650529450/profile_h5ytzy.png' alt='UserImg' />
                </div>
                <form className="configure100-form ">
                    <span className="configure100-form-title">
                        My Account
                    </span>

                    <div className="wrap-input100 validate-input bg1 fullname" data-validate="Please Type Your Name">
                        <span className="label-input100">Full Name</span>
                        <input className="input100" type="text" name="name" placeholder="John Doe" />
                    </div>
                    <div className='form-child'>
                        <div className="wrap-input100 bg1 rs1-wrap-input100 mobile-wrap">
                            <input className="input100 bg1 rs1-wrap-input100 input100 mobile" type="text" name="phone" placeholder="Mobile" />
                        </div>

                        <div className="wrap-input100 validate-input bg1 rs1-wrap-input100 email-wrap" data-validate = "Enter Your Email (e@a.x)">
                            <span className="label-input100">Email</span>
                            <input className="input100" type="text" name="email" placeholder="john.doe@gmail.com" />
                        </div>
                    </div>
                </form>
            </div>
	    </div>
    )
}