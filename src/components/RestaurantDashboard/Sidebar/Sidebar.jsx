import React, { useEffect, useState } from 'react';

import image from 'Images/logo.png';
import { Link, useLocation } from 'react-router-dom';

import './sidebar.scss';
import DashboardHeader from 'components/DashboardHeader/DashboardHeader';
import Dashboard from '../Dashboard/Dashboard';

const DashboardSidebar = () => {

  const [option, setOption] = useState(1);

  const chooseDashboard = (index) => {
    setOption(index);
  }

  let {search} = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const parameter = query.get('tab')

    if(parseInt(parameter) === 4){
      setOption(parseInt(parameter));
    }
  }, [search])

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
          <li onClick={() => chooseDashboard(1)}>
            <Link to="#" className={option === 1 ? "active" : null}>
              <i className="fa fa-tachometer"></i>
              <span className="links_name">Dashboard</span>
            </Link>
          </li>
          <li onClick={() => chooseDashboard(2)}>
            <Link to="#" className={option === 2 ? "active" : null}>
              <i className="fa fa-book"></i>
              <span className="links_name">Menu</span>
            </Link>
          </li>
          <li onClick={() => chooseDashboard(3)}>
            <Link to="#" className={option === 3 ? "active" : null}>
              <i className="fa fa-user"></i>
              <span className="links_name">Drivers</span>
            </Link>
          </li>
          <li onClick={() => chooseDashboard(4)}>
            <Link to="#" className={option === 4 ? "active" : null}>
              <i className="fa fa-list-alt"></i>
              <span className="links_name">Orders</span>
            </Link>
          </li>
          <li onClick={() => chooseDashboard(5)}>
            <Link to="#" className={option === 5 ? "active" : null}>
              <i className="fa fa-cog"></i>
              <span className="links_name">Setting</span>
            </Link>
          </li>
          <li onClick={() => chooseDashboard(6)}>
            <Link to="#" className={option === 6 ? "active" : null}>
              <i className="fa fa-exclamation-circle"></i>
              <span className="links_name">Reports</span>
            </Link>
          </li>
          <li onClick={() => chooseDashboard(7)}>
            <Link to="#" className={option === 7 ? "active" : null}>
              <i className="fa fa-share-alt"></i>
              <span className="links_name">Share</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="contents">
        <DashboardHeader />
        {option === 1 && <Dashboard /> }
      </div>
    </>
  );
};

export default DashboardSidebar;
