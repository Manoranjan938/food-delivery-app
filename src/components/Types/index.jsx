import React from 'react'

import './types.scss'

const RestaurantTypes = () => {
    return (
      <section>
        <div className="type-container">
          <div className="type-wrapper">
            <div className="delivery nav active-type">
              <div className="icon">
                <i className="fa fa-motorcycle"></i>
              </div>
              <span>Delivery</span>
            </div>
            <div className="dining nav">
              <div className="icon">
                <i className="fa fa-cutlery"></i>
              </div>
              <span>Dining Out</span>
            </div>
            <div className="night-life nav">
              <div className="icon">
                <i className="fa fa-beer"></i>
              </div>
              <span>Nightlife</span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default RestaurantTypes
