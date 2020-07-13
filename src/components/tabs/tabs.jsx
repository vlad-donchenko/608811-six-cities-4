import React from "react";
import {CityName} from "../../const";

const Tabs = () => {
  const cities = Object.values(CityName);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index) => (
            <li className="locations__item" key={`${city}-${index}`}>
              <a className="locations__item-link tabs__item" href="#" id={city}>
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Tabs;
