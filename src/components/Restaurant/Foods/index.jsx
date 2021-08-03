import React from 'react'
import SingleFood from '../SingleFood'

import './foods.scss'

const Foods = () => {
    return (
      <>
        <section className="food_container">
          <div className="food_wrapper">
            <div className="food_header">
              <h2>Order Online</h2>
              <div className="address">
                <span>
                  <i className="fa fa-check-circle-o" />
                  &nbsp;Delivery to:{" "}
                  <strong>Abbapa Layout, Stage 2, Btm Layout, Bengaluru</strong>
                </span>
                <p>Change</p>
              </div>
            </div>
            <SingleFood />
          </div>
        </section>
      </>
    );
}

export default Foods
