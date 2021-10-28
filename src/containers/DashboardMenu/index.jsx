import DashboardHeader from 'components/DashboardHeader/DashboardHeader'
import DashboardSidebar from 'components/RestaurantDashboard/Sidebar/Sidebar'
import React from 'react'

const RestaurantMenu = () => {
    return (
        <>
            <DashboardHeader />
            <DashboardSidebar select="menu" />
        </>
    )
}

export default RestaurantMenu
