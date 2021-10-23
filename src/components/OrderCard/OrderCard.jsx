import React from 'react';

import image from 'Images/burgurking.jpg';
import { Link } from 'react-router-dom';

import './orderCard.scss';

const OrderCard = () => {
  return (
    <>
      <div className="order_card">
        <div className="order_card_header">
          <div className="order_id">
            <h3>
              Order Id - <span>321</span>
            </h3>
          </div>
          <div className="order_date">
            <h3>
              Order Date - <span>May 11, 2021, 5.59pm</span>
            </h3>
          </div>
        </div>
        <hr />
        <div className="order_card_body">
          <div className="order_details">
            <div className="order_image">
              <img src={image} alt="" />
            </div>
            <div className="order_items">
              <p>Burgur X 1,</p>
              <p>Burgur X 1,</p>
              <p>Burgur X 1</p>
              <button className="more_details">
                <Link to="#">
                  See Details <i className="fa fa-chevron-right" />
                </Link>
              </button>
            </div>
          </div>
          <div className="payment_type">
            <span>Payment - Online(Stripe)</span>
          </div>
        </div>
        <hr />
        <div className="order_card_footer">
          <div className="content">
            <h3>
              Order Price - <i className="fa fa-inr" />
              327
            </h3>
            <span>Phone - +91 1234567898</span>
          </div>
          <div className="btns">
            <button className="reject">Reject</button>
            <button className="confirm">Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
