import React from 'react'

import './photos.scss'

const Photos = () => {
    return (
      <>
        <div className="photos_container">
          <div className="photos_wrapper">
            <div className="photos_header">
              <h2>Burger King Photos</h2>
            </div>
            <div className="photos_filter">
              <span className="active">All (93)</span>
              <span className="tab_pop">Safety Practices (5)</span>
              <span className="tab_pop">Food (82)</span>
              <span className="tab_pop">Ambience (1)</span>
            </div>
          </div>
        </div>
      </>
    );
}

export default Photos
