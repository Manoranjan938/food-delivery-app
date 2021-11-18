import DashboardHeader from 'components/DashboardHeader/DashboardHeader';
import DashboardSidebar from 'components/RestaurantDashboard/Sidebar/Sidebar';
import React from 'react';

const NewCategoryContainer = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar select="new_categories" />
    </>
  );
};

export default NewCategoryContainer;
