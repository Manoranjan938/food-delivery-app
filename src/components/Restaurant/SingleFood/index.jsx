import React from 'react'

import './singleFood.scss'

import images from '../../../Images/fasoos.jpg'

const SingleFood = () => {
    return (
      <>
        <div className="single_food_container">
          <div className="single_food_wrapper">
            <div className="food_details_section">
              <div className="food_type">
                <i className="fa fa-stop-circle-o veg" />
                <span className="bestseller">
                  <i className="fa fa-star" />
                  <p>Bestseller</p>
                </span>
              </div>
              <div className="food_details">
                <span>Crispy Veg Double Patty + Crispy Veg Double Patty</span>
              </div>
              <div className="food_price">
                <span>
                  <i className="fa fa-inr" />
                  150 | <span className="food_offer">60% OFF | USE DEAL60</span>
                </span>
              </div>
            </div>
            <div className="food_image_and_add_section">
              <img src={images} alt="" />
              <div className="add_btn">
                  <button>Add</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
}

export default SingleFood
