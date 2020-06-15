import React from "react";
import Main from "../main/main.jsx";
import {offersType, titlesType} from "../../types";

const handleTitleClick = () => {};

const App = (props) => {
  const {offers, titles} = props;

  return (<Main offers={offers} titles={titles} onTitleClick={handleTitleClick}/>);
};

App.propTypes = {
  offers: offersType,
  titles: titlesType
};

export default App;
