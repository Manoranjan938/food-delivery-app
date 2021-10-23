import DashboardHeader from 'components/DashboardHeader/DashboardHeader'
import Menu from 'components/RestaurantDashboard/Menu/Menu'
import DashboardSidebar from 'components/RestaurantDashboard/Sidebar/Sidebar'
import React from 'react'

const RestaurantMenu = () => {
    return (
        <>
            <DashboardHeader />
            <DashboardSidebar select="menu" />
            <Menu />
        </>
    )
}

export default RestaurantMenu
