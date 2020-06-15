import React from "react";
import renderer from 'react-test-renderer';
import App from "./app";
import {offers, titles} from "../../mock/test";

it(`Should render App`, () => {
  const tree = renderer.create(<App offers={offers} titles={titles}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
