import React from "react";
import SingleRestaurantCard from "../SingleRestaurantCard";

import { restaurantData } from "./RestaurantDatas";

import "./RestaurantCards.scss";

const RestaurantCards = () => {
  let len = 0;
  restaurantData.map(() => {
    len = len + 1;

    return len;
  });

  return (
    <section>
      <h1>{len} Restaurants</h1>
      <div className="restaurant-container">
        <div className="restaurant-wrapper">
          {restaurantData.map((item, index) => {
            return <SingleRestaurantCard key={index} items={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RestaurantCards;
