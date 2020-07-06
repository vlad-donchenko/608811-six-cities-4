import React from "react";
import renderer from 'react-test-renderer';
import Advantage from "./advantage-list.jsx";
import {offers} from "../../mock/test/offers";

it(`Should render Advantage`, () => {
  const tree = renderer.create(<Advantage list={offers[0].advantages}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
