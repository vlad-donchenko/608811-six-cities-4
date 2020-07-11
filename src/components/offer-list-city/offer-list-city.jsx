import React from "react";
import OfferList from "../offer-list/offer-list.jsx";
import {classNameType} from "../../types";

const OfferListCity = (props) => {
  const className = `cities__places-list tabs__content${props.className || ``}`;
  delete props.className;

  return (
    <OfferList className={className} {...props}/>
  );
};

OfferListCity.propTypes = {
  className: classNameType
};

export default OfferListCity;
