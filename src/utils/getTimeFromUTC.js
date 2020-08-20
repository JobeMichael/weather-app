export const getTimeFromUTC = (utc) =>
  new Date(utc * 1000).toLocaleTimeString().slice(0, 5);
