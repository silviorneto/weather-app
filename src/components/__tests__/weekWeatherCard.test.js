import { render, screen } from "@testing-library/react";
import WeekWeatherCard from "../WeekWeatherCard";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios;

describe("When the user enters a valid city", () => {
  test("Should show the weather information of the week", async () => {
    const now = new Date();
    const weatherPerDay = [
      [
        {
          tempMax: 17,
          tempMin: 15,
          temp: 15,
          humidity: 82,
          description: "Limpo",
          imgURL: "http://openweathermap.org/img/wn/01d@2x.png",
          date: now,
          hour: "06:00:00",
        },
      ],
      [
        {
          tempMax: 15,
          tempMin: 15,
          temp: 15,
          humidity: 75,
          description: "Limpo",
          imgURL: "http://openweathermap.org/img/wn/01d@2x.png",
          date: now,
          hour: "09:00:00",
        },
      ],
      [
        {
          tempMax: 20,
          tempMin: 18,
          temp: 18,
          humidity: 64,
          description: "Limpo",
          imgURL: "http://openweathermap.org/img/wn/01d@2x.png",
          date: now,
          hour: "12:00:00",
        },
      ],
      [
        {
          tempMax: 25,
          tempMin: 25,
          temp: 25,
          humidity: 36,
          description: "Limpo",
          imgURL: "http://openweathermap.org/img/wn/01d@2x.png",
          date: now,
          hour: "12:00:00",
        },
      ],
      [
        {
          tempMax: 26,
          tempMin: 26,
          temp: 26,
          humidity: 31,
          description: "Limpo",
          imgURL: "http://openweathermap.org/img/wn/01d@2x.png",
          date: now,
          hour: "18:00:00",
        },
      ],
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { weatherPerDay } });

    render(<WeekWeatherCard weatherList={weatherPerDay} />);
    const humidity = await screen.getByText(/82%/i);

    expect(humidity).toBeInTheDocument();
  });
});
