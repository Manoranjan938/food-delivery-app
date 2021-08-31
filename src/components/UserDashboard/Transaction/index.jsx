import React from 'react';

import './transaction.scss';

import image from 'Images/burgurking.jpg';

const Transaction = () => {
  return (
    <>
      <div className="payment_container">
        <div className="recipient_details">
          <div className="recipient_image">
            <img src={image} alt="" />
          </div>
          <div className="recipient_name">
            <h2>Burgur King</h2>
            <span>BTM, Bangalore</span>
          </div>
          <div className="recipt_option">
            <i className="fa fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="recipient_contact_details">
          <div className="contact">
            <h5>Contact</h5>
            <div className="phone">
              <span>
                <i className="fa fa-phone" />
              </span>
              <p>+911234567890</p>
            </div>
            <div className="email">
              <span>
                <i className="fa fa-envelope-o" />
              </span>
              <p>king@gmail.com</p>
            </div>
          </div>
          <div className="payment_date">
            <h5>Payment Date</h5>
            <div className="date">
              <span>
                <i className="fa fa-calendar-check-o" />
              </span>
              <p>March11, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
