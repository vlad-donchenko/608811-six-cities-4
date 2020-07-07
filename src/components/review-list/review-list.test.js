import React from "react";
import renderer from 'react-test-renderer';
import ReviewsList from "./review-list";
import {reviews} from "../../mock/test/review";

it(`Should render ReviewItem`, () => {
  const tree = renderer.create(<ReviewsList reviews={reviews}/>).toJSON();
  expect(tree);
});
