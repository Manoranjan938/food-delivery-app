import React from 'react'
import { Link } from 'react-router-dom';

import './SingleRestaurantCard.scss';

const SingleRestaurantCard = ({ items }) => {
  return (
    <>
      <Link to={`/restaurant/${items.id}`} className="restaurant-card">
        <div className="restaurant-image">
          <img src={items.image} alt="" />
        </div>
        <div className="restaurant-details">
          <h4>{items.name}</h4>
          <p>{items.serving}</p>
          <div className="extras">
            <div className="ratings">
              <span>
                <i className="fa fa-star"></i> {items.rating}
              </span>
            </div>
            <hr />
            <div className="deliveryTime">
              <span>{items.time}</span>
            </div>
            <hr />
            <div className="price">
              <span>
                <i className="fa fa-inr"></i>{items.price} for two
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleRestaurantCard
