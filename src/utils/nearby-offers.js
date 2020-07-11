import {CityName} from "../const";
import {nearbyAmsterdam} from "../mock/work/offers-nearby";

const getAmsterdamNearbyOffers = () => {
  return nearbyAmsterdam;
};

const getBrusselsNearbyOffers = () => {
  return [];
};

const getCologneNearbyOffers = () => {
  return [];
};

const getDusselDorfNearbyOffers = () => {
  return [];
};

const getParisNearbyOffers = () => {
  return [];
};

const getNearbyOffersByCity = (city) => {
  switch (city) {
    case CityName.AMSTERDAM:
      return getAmsterdamNearbyOffers();
    case CityName.BRUSSELS:
      return getBrusselsNearbyOffers();
    case CityName.COLOGNE:
      return getCologneNearbyOffers();
    case CityName.DUSSELDORF:
      return getDusselDorfNearbyOffers();
    case CityName.PARIS:
      return getParisNearbyOffers();
  }

  return [];
};

export {getNearbyOffersByCity};
