import React from "react";

import "./overview.scss";

import { safetyData } from "./safetyData";

const Overview = () => {
  return (
    <>
      <div className="overview_container">
        <div className="overview_wrapper">
          <div className="content_section">
            <h2>About this place</h2>
            <div className="restaurant_safety_section">
              {safetyData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="kitchen_sanitization safety_section"
                  >
                    <div className="image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="content">
                      <span>{item.mainTitle}</span>
                      <p>{item.subTitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <section className="cuisines">
              <h3>Cuisines</h3>
              <div className="items">
                <span>Burgur</span>
                <span>Fast Food</span>
                <span>Bevarages</span>
              </div>
            </section>
            <section className="more_info">
              <h3>More Info</h3>
            </section>
            <section className="blogger">
              <div className="texts">
                <h1>Are you a food blogger?</h1>
                <span>
                  Add a foodie spoonback to your blog.&nbsp;
                  <i class="fa fa-caret-right" />
                </span>
              </div>
              <div className="blog_btn">
                <button>
                  Get Restaurant Widget&nbsp;
                  <i class="fa fa-caret-right" />
                </button>
              </div>
            </section>
          </div>
          <aside>
            <div className="map_direction_section">
              <section className="call_section">
                <h2>Call</h2>
                <span>+91 9348554715</span>
              </section>
              <section className="direction_section">
                <h2>Direction</h2>
                <p>
                  QSR - 1, 3rd Floor, Vega City Mall, Srinivas Industrial
                  Estate, Bannerghatta Road, Bangalore
                </p>
              </section>
              <section className="btns">
                <button>
                  <i className="fa fa-clone"></i>&nbsp;Copy
                </button>
                <button>
                  <i className="fa fa-share"></i>&nbsp;Direction
                </button>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Overview;
