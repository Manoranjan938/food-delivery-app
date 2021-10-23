import OrderCard from 'components/OrderCard/OrderCard';
import React from 'react';

import './Orders.scss';

const Orders = () => {
  return (
    <>
      <div className="order_container">
        <div className="order_header">
          <div className="order_status_tabs">
            <span className="active">Pending</span>
            <span>Active</span>
          </div>
          <div className="display_icons">
            <i className="fa fa-th-large" id="select" />
            <i className="fa fa-th-list" />
          </div>
        </div>
        <div className="order_cards">
          <OrderCard />
        </div>
      </div>
    </>
  );
};

export default Orders;
