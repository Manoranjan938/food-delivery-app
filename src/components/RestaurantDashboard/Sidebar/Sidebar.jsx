import React from 'react';

import image from 'Images/logo.png';
import { Link } from 'react-router-dom';

import './sidebar.scss';
import Dashboard from '../Dashboard/Dashboard';
import Menu from '../Menu/Menu';

const DashboardSidebar = ({select}) => {

  /* let {search} = useLocation();

  // useEffect(() => {
  //   const query = new URLSearchParams(search);
  //   const parameter = query.get('tab')

  //   if(parseInt(parameter) === 4){
  //     setOption(parseInt(parameter));
  //   }
  // }, [search]) */

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
            <Link to="/restaurants/dashboard" className={select === "dashboard" ? "active" : null}>
              <i className="fa fa-tachometer"></i>
              <span className="links_name">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/restaurants/menu" className={select === "menu" ? "active" : null}>
              <i className="fa fa-book"></i>
              <span className="links_name">Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/restaurants/drivers" className={select === 'drivers' ? "active" : null}>
              <i className="fa fa-user"></i>
              <span className="links_name">Drivers</span>
            </Link>
          </li>
          <li>
            <Link to="/restaurants/orders">
              <i className="fa fa-list-alt"></i>
              <span className="links_name">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/restaurants/setting">
              <i className="fa fa-cog"></i>
              <span className="links_name">Setting</span>
            </Link>
          </li>
          <li>
            <Link to="/restaurants/reports">
              <i className="fa fa-exclamation-circle"></i>
              <span className="links_name">Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/restaurants/share">
              <i className="fa fa-share-alt"></i>
              <span className="links_name">Share</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="contents">
        {select === "dashboard" && <Dashboard /> }
        {select === "menu" && <Menu />}
      </div>
    </>
  );
};

export default DashboardSidebar;
