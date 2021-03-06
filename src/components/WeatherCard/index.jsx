import React from "react";
import { dateRender } from "../../utils";

import { Container, Title, Clima, StyleDiv } from "./styles";

export default function TodayWeatherCard({ weather }) {
  return (
    <Container>
      {weather && (
        <>
          <Title>{dateRender(weather.date)}</Title>
          <Clima>
            <h2>{weather.temp}°C</h2>
            <div>
              <img src={weather.imgURL} alt={weather.description} />
              <p>{weather.description}</p>
            </div>
          </Clima>
          <StyleDiv>
            <div>
              <p>
                <b>Máx/Mín:</b>
              </p>
            </div>
            <p>
              {weather.tempMax}°C / {weather.tempMin}°C
            </p>
          </StyleDiv>
          <StyleDiv>
            <div>
              <p>
                <b>Umidade:</b>
              </p>
            </div>
            <p>{weather.humidity}%</p>
          </StyleDiv>
        </>
      )}
    </Container>
  );
}
