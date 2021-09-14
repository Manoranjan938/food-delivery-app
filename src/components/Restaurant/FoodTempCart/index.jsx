import React from 'react';
import { Link } from 'react-router-dom';

import './cart.scss';

const FoodCarts = () => {
  return (
    <>
      <div className="food_cart_container">
        <div className="food_cart_wrapper">
          <div className="food_cart_header">
            <h2>Cart</h2>
            <span>1 Item</span>
          </div>
          <div className="food_cart_details">
            <div className="food_title">
              <i className="fa fa-stop-circle-o veg" />
              <span>
                Crispy Veg Double Patty + Crispy Veg Double Patty
                <p>
                  Customize <i className="fa fa-angle-right" />
                </p>
              </span>
            </div>
            <div className="food_price">
              <button>
                <i className="fa fa-minus" />
              </button>
              1
              <button>
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
          <div className="total_price">
            <span className="text">
              <h3>Subtotal</h3>
              <p>Extra charges may apply</p>
            </span>
            <span className="price">
              <i className="fa fa-inr" />
              &nbsp;150
            </span>
          </div>
          <div className="checkout_btn">
            <Link to="/checkout">
              <button>
                Checkout <i class="fa fa-long-arrow-right" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCarts;
