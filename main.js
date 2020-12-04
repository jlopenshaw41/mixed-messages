let forecasts = {
  beginning: [
    "Today",
    "Tomorrow",
    "Next week",
    "This afternoon",
    "This weekend",
    "Tomorrow morning",
    "Tomorrow afternoon",
    "On Tuesday",
    "On Thursday",
  ],
  middle: [
    "it will be",
    "it is likely to be",
    "it looks like it will be",
    "it will probably be",
    "it will certainly be",
    "it is unlikely to be",
    "it definitely will not be",
  ],
  end: [
    "rainy",
    "sunny",
    "blustery",
    "cloudy",
    "stormy",
    "mainly sunny",
    "windy",
    "hot",
    "cold",
  ],
};

const generateQuote = () => {
  let randomNum1 = Math.floor(Math.random() * forecasts.beginning.length);
  let randomNum2 = Math.floor(Math.random() * forecasts.middle.length);
  let randomNum3 = Math.floor(Math.random() * forecasts.end.length);
  return `${forecasts.beginning[randomNum1]} ${forecasts.middle[randomNum2]} ${forecasts.end[randomNum3]}.`;
};

console.log(generateQuote());
