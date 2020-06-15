import React from "react";
import Main from "../main/main.jsx";
import {offersType, titlesType} from "../../types";

const App = (props) => {
  const {offers, titles} = props;

  return (<Main offers={offers} titles={titles}/>);
};

App.propTypes = {
  offers: offersType,
  titles: titlesType
};

export default App;
