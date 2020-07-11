import React from 'react';
import renderer from 'react-test-renderer';
import Map from "./map";
import {offer} from "../../mock/test/offer";

it(`MapCities is rendered correctly`, () => {
  Map.prototype.componentDidMount = jest.fn();
  const tree = renderer.create(
      <Map
        offers={offer}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
