import React from 'react';

import './adress.scss';

const UserAddresses = () => {
  return (
    <>
      <section className="address_container">
        <div className="address_header">
          <h3>Manage Addressed</h3>
        </div>
        <div className="address_content">
          <div className="address">
            <div className="address_icon">
              <i className="fa fa-home"></i>
            </div>
            <div className="address_details">
              <h4>Home</h4>
              <p>
                Plotno-161/Kulodaya Bhaban, Unnamed Road, Amrit Nagar, Jagamara,
                Bhubaneswar, Odisha 751030,India
              </p>
              <div className="links">
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </div>
          </div>

          <div className="address">
            <div className="address_icon">
              <i className="fa fa-map-pin"></i>
            </div>
            <div className="address_details">
              <h4>Other</h4>
              <p>
                Plotno-161/Kulodaya Bhaban, Unnamed Road, Amrit Nagar, Jagamara,
                Bhubaneswar, Odisha 751030,India
              </p>
              <div className="links">
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </div>
          </div>

          <div className="address">
            <div className="address_icon">
              <i className="fa fa-home"></i>
            </div>
            <div className="address_details">
              <h4>Home</h4>
              <p>
                Plotno-161/Kulodaya Bhaban, Unnamed Road, Amrit Nagar, Jagamara,
                Bhubaneswar, Odisha 751030,India
              </p>
              <div className="links">
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserAddresses;
