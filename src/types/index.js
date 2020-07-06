import PropTypes from "prop-types";

const offersType = PropTypes.array.isRequired;
const onTitleClickType = PropTypes.func.isRequired;

const listType = PropTypes.arrayOf(PropTypes.string).isRequired;

const hostType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPro: PropTypes.bool.isRequired
}).isRequired;

const galleryImagesType = PropTypes.arrayOf(PropTypes.string).isRequired;
const galleryAltType = PropTypes.string.isRequired;

const advantagesType = PropTypes.arrayOf(PropTypes.string).isRequired;

const offerType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  gallery: galleryImagesType,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  advantages: advantagesType,
  isPremium: PropTypes.bool.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  host: hostType
}).isRequired;

const reviewsWithoutShapeType = PropTypes.array.isRequired;

const reviewsType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
})

export {offersType, onTitleClickType, offerType, hostType, galleryImagesType, galleryAltType, advantagesType, listType, reviewsType, reviewsWithoutShapeType};
