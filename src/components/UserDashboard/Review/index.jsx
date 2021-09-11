import React from 'react';

import './review.scss';

import images from 'Images/burgurking.jpg';

const ReviewPage = () => {
  return (
    <section>
      <h2>Review</h2>
      <div className="review_user_container">
        <div className="review_header">
          <div className="review_restaurant">
            <img src={images} alt="" />
            <div className="restaurant_details">
              <span>Burgur King</span>
              <p>Jayadev Bihar, Bhubaneswar</p>
            </div>
          </div>
          <div className="arrow_down_icon">
            <i className="fa fa-chevron-down" aria-hidden="true" />
          </div>
        </div>
        <div className="review_content">
          <div className="review">
            <span>
              <i className="fa fa-star"></i> 5
            </span>
            <p>Nov 02, 2020</p>
          </div>
          <div className="comment">
            <p>This place is really nice place for having fast food.</p>
          </div>
        </div>
        <div className="review_extras">
          <div className="votes">
            <span>0 Votes for helpful, 0 Comments</span>
          </div>
          <div className="icons">
            <div className="helpful">
              <i className="fa fa-thumbs-o-up" /> Helpful
            </div>
            <div className="comment">
              <i className="fa fa-comment-o" /> Comment
            </div>
            <div className="share">
              <i className="fa fa-share" /> Share
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
