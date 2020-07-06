import React from "react";
import renderer from 'react-test-renderer';
import OfferDetails from "./offer-details.jsx";
import {offer} from "../../mock/test/offer";

it(`Should render OfferDetails`, () => {
  const tree = renderer.create(<OfferDetails offer={offer[0]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
