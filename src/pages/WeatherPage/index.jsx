import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format, addDays } from "date-fns";
import api from "../../services/api";

import WeatherCard from "../../components/WeatherCard";
import WeekWeatherCard from "../../components/WeekWeatherCard";
import FavoriteBar from "../../components/FavoriteBar";

import {
  addFavoriteThunk,
  removeFavoriteThunk,
} from "../../store/modules/getFavoriteCities/thunks";

import { datesForWeek, weatherModel, capitalize } from "../../utils";
import {
  toastAlreadyAFavorite,
  toastFavoriteLimitError,
  toastFavoriteSuccess,
  toastRemoveSuccess,
} from "../../utils/toastify";

import {
  TitleDiv,
  Title,
  H3,
  Warning,
  SkeletonDiv,
  ButtonStyled,
} from "./styles";
import { Skeleton } from "@material-ui/lab";

export default function WeatherPage() {
  const dispatch = useDispatch();

  const city = useSelector((state) => state.city);
  const apiKey = useSelector((state) => state.apiKey);
  const favorites = useSelector((state) => state.favorites);

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

  const requestAPI = (city, key) => {
    api
      .get(`/forecast?q=${city}&appid=${key}`)
      .then((resp) => {
        setApiError(false);
        buildDateList(resp.data.list);
      })
      .catch((e) => {
        console.log(e);
        setApiError(true);
      });
  };

  const addFavorite = () => {
    if (favorites.length >= 5) {
      console.log("condição 1", favorites);
      toastFavoriteLimitError();
      return;
    }
    if (favorites.includes(city)) {
      toastAlreadyAFavorite();
      return;
    }

    toastFavoriteSuccess();
    dispatch(addFavoriteThunk(city));
  };

  const removeFavorite = () => {
    dispatch(removeFavoriteThunk(city));
    toastRemoveSuccess();
  };

  useEffect(() => {
    requestAPI(city, apiKey);
  }, [city]);

  return (
    <div>
      {city && !apiError ? (
        <>
          <FavoriteBar />

          <TitleDiv>
            <Title>{capitalize(city)}</Title>

            {favorites.includes(city) ? (
              <ButtonStyled
                color="secondary"
                variant="contained"
                onClick={removeFavorite}
              >
                Remover da lista
              </ButtonStyled>
            ) : (
              <ButtonStyled
                color="primary"
                variant="contained"
                onClick={addFavorite}
              >
                Adicionar à minha lista
              </ButtonStyled>
            )}
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
