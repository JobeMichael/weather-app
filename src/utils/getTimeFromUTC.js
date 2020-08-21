import moment from "moment";
export const getTimeFromUTC = (utc) => {
  return moment.unix(utc).format("HH:mm");
};
