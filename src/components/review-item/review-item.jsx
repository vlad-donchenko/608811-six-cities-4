import React from "react";
import {getFormattedInUserDate, getFormattedInDateTime, convertRatingInSvgWidth} from "../../utils";
import {reviewsType} from "../../types";

const ReviewItem = (props) => {
  const {name, rating, avatar, text, date} = props.review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`img/${avatar}`} width="54" height="54" alt={name}/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: convertRatingInSvgWidth(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={getFormattedInDateTime(date)}>{getFormattedInUserDate(date)}</time>
      </div>
    </li>
  )
};

ReviewItem.propTypes = {
  reviews: reviewsType
}

export default ReviewItem;
