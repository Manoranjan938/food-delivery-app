import React from 'react';
import image from 'Images/burgurking.jpg';

import './menuCard.scss'

const MenuCard = () => {
  return (
    <>
      <div className="single_menu">
        <div className="menu_card_header">
          <span>Category: American</span>
        </div>
        <hr />
        <div className="menu_card_body">
          <div className="menu_details">
            <img src={image} alt="" />
            <p>Chiken Grilled Hooper</p>
          </div>
          <div className="menu_price">
            <span>
              <i className="fa fa-inr" /> 300
            </span>
          </div>
        </div>
        <hr />
        <div className="menu_card_footer">
          <button>Mark as Inactive</button>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
