import React from "react";
import Places from "../places/places.jsx";
import {classNameType} from "../../types";

const CityPlaces = (props) => {
  const className = `cities__places ${props.className || ``}`;
  delete props.className;

  return (
    <Places className={className} {...props}/>
  );
};

CityPlaces.propTypes = {
  className: classNameType
};

export default CityPlaces;
