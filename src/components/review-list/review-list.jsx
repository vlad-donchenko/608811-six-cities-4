import React from "react";
import ReviewItem from "../review-item/review-item.jsx";
import {reviewsType} from "../../types";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviews && <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id}/>
        ))}
      </ul>}
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: reviewsType
};

export default ReviewsList;
