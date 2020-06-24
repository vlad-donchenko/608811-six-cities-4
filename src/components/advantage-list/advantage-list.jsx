import React from "react";
import {listType} from "../../types";

const Advantage = (props) => {
  const {list} = props;

  return (
    <ul className="property__inside-list">
      {list.map((item, index) => (
        <li key={`${index}-${item}`} className="property__inside-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

Advantage.propTypes = {
  list: listType
};

export default Advantage;
