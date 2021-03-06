import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";
import {offer} from "../../mock/test/offer";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should title click`, () => {
  const handleTitleClick = jest.fn();
  const main = shallow(<OfferCard offer={offer[0]} onTitleClick={handleTitleClick}/>, {
    createNodeMock: () => {
      return document.createElement(`div`);
    }
  });
  main.find(`.place-card__name a`).simulate(`click`);

  expect(handleTitleClick.mock.calls.length).toBe(1);
});
