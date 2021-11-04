import React, { useState } from 'react';

import './categoryCard.scss';
import image from 'Images/burgurking.jpg';
import { Switch } from '@material-ui/core';

const CategoryCard = () => {
  const [status, setStatus] = useState('');
  console.log(status);

  return (
    <>
      <div className="category_card_container">
        <div className="category_image">
          <img src={image} alt="" />
        </div>
        <div className="category_details">
          <div className="name_status">
            <div>
              <p>Asian</p>
            </div>
            <Switch
              checked={true}
              onChange={(e) => setStatus(e.target.checked)}
              color="primary"
              name="status"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
          <div className="category_desc">
            <span>Delicious Asian Foods</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
