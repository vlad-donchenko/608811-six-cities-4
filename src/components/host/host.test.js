import React from "react";
import renderer from 'react-test-renderer';
import Host from "./host.jsx";
import {offer} from "../../mock/test/offer";

it(`Should render Host`, () => {
  const tree = renderer.create(<Host host={offer[0].host}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
