import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home';
import HomeRestaurants from '../HomeRestaurants';
import RestaurantBio from '../RestaurantBio';

const RouterFile = () => {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants" component={HomeRestaurants} />
        <Route exact path="/restaurant/:id" component={RestaurantBio} />
      </>
    );
}

export default RouterFile
