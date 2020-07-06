import React from "react";
import renderer from 'react-test-renderer';
import Gallery from "./gallery.jsx";
import {offer} from "../../mock/test/offer";

it(`Should render Gallery`, () => {
  const tree = renderer.create(<Gallery alt={offer[0].title} images={offer[0].gallery}/>).toJSON();
  expect(tree);
});
