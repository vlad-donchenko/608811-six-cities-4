import React from "react";
import Places from "../places/places.jsx";
import {classNameType} from "../../types";

const NearbyPlaces = (props) => {
  const className = `near-places ${props.className || ``}`;
  delete props.className;

  return (
    <Places className={className} {...props}/>
  );
};

NearbyPlaces.propTypes = {
  className: classNameType,
};

export default NearbyPlaces;
