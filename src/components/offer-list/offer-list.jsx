import React from "react";
import OfferCard from "../offer-card/offer-card.jsx";
import {offersType, onTitleClickType} from "../../types";

const OfferList = (props) => {
  const {offers, onTitleClick} = props;
  console.log(offers);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) => (
        <OfferCard key={index} offer={offer} onTitleClick={onTitleClick}/>
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType
};

export default OfferList;
