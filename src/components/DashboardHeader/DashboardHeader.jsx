import React from 'react';

import './dashboardHeader.scss';

import user from 'Images/user.png';

const DashboardHeader = () => {
  return (
    <>
      <div className="header_container">
        <div className="navbar">
          <div className="notification">
            <i class="fa fa-bell-o" />
            {/* <span>9+</span> */}
          </div>
          <div className="user">
            <div className="user_details">
              <p>Hello, Sagar</p>
              <span>Manager</span>
            </div>
            <div className="user_image">
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
