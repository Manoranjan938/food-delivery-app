import React from 'react';

import UserAddresses from 'components/UserDashboard/Addresses';

import './checkout.scss';
import image from 'Images/burgurking.jpg';

const CheckoutFood = () => {
  return (
    <section className="checkout_container">
      <div className="checkout_wrapper">
        <div>
          <div className="checkout_details">
            <h1>Choose a delivery address</h1>
            <span>Multiple Addresses in this account</span>
            <UserAddresses custom="checkout" />
          </div>
          <div className="payment_details">
            <h1>Choose a payment method</h1>
          </div>
        </div>
        <div>
          <div className="checkout_items">
            <div className="restaurant_details">
              <img src={image} alt="" />
              <div className="details">
                <span>Burgur King</span>
                <p>BTM Layout</p>
              </div>
            </div>
            <div className="item_details">
              <i className="fa fa-stop-circle-o veg" />
              <span>
                Crispy Veg Double Patty + Crispy Veg Double Patty
                <p>
                  Customize <i className="fa fa-angle-right" />
                </p>
              </span>
              <div className="food_price">
                <button>
                  <i className="fa fa-minus" />
                </button>
                1
                <button>
                  <i className="fa fa-plus" />
                </button>
              </div>
              <div className="price">
                <i className="fa fa-inr" />
                &nbsp;150
              </div>
            </div>
            <div className="suggestion">
              <input
                type="text"
                name="suggestion"
                id=""
                placeholder="Any suggestions? We will pass it on..."
              />
            </div>
            <div className="delivery_optional">
              <input type="checkbox" name="option" id="" />
              <div className="titles">
                <span>Opt in for No-Contact Delivery</span>
                <p>
                  Unwell, or avoiding contact? Please select no-contact
                  delivery. Partner will safely place the order outside your
                  door(not for COD)
                </p>
              </div>
            </div>
            <div className="coupon">
              <i className="fa fa-percent"></i>
              <span>Apply Coupon</span>
            </div>
            <div className="bill_details">
              <h5>Bill Details</h5>
              <div className="bills">
                <div className="item">
                  <span>Item Total</span>
                  <span>
                    <i className="fa fa-inr" /> 238
                  </span>
                </div>
                <div className="more">
                  <span>Delivery Partner Fee</span>
                  <span>
                    <i className="fa fa-inr" />
                    42
                  </span>
                </div>
                <hr />
                <div className="tax">
                  <span>Taxes and Charges</span>
                  <span>
                    <i className="fa fa-inr" /> 46.00
                  </span>
                </div>
                <div className="row" />
                <div className="to_pay">
                  <span>TO PAY</span>
                  <span>
                    <i className="fa fa-inr" /> 327
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutFood;
