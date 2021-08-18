import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home';
import HomeRestaurants from '../HomeRestaurants';
import Profile from '../Profile';
import RestaurantBio from '../RestaurantBio';
import UserDashboardRoute from '../UserDashboard';

const RouterFile = () => {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants" component={HomeRestaurants} />
        <Route exact path="/restaurant/:id" component={RestaurantBio} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/user/me" component={UserDashboardRoute} />
      </>
    );
}

export default RouterFile
