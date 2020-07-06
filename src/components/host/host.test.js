import React from "react";
import renderer from 'react-test-renderer';
import Host from "./host.jsx";
import {offers} from "../../mock/test/offers";

it(`Should render Host`, () => {
  const tree = renderer.create(<Host host={offers[0].host}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
