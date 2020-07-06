import React from "react";
import renderer from 'react-test-renderer';
import OfferDetails from "./offer-details.jsx";
import {offers} from "../../mock/test/offers";

it(`Should render OfferDetails`, () => {
  const tree = renderer.create(<OfferDetails offer={offers[0]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
