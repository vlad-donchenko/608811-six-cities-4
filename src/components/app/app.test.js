import React from "react";
import renderer from 'react-test-renderer';
import App from "./app";
import {offers} from "../../mock/test";

it(`Should render App`, () => {
  const tree = renderer.create(<App offers={offers}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
