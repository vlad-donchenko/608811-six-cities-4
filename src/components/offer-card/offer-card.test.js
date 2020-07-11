import React from "react";
import renderer from 'react-test-renderer';
import OfferCard from "./offer-card.jsx";
import {offer} from "../../mock/test/offer";

it(`Should render OfferCard`, () => {
  const tree = renderer.create(<OfferCard offer={offer[0]} onTitleClick={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
