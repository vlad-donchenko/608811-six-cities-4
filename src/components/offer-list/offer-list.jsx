import React from "react";
import OfferCard from "../offer-card/offer-card.jsx";
import OfferCardCity from "../offer-card-city/offer-card-city.jsx";
import OfferCardNearby from "../offer-card-nearby/offer-card-nearby.jsx";
import {OfferType} from "../../const";
import {classNameType, offersType, onTitleClickType} from "../../types";

const OfferList = (props) => {
  const getComponentByType = (index, type, offer, onTitleClick) => {
    switch (type) {
      case OfferType.CITY:
        return <OfferCardCity key={index} offer={offer} onTitleClick={onTitleClick}/>;
      case OfferType.NEARBY:
        return <OfferCardNearby key={index} offer={offer}/>;
      default:
        return <OfferCard key={index} offer={offer}/>;
    }
  };

  return (
    <div className={`places__list ${props.className}`}>
      {props.offers.map((offer) => (
        getComponentByType(offer.id, offer.offerType, offer, props.onTitleClick || null)
      ))}
    </div>
  );
};

OfferList.defaultProps = {
  className: ``,
  onTitleClick: null
};

OfferList.propTypes = {
  className: classNameType,
  offers: offersType,
  onTitleClick: onTitleClickType
};

export default OfferList;
