import React from 'react';

import './dashboardCards.scss';

import pending from 'Images/pending.png';
import delivered from 'Images/delivered.png';
import canceled from 'Images/canceled.png';
import category from 'Images/food_category.png';
import list from 'Images/food_list.png';
import ordered from 'Images/ordered.png';

const DashboardCards = () => {
  return (
    <>
      <div className="dashboard_card_container">
        <div className="cards">
          <div className="card pending_orders">
            <div className="title">
              <h2>Pending Orders</h2>
              <span>No. of orders are pending</span>
            </div>
            <div className="image">
              <img src={pending} alt="" />
            </div>
          </div>
          <div className="card active_order">
            <div className="title">
              <h2>Active Orders</h2>
              <span>No. of orders are active</span>
            </div>
            <div className="image">
              <img src={ordered} alt="" />
            </div>
          </div>
          <div className="card delivered_order">
            <div className="title">
              <h2>Delivered Orders</h2>
              <span>No. of orders are delivered</span>
            </div>
            <div className="image">
              <img src={delivered} alt="" />
            </div>
          </div>
          <div className="card canceled_orders">
            <div className="title">
              <h2>Canceled Orders</h2>
              <span>No. of orders are canceled</span>
            </div>
            <div className="image">
              <img src={canceled} alt="" />
            </div>
          </div>
          <div className="card food_categories">
            <div className="title">
              <h2>Food Categories</h2>
              <span>No. of food categories</span>
            </div>
            <div className="image">
              <img src={category} alt="" />
            </div>
          </div>
          <div className="card food_items">
            <div className="title">
              <h2>Food Item</h2>
              <span>No. of food list</span>
            </div>
            <div className="image">
              <img src={list} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCards;
