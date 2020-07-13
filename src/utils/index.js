import {MONTH} from "../const";

const getFormattedInUserDate = (date) => {
  const currentDate = new Date(date);
  const month = MONTH[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${month} ${year}`;
};

const getFormattedInDateTime = (date) => {
  const currentDate = new Date(date);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() < 10 ? `0${currentDate.getMonth()}` : currentDate.getMonth();
  const year = currentDate.getFullYear() < 10 ? `0${currentDate.getFullYear()}` : currentDate.getFullYear();

  return `${year}-${month}-${day}`;
};

const convertRatingInSvgWidth = (userRating) => {
  return `${userRating * 10 * 2}%`;
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {getFormattedInUserDate, getFormattedInDateTime, convertRatingInSvgWidth, extend};
