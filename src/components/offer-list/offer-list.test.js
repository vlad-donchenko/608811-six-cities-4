import React from "react";
import renderer from 'react-test-renderer';
import OfferList from "./offer-list.jsx";
import {offer} from "../../mock/test/offer";

it(`Should render OfferList`, () => {
  const tree = renderer.create(<OfferList offers={offer} onTitleClick={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
