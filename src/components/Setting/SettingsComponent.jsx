import React from 'react';

import './setting.scss';

const SettingsComponent = () => {
  return (
    <>
      <div className="settings_container">
        <div className="setting_wrapper">
          <div className="cards">
            <div className="card_items">
              <div className="icon">
                <i className="fa fa-user-o" />
              </div>
              <div className="content">
                <span>Account</span>
                <i className="fa fa-chevron-right" />
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_items">
              <div className="icon">
                <i className="fa fa-eye" />
              </div>
              <div className="content">
                <span>Apearance</span>
                <i className="fa fa-chevron-right" />
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_items">
              <div className="icon">
                <i className="fa fa-lock" />
              </div>
              <div className="content">
                <span>Privacy & Security</span>
                <i className="fa fa-chevron-right" />
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_items">
              <div className="icon">
                <i className="fa fa-headphones" />
              </div>
              <div className="content">
                <span>Help & Support</span>
                <i className="fa fa-chevron-right" />
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_items">
              <div className="icon">
                <i className="fa fa-question-circle-o" />
              </div>
              <div className="content">
                <span>About</span>
                <i className="fa fa-chevron-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsComponent;
