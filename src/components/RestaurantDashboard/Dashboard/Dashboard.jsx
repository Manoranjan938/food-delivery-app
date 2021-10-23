import React from 'react';

import DashboardCards from '../DashboardCards/DashboardCards';
import IncomeAnalytics from '../IncomeAnalytics/IncomeAnalytics';
import Orders from '../Orders/Orders';

const Dashboard = () => {
  return (
    <>
      <DashboardCards />
      <IncomeAnalytics />
      <Orders />
    </>
  );
};

export default Dashboard;
