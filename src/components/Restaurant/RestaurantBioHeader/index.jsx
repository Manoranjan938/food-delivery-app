import React from "react";

import image from '../../../Images/burgurking.jpg'

import './bioHeader.scss'

const RestaurantBioHeader = () => {
  return (
    <>
      <div className="bio-header-container">
        <div className="bio-header-wrapper">
          <div className="restaurant-image">
            <img src={image} alt="" />
          </div>
          <div className="restaurant-content">
            <h2>Burgur King</h2>
            <p>American, Fast Food</p>
            <p>Vega City Mall, BTM | Change Outlet</p>
            <div className="restaurant-extras">
              <div className="ratings">
                <span className="main-texts">
                  <i className="fa fa-star"></i> 4.3
                </span>
                <p className="sub-texts">1000+ Ratings</p>
              </div>
              <hr />
              <div className="timings">
                <span className="main-texts">23 mins</span>
                <p className="sub-texts">Delivery Time</p>
              </div>
              <hr />
              <div className="prices">
                <span className="main-texts">
                  <i className="fa fa-inr"></i>350
                </span>
                <p className="sub-texts">Costs for two</p>
              </div>
            </div>

            <div className="header-content-bottom">
              <div className="bottom-contents">
                <div className="search_box">
                  <i className="fa fa-search"></i>
                  <input
                    type="text"
                    name=""
                    placeholder="Search for dishes..."
                  />
                </div>
                <div className="veg_box">
                  <input type="checkbox" name="" id="" />
                  &nbsp;Veg Only
                </div>
                <div className="favorite_box">
                  <i className="fa fa-heart-o"></i>&nbsp;Favourite
                </div>
              </div>
            </div>
          </div>
          <div className="restaurant-offer">
            <div className="offers">
              <h2>Offer</h2>
              <div className="offer-content">
                <p>
                  <i className="fa fa-certificate"></i>&nbsp;40% off up to{" "}
                  <i className="fa fa-inr"></i>80 on select items | Use code
                  SPECIALS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantBioHeader;
