import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../services";

import WeatherCard from "../../components/WeatherCard";
import WeekWeatherCard from "../../components/WeekWeatherCard";

import { TitleDiv, Title, H3, Warning, SkeletonDiv } from "./styles";
import { Skeleton } from "@material-ui/lab";
import { datesForWeek, weatherModel, capitalize } from "../../utils";
import { format, addDays } from "date-fns";

export default function WeatherPage() {
  const city = useSelector((state) => state.city);
  const apiKey = useSelector((state) => state.apiKey);
  const history = useHistory();

  const today = new Date();
  const [weatherToday, setWeatherToday] = useState([]);
  const [weatherPerDay, setWeatherPerDay] = useState([]);
  const [apiError, setApiError] = useState(false);

  const buildDateList = (list) => {
    let firstDay = format(weatherModel(list[0]).date, "dd/MM/yyyy");
    let todayFormatted = format(today, "dd/MM/yyyy");
    let week = [];

    if (firstDay !== todayFormatted) {
      const tomorrow = addDays(today, 1);
      week = datesForWeek(tomorrow);
    } else {
      week = datesForWeek(today);
    }

    let output = [];

    for (let i = 0; i < 5; i++) {
      const dayOfTheWeek = format(week[i], "dd/MM/yyyy");
      output[i] = [];

      for (let j = 0; j < list.length; j++) {
        const listItem = weatherModel(list[j]);
        const weatherDate = format(listItem.date, "dd/MM/yyyy");

        if (dayOfTheWeek === weatherDate) {
          output[i].push(listItem);
        }
      }
    }

    const todayWeather = output.shift();
    setWeatherToday(todayWeather);
    setWeatherPerDay(output);
  };

  useEffect(() => {
    api
      .get(`/forecast?q=${city}&appid=${apiKey}`)
      .then((resp) => {
        setApiError(false);
        buildDateList(resp.data.list);
      })
      .catch((e) => {
        console.log(e);
        setApiError(true);
      });
  }, [city]);

  console.log("weatherToday", weatherToday);

  return (
    <div>
      {city && !apiError ? (
        <>
          <TitleDiv>
            <Title>{capitalize(city)}</Title>
            <small>Adicionar à minha lista</small>
          </TitleDiv>

          <H3>Previsão do dia</H3>
          {weatherToday[0] ? (
            <WeatherCard weather={weatherToday[0]} />
          ) : (
            <SkeletonDiv>
              <Skeleton variant="rect" height={80} />
            </SkeletonDiv>
          )}

          <H3>Previsão semanal</H3>
          {weatherToday[0] ? (
            <WeekWeatherCard weatherList={weatherPerDay} />
          ) : (
            <SkeletonDiv>
              <Skeleton variant="rect" height={80} />
            </SkeletonDiv>
          )}
        </>
      ) : (
        <Warning>Cidade não encontrada. Tente novamente.</Warning>
      )}
    </div>
  );
}
