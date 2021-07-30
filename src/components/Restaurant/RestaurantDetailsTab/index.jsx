import React from 'react'

import './tabs.scss'

const RestaurantTabs = () => {
    return (
      <>
        <div className="tabs_container">
          <div className="tabs">
            <span>Overview</span>
          </div>
          <div className="active">
            <span>Order Online</span>
          </div>
          <div className="tabs">
            <span>Reviews</span>
          </div>
          <div className="tabs">
            <span>Menu</span>
          </div>
          <div className="tabs">
            <span>Photos</span>
          </div>
        </div>
      </>
    );
}

export default RestaurantTabs
