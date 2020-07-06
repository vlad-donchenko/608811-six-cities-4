import React from "react";
import renderer from 'react-test-renderer';
import Main from "./main";
import {offers} from "../../mock/test/offers";

it(`Should render Main`, () => {
  const tree = renderer.create(<Main offers={offers} onTitleClick={() => {}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
