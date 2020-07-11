import React from "react";
import {classNameType, offerType, onTitleClickType, prefixType} from "../../types";

const OfferCard = (props) => {
  const {prefix, offer, onTitleClick, className} = props;
  const {id, title, picture, price, type, rating, isPremium, isBookmark} = offer;

  const linkMarkup = onTitleClick ? <a href="#" onClick={() => {
    onTitleClick(String(id));
  }}>{title}</a> : <a style={{cursor: `default`}}>{title}</a>;

  return (
    <article className={`place-card ${className}`}>
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${prefix}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={`img/${picture}`} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isBookmark ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 2 * 10}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          {linkMarkup}
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.defaultProps = {
  prefix: ``,
  className: ``,
  onTitleClick: null
};

OfferCard.propTypes = {
  offer: offerType,
  prefix: prefixType,
  className: classNameType,
  onTitleClick: onTitleClickType
};

export default OfferCard;
