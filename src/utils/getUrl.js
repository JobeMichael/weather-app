export const getUrl = (type, options) => {
  const apiDomain = "http://api.openweathermap.org/data/2.5";
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const queryParams = Object.keys(options)
    .map((key) => key + "=" + options[key])
    .join("&");

  const url = `${apiDomain}/${type}/?appid=${apiKey}&${queryParams}`;
  return url;
};
