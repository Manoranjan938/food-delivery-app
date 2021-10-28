import MenuCard from 'components/MenuCard/MenuCard';
import React from 'react';
import { Link } from 'react-router-dom';

import './menu.scss';

const Menu = () => {
  return (
    <>
      <div className="menu_container">
        <div className="menu_header">
          <div className="filter_menus">
            <input type="text" name="" id="" placeholder="Filter..." className="filter_menu"  />
          </div>
          <div className="menu_btns">
            <button className="search">
              <i className="fa fa-search"></i>
            </button>
            <button className="new_menu">
              <Link to="#">
                <i className="fa fa-plus" />
                New Menu
              </Link>
            </button>
          </div>
        </div>
        <hr />
        <div className="menu_content">
          <div className="menu_content_header">
            <div className="menu_tabs_option">
              <span className="active">All</span>
              <span>Active</span>
              <span>In - Active</span>
            </div>
            <div>
              <Link to="/menu/category/lists" className="category_link">
                <i className="fa fa-chevron-left" /> Category List
              </Link>
            </div>
          </div>
          <div className="menu_wrapper">
            <MenuCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
