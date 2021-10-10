import React from 'react';

import image1 from 'Images/home-img-1.png'
// import image2 from 'Images/home-img-2.png'
// import image3 from 'Images/home-img-3.png'

import './hero.scss'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_container">
        <div className="hero_wrapper">
          <div className="hero_slide">
            <div className="slider_content">
              <span>Our Special Dish</span>
              <h3>Spicy Noodles</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                tempore iusto accusantium doloribus, at itaque.
              </p>
              <button>Order Now</button>
            </div>
            <div className="slider_image">
                <img src={image1} alt="" />
            </div>
          </div>
          {/* <div className="hero_slide">
            <div className="slider_content">
              <span>Our Special Dish</span>
              <h3>Fried Chiken</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                tempore iusto accusantium doloribus, at itaque.
              </p>
              <button>Order Now</button>
            </div>
            <div className="slider_image">
                <img src={image2} alt="" />
            </div>
          </div>
          <div className="hero_slide">
            <div className="slider_content">
              <span>Our Special Dish</span>
              <h3>Hot Pizza</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                tempore iusto accusantium doloribus, at itaque.
              </p>
              <button>Order Now</button>
            </div>
            <div className="slider_image">
                <img src={image3} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
