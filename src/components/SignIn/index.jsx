import { Modal } from '@material-ui/core';
import React from 'react'

import './signin.scss'

import image from '../../Images/google-logo.png';

const SignIn = ({show, setShow}) => {
    return (
      <>
        <Modal open={show}>
          <div className="sign_in_container">
            <div className="sign_in_wrapper">
              <div className="sign_in_header">
                <h1>Log in</h1>
                <span onClick={() => setShow(!show)}>
                  <i className="fa fa-times"></i>
                </span>
              </div>
              <div className="log_in_section">
                <input type="text" name="" placeholder="Phone No." />
                <button>Login</button>
              </div>
              <hr />
              <div className="extra_login_section">
                <button><i class="fa fa-envelope" /> Continue with Email</button>
                <button><img src={image} alt="" /> Continue with Google</button>
              </div>
              <hr />
              <div className="link_section">
                <h2>New to Zomato? <span>Create account</span></h2>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
}

export default SignIn
