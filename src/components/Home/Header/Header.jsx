import React from "react";

import "./header.scss";

import image from "../../../Images/logo.png";
import { useState } from "react";

import SignIn from '../../SignIn'
import SignUp from '../../SignUp'
import { Link } from "react-router-dom";

const Header = () => {

  const [signInPopUp, setSignInPopUp] = useState(false);
  const [signUpPopUp, setSignUpPopUp] = useState(false);

  const popUpModal = (value) => {
    if(value === "Sign_In"){
      console.log("Sign In Buttun Clicked")
      setSignInPopUp(!signInPopUp);
    }
    else if(value === "Sign_Up"){
      console.log("Sign Up button clicked")
      setSignUpPopUp(!signUpPopUp);
    }
  }

  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="logo">
            <img src={image} alt="" />
          </div>
          <div className="links">
            <Link to="#" className="nav_link">Home</Link>
            <Link to="#" className="nav_link">About</Link>
            <Link to="#" className="nav_link">Restaurants</Link>
            <Link to="#" className="nav_link">Foods</Link>
          </div>
          <div className="icons">
            <button onClick={() => popUpModal('Sign_In')}>Log in</button>
            <button onClick={() => popUpModal('Sign_Up')}>Sign up</button>
          </div>
        </div>
      </div>
      {signInPopUp && <SignIn show={signInPopUp} setShow={setSignInPopUp} />}
      {signUpPopUp && <SignUp show={signUpPopUp} setShow={setSignUpPopUp} />}
    </>
  );
};

export default Header;
