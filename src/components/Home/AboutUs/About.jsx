import React from 'react';

import './about.scss'

import image from 'Images/about-img.png';

const About = () => {
  return (
    <section className="about">
      <h3 className="sub_heading">About Us</h3>
      <h1 className="heading">Why Choose Us?</h1>
      <div className="row">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>Best Food in the Country</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            excepturi, debitis ad expedita ducimus similique mollitia odit
            aliquid voluptatibus, architecto consectetur velit dolores tempore,
            sunt perferendis accusantium at vel? Voluptas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla fuga
            dicta perspiciatis, optio tenetur quos? Voluptate numquam dolorem
            maiores ea?
          </p>
          <div className="icons-container">
            <div className="icons">
              <i className="fa fa-truck" aria-hidden="true"></i>
              <span>Instant Delivery</span>
            </div>
            <div className="icons">
              <i className="fa fa-usd" aria-hidden="true"></i>
              <span>Easy Payments</span>
            </div>
            <div className="icons">
              <i className="fa fa-headphones" aria-hidden="true"></i>
              <span>24/7 Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
