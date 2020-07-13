import React from "react";
import Gallery from "../gallery/gallery.jsx";
import Advantage from "../advantage-list/advantage-list.jsx";
import Host from "../host/host.jsx";
import ReviewsList from "../review-list/review-list.jsx";
import NearbyPlaces from "../nearby-places/nearby-places.jsx";
import OfferListNearby from "../offer-list-nearby/offer-list-nearby.jsx";
import Map from "../map/map.jsx";
import Header from "../header/header.jsx";
import {offerType} from "../../types";
import {reviews} from "../../mock/work/review";
import {getNearbyOffersByCity} from "../../utils/nearby-offers";

const OfferDetails = (props) => {
  const {offer} = props;
  const {title, gallery, price, type, rating, guests, bedroomsCount, advantages, isPremium, isBookmark, host, city} = offer;

  const nearbyOffers = getNearbyOffersByCity(city.name);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <Gallery images={gallery} alt={title}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button button ${isBookmark ? `property__bookmark-button--active` : ``}`}
                  type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 2 * 10}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {guests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&rsquo;s inside</h2>
                <Advantage list={advantages}/>
              </div>
              <Host host={host}/>
              <ReviewsList reviews={reviews}/>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearbyOffers}/>
          </section>
        </section>
        <div className="container">
          <NearbyPlaces render={() => (
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
          )}>
            <OfferListNearby offers={nearbyOffers}/>
          </NearbyPlaces>
        </div>
      </main>
    </div>
  );
};

OfferDetails.propTypes = {
  offer: offerType
};

export default OfferDetails;
