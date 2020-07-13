import {extend} from "./utils";
import {CityName} from "./const";

const initialState = {
  offerId: null,
  activeCity: CityName.AMSTERDAM
};

const ActionType = {
  CHANGE_ACTIVE_CITY: `CHANGE_ACTIVE_CITY`,
  CHANGE_OFFER_ID: `CHANGE_OFFER_ID`
};

const ActionCreator = {
  changeActiveCity: (city) => ({
    type: ActionType.CHANGE_ACTIVE_CITY,
    payload: city
  }),
  changeOfferId: (id) => ({
    type: ActionType.CHANGE_OFFER_ID,
    payload: id
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.CHANGE_OFFER_ID:
      return extend(state, {
        offerId: action.payload
      });
    default:
      return state;
  }
};

export {reducer, ActionCreator};
