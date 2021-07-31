import React from 'react'
import FoodTypes from '../FoodTypes'
import Foods from '../Foods'
import FoodCart from '../Cart'

import './foodSection.scss'

const FoodSection = () => {
    return (
      <>
        <div className="food_section_container">
          <FoodTypes />
          <Foods />
          <FoodCart />
        </div>
      </>
    );
}

export default FoodSection
