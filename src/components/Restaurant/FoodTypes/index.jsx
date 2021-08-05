import React from 'react'

import './foodType.scss'

const FoodTypes = () => {
    return (
      <>
        <section className="food_type_container">
          <div className="food_type_wrapper">
            <p className="active">Recommended (16)</p>
            <p className="type">Burgurs (18)</p>
            <p className="type">2 For Combos (12)</p>
            <p className="type">Beverages (19)</p>
            <p className="type">Whoper (16)</p>
          </div>
        </section>
      </>
    );
}

export default FoodTypes
