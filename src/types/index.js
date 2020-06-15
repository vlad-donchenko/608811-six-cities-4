import PropTypes from "prop-types";

const offersType = PropTypes.number.isRequired;
const titlesType = PropTypes.arrayOf(PropTypes.string).isRequired;
const onTitleClickType = PropTypes.func.isRequired;

export {offersType, titlesType, onTitleClickType};
