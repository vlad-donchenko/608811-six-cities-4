import PropTypes from "prop-types";

const offersType = PropTypes.number.isRequired;
const titlesType = PropTypes.arrayOf(PropTypes.string);

export {offersType, titlesType};
