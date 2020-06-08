import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const OFFERS = 311;

const init = () => {
  ReactDOM.render(<App offers={OFFERS}/>, document.querySelector(`#root`));
};

init();
