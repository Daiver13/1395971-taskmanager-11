import moment from "moment";

export const escKey = (evt) => {
  return evt.key === `Escape` || evt.key === `Esc`;
};

export const formatTime = (date) => {
  return moment(date).format(`hh:mm`);
};

export const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
};
