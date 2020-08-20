export const getTextByWindSpeed = (windSpeed) => {
  const data = [
    { text: "Calm", speed: 0.5 },
    { text: "Light Air", speed: 1.5 },
    { text: "Light Breeze", speed: 3.3 },
    { text: "Gentle Breeze", speed: 5.5 },
    { text: "Moderate Breeze", speed: 7.9 },
    { text: "Fresh breeze", speed: 10.7 },
    { text: "Strong Breeze", speed: 13.8 },
    { text: "Gale", speed: 17.1 },
    { text: "Storm", speed: 24.4 },
    { text: "Violent storm", speed: 32.6 },
    { text: "Hurricaine force", speed: 32.7 },
  ];

  return data.find(({ speed }) => speed >= windSpeed).text;
};
