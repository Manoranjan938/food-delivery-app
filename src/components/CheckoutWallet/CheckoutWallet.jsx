import React from 'react';

import imgAmazon from 'Images/Amazon_Pay.jpg';
import imgPhone from 'Images/Phone_pay.png';
import imgPaytm from 'Images/Paytm.png';

import './checkoutWallet.scss';

const CheckoutWallet = () => {
  return (
    <>
      <div className="wallet_details">
        <div className="amazon_pay">
          <div className="image">
            <img src={imgAmazon} alt="" />
          </div>
          <div className="name">
            <span>Amazon Pay</span>
          </div>
          <div className="extra">
            <button>
              Pay <i className="fa fa-inr" />
              327
            </button>
          </div>
        </div>

        <div className="phone_pay">
          <div className="image">
            <img src={imgPhone} alt="" />
          </div>
          <div className="name">
            <span>Phone Pay</span>
          </div>
          <div className="extra">
            <button>
              Pay <i className="fa fa-inr" />
              327
            </button>
          </div>
        </div>

        <div className="paytm">
          <div className="image">
            <img src={imgPaytm} alt="" />
          </div>
          <div className="name">
            <span>Paytm</span>
          </div>
          <div className="extra">
            <button>
              Pay <i className="fa fa-inr" />
              327
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutWallet;
