import { addDays } from "date-fns";

export const convertForDate = (dt) => {
  let regex = /-|\s/;

  dt = dt.split(regex);

  let date = dt[0];
  let month = dt[1] - 1;
  let year = dt[2];
  let hour = dt[3];
  const newDate = new Date(date, month, year);

  return [newDate, hour];
};

export const capitalize = (name) => {
  name = name.toLowerCase().replace(/(?:^|\s)\S/g, function (capitalize) {
    return capitalize.toUpperCase();
  });

  var PreposM = ["Da", "Do", "Das", "Dos", "A", "E", "De", "DE"];

  var prepos = ["da", "do", "das", "dos", "a", "e", "de", "de"];

  for (let i = PreposM.length - 1; i >= 0; i--) {
    name = name.replace(
      RegExp(
        "\\b" + PreposM[i].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\b",
        "g"
      ),
      prepos[i]
    );
  }

  return name;
};

export const dateRender = (dt) => {
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  let days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  let day = days[dt.getDay()];
  let date = dt.getDate();
  let month = months[dt.getMonth()];
  let year = dt.getFullYear();

  return `${day}, ${date} de ${month} de ${year}`;
};

export const datesForWeek = (start) => {
  let output = [];

  output[0] = start;
  output[1] = addDays(start, 1);
  output[2] = addDays(start, 2);
  output[3] = addDays(start, 3);
  output[4] = addDays(start, 4);
  output[5] = addDays(start, 5);

  return output;
};

export const weatherModel = (obj) => {
  let output = {
    tempMax: toCelsius(obj.main.temp_max),
    tempMin: toCelsius(obj.main.temp_min),
    temp: toCelsius(obj.main.temp),
    humidity: obj.main.humidity,
    description: weatherDescription(obj.weather[0].main),
    imgURL: imgIcons(obj.weather[0].main),
    date: convertForDate(obj.dt_txt)[0],
    hour: convertForDate(obj.dt_txt)[1],
  };

  return output;
};

export const imgIcons = (description) => {
  const imgDescription = {
    Thunderstorm: "11d",
    Drizzle: "09d",
    Rain: "10d",
    Snow: "13d",
    Mist: "50d",
    Smoke: "50d",
    Haze: "50d",
    Dust: "50d",
    Fog: "50d",
    Sand: "50d",
    Ash: "50d",
    Squall: "50d",
    Tornado: "50d",
    Clear: "01d",
    Clouds: "04d",
  };

  return `http://openweathermap.org/img/wn/${imgDescription[description]}@2x.png`;
};

export const toCelsius = (K) => {
  return Math.round(K - 273, 15);
};

export const weatherDescription = (description) => {
  const objDescription = {
    Thunderstorm: "Trovoada",
    Drizzle: "Chuvisco",
    Rain: "Chuva",
    Snow: "Neve",
    Mist: "Névoa",
    Smoke: "Fumaça",
    Haze: "Confusão",
    Dust: "Pó",
    Fog: "Névoa",
    Sand: "Areia",
    Ash: "Cinzas",
    Squall: "Tempestade",
    Tornado: "Tornado",
    Clear: "Limpo",
    Clouds: "Nublado",
  };

  return objDescription[description];
};
