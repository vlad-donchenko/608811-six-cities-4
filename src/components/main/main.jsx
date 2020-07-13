import React from "react";
import {offersType, onTitleClickType} from "../../types";
import CityPlaces from "../city-places/city-places.jsx";
import OfferListCity from "../offer-list-city/offer-list-city.jsx";
import Sort from "../sort/sort.jsx";
import Tabs from "../tabs/tabs.jsx";
import Header from "../header/header.jsx";
import Map from "../map/map.jsx";

const Main = (props) => {
  const {offers, onTitleClick} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <CityPlaces render={() => (
              <React.Fragment>
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in Amsterdam</b>
                <Sort/>
              </React.Fragment>
            )}>
              <OfferListCity offers={offers} onTitleClick={onTitleClick}/>
            </CityPlaces>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType
};

export default Main;
