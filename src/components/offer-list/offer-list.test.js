import React from "react";
import render from "enzyme/src/render";
import OfferList from "./offer-list";
import {offers} from "../../mock/test";

it(`Should render OfferList`, () => {
  const tree = render.create(<OfferList offers={offers} onTitleClick={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
