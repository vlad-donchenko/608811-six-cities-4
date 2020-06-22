import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {offers} from "./mock/work/offers";

const init = () => {
  ReactDOM.render(<App offers={offers}/>, document.querySelector(`#root`));
};

init();
