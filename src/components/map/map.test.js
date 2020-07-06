import React from 'react';
import renderer from 'react-test-renderer';
import Map from "./map";
import {offers} from "../../mock/test/offers";

it(`MapCities is rendered correctly`, () => {
  Map.prototype.componentDidMount = jest.fn();
  const tree = renderer.create(
    <Map
      offers={offers}
    />,
    {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
