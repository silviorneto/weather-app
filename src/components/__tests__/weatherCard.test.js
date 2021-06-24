import { render, screen } from "@testing-library/react";
import WeatherCard from "../WeatherCard";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios;

describe("When the user enters a valid city", () => {
  test("Should show the weather information of the day", async () => {
    const now = new Date();
    const weather = {
      tempMax: 17,
      tempMin: 15,
      temp: 15,
      humidity: 82,
      description: "Limpo",
      imgURL: "http://openweathermap.org/img/wn/01d@2x.png",
      date: now,
      hour: "06:00:00",
    };

    mockedAxios.get.mockResolvedValueOnce({ data: { weather } });

    render(<WeatherCard weather={weather} />);
    const temperature = await screen.getByRole("heading", {
      name: /15°c/i,
    });

    expect(temperature).toBeInTheDocument();
  });
});
