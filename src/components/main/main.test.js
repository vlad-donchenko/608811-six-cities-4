import React from "react";
import renderer from 'react-test-renderer';
import Main from "./main";
import Map from "../map/map.jsx";
import {offers} from "../../mock/test/offers";

it(`Should render Main`, () => {
  Map.prototype.componentDidMount = jest.fn();

  const tree = renderer.create(<Main offers={offers} onTitleClick={() => {}}/>,
    {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
