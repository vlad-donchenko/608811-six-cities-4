import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {offers, titles} from "../../mock/test";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should title click`, () => {
  const handleTitleClick = jest.fn();
  const main = shallow(<Main offers={offers} titles={titles} onTitleClick={handleTitleClick}/>);
  main.find(`.place-card__name a`).first().simulate(`click`);

  expect(handleTitleClick.mock.calls.length).toBe(1);
});
