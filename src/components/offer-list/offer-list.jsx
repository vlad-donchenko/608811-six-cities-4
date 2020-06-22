import React from "react";
import OfferCard from "../offer-card/offer-card.jsx";

const OfferList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) => (
        <OfferCard key={index} offer={offer}/>
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: offersType
};

export default OfferList;
