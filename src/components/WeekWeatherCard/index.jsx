import React from "react";
import { dateRender } from "../../utils";
import { RiArrowRightSFill } from "react-icons/ri";

import { Skeleton } from "@material-ui/lab";
import {
  Container,
  Card,
  TitleDiv,
  Clima,
  StyleDiv,
  BulletPoint,
  SkeletonDiv,
} from "./styles";

export default function WeekWeatherCard({ weatherList }) {
  return (
    <Container>
      {weatherList &&
        weatherList.map((day, idx) => (
          <>
            <Card>
              <TitleDiv>
                <RiArrowRightSFill />
                <h2>{dateRender(day[0].date)}</h2>
              </TitleDiv>
              <Clima>
                <h3>{day[0].temp}°C</h3>
                <div>
                  <img src={day[0].imgURL} alt={day[0].description} />
                  <p>{day[0].description}</p>
                </div>
              </Clima>
              <StyleDiv>
                <div>
                  <p>Máx/Mín:</p>
                </div>
                <p>
                  {day[0].tempMax}°C / {day[0].tempMin}°C
                </p>
              </StyleDiv>
              <StyleDiv>
                <div>
                  <p>Umidade:</p>
                </div>
                <p>{day[0].humidity}%</p>
              </StyleDiv>
            </Card>
            {idx !== weatherList.length - 1 && (
              <BulletPoint>
                <div></div>
              </BulletPoint>
            )}
          </>
        ))}
    </Container>
  );
}
