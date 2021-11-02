import DashboardHeader from 'components/DashboardHeader/DashboardHeader'
import DashboardSidebar from 'components/RestaurantDashboard/Sidebar/Sidebar'
import React from 'react'

const Categories = () => {
    return (
        <>
            <DashboardHeader />
            <DashboardSidebar select="categories" />
        </>
    )
}

export default Categories
