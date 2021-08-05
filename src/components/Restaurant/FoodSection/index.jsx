import React from 'react'
import FoodTypes from '../FoodTypes'
import Foods from '../Foods'

import './foodSection.scss'
import FoodCarts from '../FoodTempCart'

const FoodSection = () => {
    return (
      <>
        <div className="food_section_container">
          <FoodTypes />
          <Foods />
          <FoodCarts />
        </div>
      </>
    );
}

export default FoodSection
