import React from "react";
import OfferCard from "../offer-card/offer-card.jsx";
import {classNameType} from "../../types";
import {OfferCardPrefix} from "../../const";

const OfferCardNearby = (props) => {
  const className = `near-places__card ${props.className || ``}`;
  delete props.className;

  return (
    <OfferCard prefix={OfferCardPrefix.NEAR_PLACES} className={className} {...props}/>
  );
};

OfferCardNearby.propTypes = {
  className: classNameType
};

export default OfferCardNearby;
