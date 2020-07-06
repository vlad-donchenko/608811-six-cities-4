import React from "react";
import renderer from 'react-test-renderer';
import App from "./app";
import Map from "../map/map";
import {offers} from "../../mock/test/offers";

it(`Should render App`, () => {
  Map.prototype.componentDidMount = jest.fn();

  const tree = renderer.create(
    <App offers={offers}/>,
    {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
