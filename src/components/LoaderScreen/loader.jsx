import React from 'react';

import './loader.scss';

import image from 'Images/loader.gif';

const Loader = () => {
  return (
    <div className="loader_container">
      <img src={image} alt="" />
    </div>
  );
};

export default Loader;
