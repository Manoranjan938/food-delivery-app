import React from 'react';

import './orderHistory.scss';

import image from '../../../Images/burgurking.jpg';

const OrderHistory = () => {
  return (
    <>
      <div className="order_history_container">
        <div className="order_history_header">
          <h1>Past Orders</h1>
        </div>
        <div className="order_history_content">
          <div className="order_history_details">
            <div className="restaturant_details">
              <div className="restaurant_image">
                <img src={image} alt="" />
              </div>
              <div className="details">
                <h3>Burgur King</h3>
                <p>BTM</p>
                <p>ORDER #11009876543 | Sat, Jul 24, 2021, 5.53 PM</p>
                <span>View Details</span>
              </div>
            </div>
            <div className="delivery_details">
              <span>
                Delivered on Sat, Jul 24, 2021, 6.18 PM&nbsp;
                <i className="fa fa-check-circle" />
              </span>
            </div>
          </div>
          <div className="devider_dotted" />
          <div className="order_history_price_details">
            <div className="item_details">
                <h2>BK Classic Veg Burgur x 2</h2>
                <div className="buttons">
                    <button className="reorder">Reorder</button>
                    <button className="help">Help</button>
                </div>
            </div>
            <div className="price_details">
                <h4>Total Paid: <i className="fa fa-inr" />174</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
