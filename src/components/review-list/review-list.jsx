import React from "react";
import ReviewItem from "../review-item/review-item.jsx";
import {reviewsWithoutShapeType} from "../../types";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      {reviews &&  <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id}/>
        ))}
      </ul>}
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: reviewsWithoutShapeType
}

export default ReviewsList;
