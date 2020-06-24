import React from "react";
import renderer from 'react-test-renderer';
import Gallery from "./gallery.jsx";
import {offers} from "../../mock/test";

it(`Should render Gallery`, () => {
  const tree = renderer.create(<Gallery alt={offers[0].title} images={offers[0].gallery}/>).toJSON();
  expect(tree);
});
