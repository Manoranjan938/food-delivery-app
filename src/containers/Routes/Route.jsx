import Checkout from 'containers/Checkout';
import RestaurantMenu from 'containers/DashboardMenu';
import RestaurantDrivers from 'containers/RestaurantDrivers';
import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home';
import HomeRestaurants from '../HomeRestaurants';
import ManageDashboard from '../ManagingDashboard';
import Profile from '../Profile';
import RestaurantBio from '../RestaurantBio';
import UserDashboardRoute from '../UserDashboard';

const RouterFile = () => {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants" component={HomeRestaurants} />
        <Route exact path="/restaurant/:id" component={RestaurantBio} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/user/me" component={UserDashboardRoute} />
        <Route exact path="/restaurants/dashboard" component={ManageDashboard} />
        <Route exact path="/restaurants/dashboard/menu" component={RestaurantMenu} />
        <Route exact path="/restaurants/dashboard/drivers" component={RestaurantDrivers} />
      </>
    );
}

export default RouterFile
