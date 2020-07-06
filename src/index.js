import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {offer} from "./mock/work/offer";

const init = () => {
  ReactDOM.render(<App offers={offer}/>, document.querySelector(`#root`));
};

init();
