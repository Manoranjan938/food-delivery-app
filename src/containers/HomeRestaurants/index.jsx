import React from 'react'
import Header from '../../components/Home/Header/Header'
import RestaurantTypes from '../../components/Types'
import HeaderFilter from '../../components/HeaderFilters'
import RestaurantCards from '../../components/Restaurant/RestaurantCards'

const HomeRestaurants = () => {
    return (
        <>
            <Header />
            <RestaurantTypes />
            <HeaderFilter />
            <RestaurantCards />
        </>
    )
}

export default HomeRestaurants
