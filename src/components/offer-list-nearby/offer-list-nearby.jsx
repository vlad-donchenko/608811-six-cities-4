import React from "react";
import OfferList from "../offer-list/offer-list.jsx";
import {classNameType} from "../../types";
import {OfferType} from "../../const";

const OfferListNearby = (props) => {
  const className = `near-places__list ${props.className || ``}`;
  delete props.className;

  return (
    <OfferList className={className} type={OfferType.NEARBY} {...props}/>
  );
};

OfferListNearby.propTypes = {
  className: classNameType
};

export default OfferListNearby;
