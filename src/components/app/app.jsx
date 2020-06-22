import React from "react";
import Main from "../main/main.jsx";
import {offersType} from "../../types";

const handleTitleClick = () => {};

const App = (props) => {
  const {offers} = props;

  return (<Main offers={offers} onTitleClick={handleTitleClick}/>);
};

App.propTypes = {
  offers: offersType,
};

export default App;
