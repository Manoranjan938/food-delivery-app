import React, { useState } from 'react'
import FoodSection from '../FoodSection';
import OverviewSection from '../OverviewSection'
import Photos from '../Photos';
import ReviewSection from '../Review';

import './tabs.scss'

const RestaurantTabs = () => {

  const [tabs, setTabs] = useState(2);

  const handleClick = (index) => {
    setTabs(index);
  }

    return (
      <section>
        <div className="tabs_container">
          <div className={tabs === 1 ? 'active' : 'tabs'} onClick={() => handleClick(1)}>
            <span>Overview</span>
          </div>
          <div className={tabs === 2 ? 'active' : 'tabs'} onClick={() => handleClick(2)}>
            <span>Order Online</span>
          </div>
          <div className={tabs === 3 ? 'active' : 'tabs'} onClick={() => handleClick(3)}>
            <span>Reviews</span>
          </div>
          <div className={tabs === 4 ? 'active' : 'tabs'} onClick={() => handleClick(4)}>
            <span>Menu</span>
          </div>
          <div className={tabs === 5 ? 'active' : 'tabs'} onClick={() => handleClick(5)}>
            <span>Photos</span>
          </div>
        </div>
        <div className="food_section">
          {tabs === 1 && <OverviewSection />}
          {tabs === 2 && <FoodSection />}
          {tabs === 3 && <ReviewSection />}
          {tabs === 5 && <Photos />}
        </div>
      </section>
    );
}

export default RestaurantTabs
