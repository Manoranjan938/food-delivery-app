import React from 'react'

import DashboardSidebar from 'components/RestaurantDashboard/Sidebar/Sidebar';
import DashboardHeader from 'components/DashboardHeader/DashboardHeader';

const ManageDashboard = () => {
    return (
      <>
        <DashboardSidebar select="dashboard" />
        <DashboardHeader />
      </>
    );
}

export default ManageDashboard
