import React from 'react';

import './header.scss';

import image from 'Images/logo.png';
import { useState } from 'react';

import SignIn from '../../SignIn';
import { Link } from 'react-router-dom';

const Header = () => {
  const [signInPopUp, setSignInPopUp] = useState(false);

  const popUpModal = () => {
    setSignInPopUp(!signInPopUp);
  };

  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="logo">
            <img src={image} alt="" />
          </div>
          <div className="links">
            <Link to="/" className="nav_link">
              Home
            </Link>
            <Link to="#" className="nav_link">
              About
            </Link>
            <Link to="/restaurants" className="nav_link">
              Restaurants
            </Link>
            <Link to="#" className="nav_link">
              Foods
            </Link>
          </div>
          <div className="icons">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-cart"></i>
            <i className="fa fa-sign-in" onClick={popUpModal}></i>
          </div>
        </div>
      </div>
      {signInPopUp && <SignIn show={signInPopUp} setShow={setSignInPopUp} />}
    </>
  );
};

export default Header;
