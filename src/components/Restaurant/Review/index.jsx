import React from 'react'

import './review.scss';

import image from '../../../Images/manis.jpg';

const ReviewSection = () => {
    return (
      <>
        <div className="review_container">
          <div className="review_wrapper">
            <section className="review_content">
              <div className="review_header">
                <h1>Burgur King Reviews</h1>
                <span className="review_menus">
                  <h3>
                    All Reviews (228) &nbsp;&nbsp;
                    <i className="fa fa-caret-down" />
                  </h3>
                  <h3>
                    <i className="fa fa-filter" />
                    &nbsp; Newest First&nbsp;&nbsp;
                    <i className="fa fa-caret-down" />
                  </h3>
                </span>
              </div>
              <div className="review_details">
                <div className="review_users_header">
                  <span className="users">
                    <img src={image} alt="" />
                    <span className="user_details">
                      <h4>Johnson John</h4>
                      <p>1 reviews</p>
                    </span>
                  </span>
                  <span className="follow_btn">
                    <button>Follow</button>
                  </span>
                </div>
                <div className="review_users_content">
                  <div className="food_rating">
                    <i className="fa fa-star" />
                    &nbsp;5.0
                  </div>
                  <div className="more_rating_items">
                    <span>cozy ambiance</span>
                    <span>mouth watering food</span>
                    <span>great portions</span>
                    <span>delicious food</span>
                    <span>drive through</span>
                    <span>bang for buck</span>
                    <span>polite staff</span>
                    <span>experience</span>
                  </div>
                  <div className="comment_section">
                    <div className="comment_desc">
                      <p>
                        Am really satisfied to visit the burgur king its too
                        fresh and hygenic.
                      </p>
                    </div>
                    <div className="like_comment_times_texts">
                      <span>0 Likes,</span>
                      <span>0 Comments,</span>
                      <span>4 hours ago</span>
                    </div>
                    <div className="icons">
                      <span className="like">
                        <i className="fa fa-thumbs-o-up" /> Like
                      </span>
                      <span className="comment">
                        <i className="fa fa-commenting-o" /> Comment
                      </span>
                      <span className="share">
                        <i className="fa fa-share" /> Share
                      </span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </section>
            <section>
              <div className="review_rate_section">
                <h1>Rate your experience</h1>
              </div>
            </section>
          </div>
        </div>
      </>
    );
}

export default ReviewSection
