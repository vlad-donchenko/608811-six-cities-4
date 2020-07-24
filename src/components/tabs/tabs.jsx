import React from "react";
import {connect} from "react-redux";
import {CITIES} from "../../const";
import {ActionCreator} from "../../reducer";
import {activeCityType, onTabLickClickType} from "../../types";

const Tabs = (props) => {
  const {activeCity, onTabLickClick} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.slice().map((city, index) => (
            <li className="locations__item" key={`${city}-${index}`}>
              <a className={`locations__item-link tabs__item ${activeCity === city ? `tabs__item--active` : ``}`}
                href="#" id={city}
                onClick={(evt) => {
                  evt.preventDefault();
                  onTabLickClick(city);
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  activeCity: activeCityType,
  onTabLickClick: onTabLickClickType
};

const mapDispatchToProps = (dispatch) => ({
  onTabLickClick: (city) => {
    dispatch(ActionCreator.changeActiveCity(city));
  }
});

export {Tabs};
export default connect(null, mapDispatchToProps)(Tabs);
