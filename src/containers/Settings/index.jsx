import DashboardHeader from 'components/DashboardHeader/DashboardHeader'
import DashboardSidebar from 'components/RestaurantDashboard/Sidebar/Sidebar'
import React from 'react'

const Setting = () => {
    return (
        <>
            <DashboardHeader />
            <DashboardSidebar select="settings" />
        </>
    )
}

export default Setting
