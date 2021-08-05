import React from 'react'
import Header from '../../components/Home/Header/Header'
import RestaurantBioHeader from '../../components/Restaurant/RestaurantBioHeader'
import RestaurantTabs from '../../components/Restaurant/RestaurantDetailsTab'

import './RestaurantBio.scss'

const RestaurantBio = () => {
    return (
      <>
        <Header />
        <RestaurantBioHeader />
        <RestaurantTabs />
      </>
    );
}

export default RestaurantBio
