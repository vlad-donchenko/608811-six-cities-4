import React from "react";
import renderer from 'react-test-renderer';
import ReviewItem from "./review-item.jsx";
import {reviews} from "../../mock/test/review";

it(`Should render ReviewsList`, () => {
  const tree = renderer.create(<ReviewItem review={reviews[0]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
