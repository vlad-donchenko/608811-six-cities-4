import React from "react";
import OfferCard from "../offer-card/offer-card.jsx";
import {classNameType} from "../../types";
import {OfferCardPrefix} from "../../const";

const OfferCardCity = (props) => {
  const className = `cities__place-card ${props.className || ``}`;
  delete props.className;

  return (
    <OfferCard prefix={OfferCardPrefix.CITIES} className={className} {...props}/>
  );
};

OfferCardCity.propTypes = {
  className: classNameType
};

export default OfferCardCity;
