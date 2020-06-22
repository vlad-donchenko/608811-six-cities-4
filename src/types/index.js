import PropTypes from "prop-types";

const offersType = PropTypes.number.isRequired;
const titlesType = PropTypes.arrayOf(PropTypes.string).isRequired;
const onTitleClickType = PropTypes.func.isRequired;

const offerType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isBookmark: PropTypes.bool.isRequired
}).isRequired;

export {offersType, titlesType, onTitleClickType, offerType};
