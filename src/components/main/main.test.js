import React from "react";
import renderer from 'react-test-renderer';
import Main from "./main";
import {offers, titles} from "../../mock/test";

it(`Should render Main`, () => {
  const tree = renderer.create(<Main titles={titles} offers={offers} onTitleClick={() => {}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
