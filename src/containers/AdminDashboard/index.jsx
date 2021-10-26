import AdminSidebar from 'components/Admin/Sidebar/AdminSidebar'
import DashboardHeader from 'components/DashboardHeader/DashboardHeader'
import AdminDashboardComponent from 'components/Admin/Dashboard/Dashboard'
import React from 'react'

const AdminDashboard = () => {
    return (
        <>
            <DashboardHeader />
            <AdminSidebar />
            <AdminDashboardComponent />
        </>
    )
}

export default AdminDashboard
