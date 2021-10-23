import React from 'react';

import './creditCard.scss';

import visa from 'Images/visa.png';
import chip from 'Images/chip.png';
import map from 'Images/map.png';
//import pattern from 'Images/pattern.png';

const CreditCard = () => {
  return (
    <>
      <div className="card_container">
        <div className="card">
          <div className="card_inner">
            <div className="card_front">
              <img src={map} alt="" className="map_img" />
              <div className="row">
                <img src={chip} alt="" width="40px" />
                <img src={visa} alt="" width="60px" />
              </div>
              <div className="card_no">
                <p>1234 5678 9876 5432</p>
              </div>
              <div className="card_secrets">
                <div className="card_holder">
                  <p>Card Holder</p>
                  <p>Expires</p>
                </div>
                <div className="name">
                  <p>Manoranjan Sahoo</p>
                  <p>12/25</p>
                </div>
              </div>
            </div>

            {/* <div className="card_back">
              <img src={map} alt="" className="map_img" />
              <div className="bar"></div>
              <div className="card_cvv">
                <div>
                  <img src={pattern} alt="" width="80px" height="35px" />
                </div>
                <p>834</p>
              </div>
              <div className="card_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  omnis
                </p>
              </div>
              <div className="signature">
                <p>CUSTOMER SIGNATURE</p>
                <img src={visa} alt="" width="60px" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
