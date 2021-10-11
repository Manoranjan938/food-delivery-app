import React from 'react'
import FoodTypes from '../FoodTypes'
import Foods from '../Foods'
import FoodCarts from '../FoodTempCart'

import './foodSection.scss'

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
