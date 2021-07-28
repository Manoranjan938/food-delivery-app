import React from "react";

import './filter.scss'

const HeaderFilter = () => {
  return (
    <>
      <div className="filter-container">
        <div className="filter-wrapper">
          <div className="filter-item">
            <input type="checkbox" name="filter" id="" />
            Filter
          </div>
          <div className="filter-item">
            <input type="checkbox" name="filter" id="" />
            Great Offers
          </div>
          <div className="filter-item">
            <input type="checkbox" name="filter" id="" />
            Rating: 4.0+
          </div>
          <div className="filter-item">
            <input type="checkbox" name="filter" id="" />
            Safe and Hygienic
          </div>
          <div className="filter-item">
            <input type="checkbox" name="filter" id="" />
            Pure Veg
          </div>
          <div className="filter-item">
            <input type="checkbox" name="filter" id="" />
            Delivery Time
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderFilter;
