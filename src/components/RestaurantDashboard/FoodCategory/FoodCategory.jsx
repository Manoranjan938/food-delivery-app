import CategoryCard from 'components/CategoryCard/CategoryCard';
import React from 'react';
import { Link } from 'react-router-dom';

import './foodCategory.scss';

const FoodCategory = () => {
  return (
    <>
      <div className="category_container">
        <div className="category_headers">
          <h3>Categories</h3>
          <div className="header_contents">
            <div className="search_category">
              <i className="fa fa-search" />
              <input type="text" name="" id="" placeholder="Search..." />
            </div>
            <div className="category_btns">
              <button className="refresh">
                <i className="fa fa-refresh" />
                <span>Refresh</span>
              </button>
              <button className="new_category">
                  <Link to="/restaurants/menu/new_category">Add Category</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="category_content">
          <CategoryCard />
        </div>
      </div>
    </>
  );
};

export default FoodCategory;
