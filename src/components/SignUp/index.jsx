import { Modal } from '@material-ui/core';
import React from 'react'

import './signup.scss'

const SignUp = ({show, setShow}) => {
    return (
      <>
        <Modal open={show}>
          <div className="sign_up_container">
            <div className="sign_up_wrapper">
              <div className="sign_up_header">
                <h1>Sign Up</h1>
                <span onClick={() => setShow(!show)}>
                  <i className="fa fa-times"></i>
                </span>
              </div>
              <div className="sign_up_section">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="sign_up_btn">
                <button>Create account</button>
              </div>
              <div className="sign_up_link">
                <h2>
                  Already have an account? <span>Log in</span>
                </h2>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
}

export default SignUp
