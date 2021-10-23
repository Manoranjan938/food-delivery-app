import DashboardHeader from 'components/DashboardHeader/DashboardHeader'
import Drivers from 'components/RestaurantDashboard/Drivers/Drivers'
import DashboardSidebar from 'components/RestaurantDashboard/Sidebar/Sidebar'
import React from 'react'

const RestaurantDrivers = () => {
    return (
        <>
            <DashboardHeader />
            <DashboardSidebar select="drivers" />
            <Drivers />
        </>
    )
}

export default RestaurantDrivers
