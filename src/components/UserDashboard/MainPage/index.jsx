import React from 'react'
import { useState } from 'react';
import UserAddresses from '../Addresses';
import OrderHistory from '../OrderHistory';
import ReviewPage from '../Review';
import Transactions from '../Transactions';

import "./mainDashboard.scss";

const MainDashboardPage = () => {

  const [sidebarMenu, setSidebarMenu] = useState(1);

  const handleActiveMenu = (index) => {
    setSidebarMenu(index);
  }

    return (
      <>
        <div className="dashboard_container">
          <div className="dashboard_links">
            <ul>
              <li
                className={sidebarMenu === 1 ? "active" : null}
                onClick={() => handleActiveMenu(1)}
              >
                Profile
              </li>
            </ul>
            <ul>
              <h2>Activity</h2>
              <li
                className={sidebarMenu === 2 ? "active" : null}
                onClick={() => handleActiveMenu(2)}
              >
                Reviews
              </li>
              <li
                className={sidebarMenu === 3 ? "active" : null}
                onClick={() => handleActiveMenu(3)}
              >
                Photos
              </li>
              <li
                className={sidebarMenu === 4 ? "active" : null}
                onClick={() => handleActiveMenu(4)}
              >
                Followers
              </li>
              <li
                className={sidebarMenu === 5 ? "active" : null}
                onClick={() => handleActiveMenu(5)}
              >
                Recently Viewed
              </li>
            </ul>
            <ul>
              <h2>Online Ordering</h2>
              <li
                className={sidebarMenu === 6 ? "active" : null}
                onClick={() => handleActiveMenu(6)}
              >
                Order History
              </li>
              <li
                className={sidebarMenu === 7 ? "active" : null}
                onClick={() => handleActiveMenu(7)}
              >
                My Addresses
              </li>
              <li
                className={sidebarMenu === 8 ? "active" : null}
                onClick={() => handleActiveMenu(8)}
              >
                Favorite Orders
              </li>
              <li
                className={sidebarMenu === 9 ? "active" : null}
                onClick={() => handleActiveMenu(9)}
              >
                Favorite Restaurant
              </li>
            </ul>
            <ul>
              <h2>Payments</h2>
              <li
                className={sidebarMenu === 10 ? "active" : null}
                onClick={() => handleActiveMenu(10)}
              >
                Foodie Credits
              </li>
              <li
                className={sidebarMenu === 11 ? "active" : null}
                onClick={() => handleActiveMenu(11)}
              >
                Manage Wallets
              </li>
              <li
                className={sidebarMenu === 12 ? "active" : null}
                onClick={() => handleActiveMenu(12)}
              >
                Transactions
              </li>
            </ul>
            <ul>
              <h2>Table Booking</h2>
              <li
                className={sidebarMenu === 13 ? "active" : null}
                onClick={() => handleActiveMenu(13)}
              >
                Your Bookings
              </li>
            </ul>
          </div>
          <div className="dashboard_content">
            {sidebarMenu === 2 && <ReviewPage />}
            {sidebarMenu === 6 && <OrderHistory />}
            {sidebarMenu === 7 && <UserAddresses />}
            {sidebarMenu === 12 && <Transactions />}
          </div>
        </div>
      </>
    );
}

export default MainDashboardPage
