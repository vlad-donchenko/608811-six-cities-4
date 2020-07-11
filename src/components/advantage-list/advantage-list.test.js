import React from "react";
import renderer from 'react-test-renderer';
import Advantage from "./advantage-list.jsx";
import {offer} from "../../mock/test/offer";

it(`Should render Advantage`, () => {
  const tree = renderer.create(<Advantage list={offer[0].advantages}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
