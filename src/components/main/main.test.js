import React from "react";
import renderer from 'react-test-renderer';
import Main from "./main";
import Map from "../map/map.jsx";
import {offer} from "../../mock/test/offer";

it(`Should render Main`, () => {
  Map.prototype.componentDidMount = jest.fn();

  const tree = renderer.create(<Main offers={offer} onTitleClick={() => {}}/>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
