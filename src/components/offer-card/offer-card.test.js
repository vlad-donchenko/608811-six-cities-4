import React from "react";
import renderer from 'react-test-renderer';
import OfferCard from "./offer-card.jsx";
import {offers} from "../../mock/test/offers";

it(`Should render OfferCard`, () => {
  const tree = renderer.create(<OfferCard offer={offers[0]} onTitleClick={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
