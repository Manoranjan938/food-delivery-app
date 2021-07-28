import React from "react";

import "./header.scss";

import image from "../../../Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="logo">
            <img src={image} alt="" />
          </div>
          <div className="location">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for restaurant"
            />
          </div>
          <div className="links">
            <button>Log in</button>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
