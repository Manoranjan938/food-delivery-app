import React from 'react';

import image from 'Images/logo.png';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <img src={image} alt="" />
            <div className="logo_name">Foodie</div>
          </div>
          <i className="fa fa-bars" id="menu_btn"></i>
        </div>
        <ul className="nav_list">
          <li>
            <i className="fa fa-search"></i>
            <input type="text" name="" id="" placeholder="Search..." />
          </li>
          <li>
            <Link to="/admin/dashboard" className="active">
              <i className="fa fa-tachometer"></i>
              <span className="links_name">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard/menu">
              <i className="fa fa-home"></i>
              <span className="links_name">Restaurants</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard/menu">
              <i className="fa fa-book"></i>
              <span className="links_name">Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard/drivers">
              <i className="fa fa-user"></i>
              <span className="links_name">Drivers</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard/orders">
              <i className="fa fa-list-alt"></i>
              <span className="links_name">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard/setting">
              <i className="fa fa-cog"></i>
              <span className="links_name">Setting</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard/reports">
              <i className="fa fa-exclamation-circle"></i>
              <span className="links_name">Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard/share">
              <i className="fa fa-share-alt"></i>
              <span className="links_name">Share</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
