import React from "react";
import {classNameType, childrenType, renderType} from "../../types";

const Places = (props) => {
  const {className, children, render} = props;

  return (
    <section className={`places ${className || ``}`}>
      {render()}
      {children}
    </section>
  );
};

Places.propTypes = {
  render: renderType,
  className: classNameType,
  children: childrenType,
};

export default Places;
