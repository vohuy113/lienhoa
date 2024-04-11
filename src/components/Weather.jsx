import React, { useState, useEffect } from "react";
import raint from "../assets/Homepage/SectionWellcome/Rain.png";
import clear from "../assets/Homepage/SectionWellcome/clear.png";
import cloud from "../assets/Homepage/SectionWellcome/cloud.png";
import drizzle from "../assets/Homepage/SectionWellcome/drizzle.png";
import humidity from "../assets/Homepage/SectionWellcome/humidity.png";
import snow from "../assets/Homepage/SectionWellcome/snow.png";
import wind from "../assets/Homepage/SectionWellcome/wind.png";
import { useTranslation } from "react-i18next";
export const Weather = () => {
  const { t } = useTranslation();

  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState("");
  const [icon, setIcon] = useState(clear);
  const key = process.env.REACT_APP_API_KEY_WEATHER;
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=16.46&lon=107.59&appid=${key}&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          throw new Error("Failed to fetch weather data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = currentDate.toLocaleDateString("vi-VN", options);
    setDate(formattedDate);
  }, []);
  useEffect(() => {
    const iconMapping = {
      "01d": clear,
      "01n": clear,
      "02d": cloud,
      "02n": cloud,
      "03d": drizzle,
      "03n": drizzle,
      "04d": drizzle,
      "04n": drizzle,
      "09d": raint,
      "09n": raint,
      "10d": raint,
      "10n": raint,
      "13d": snow,
      "13n": snow,
    };
    const currentIcon = weatherData?.weather[0].icon || clear;
    setIcon(iconMapping[currentIcon]);
  }, [weatherData]);
  function translateDescription(description) {
    switch (description) {
      case "clear sky":
        return t("weather.clearSky");
      case "few clouds":
        return t("weather.fewClouds");
      case "scattered clouds":
        return t("weather.scatteredClouds");
      case "broken clouds":
        return t("weather.brokenClouds");
      case "shower rain":
        return t("weather.showerRain");
      case "rain":
        return t("weather.rain");
      case "thunderstorm":
        return t("weather.thunderstorm");
      case "snow":
        return t("weather.snow");
      case "mist":
        return t("weather.mist");
      default:
        return description;
    }
  }
  return (
    <div className="flex items-center justify-between flex-col md:flex-row mt-12 md:mt-0">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-max">
          <h1 className="lg:text-[32px] text-xl font-bold lg:leading-[50px] w-max">
            {weatherData?.main.temp.toFixed(2) || 25}
          </h1>
          <span className="absolute top-0 right-[-20px]">°C</span>
        </div>
        <h2 className="lg:text-base text-sm">
          {translateDescription(weatherData?.weather[0].description)}
        </h2>
      </div>
      <img src={icon || clear} className="w-20 h-auto" />
      <div className="flex flex-col items-center md:items-start">
        <h1 className="lg:text-4xl lg:font-semibold">Hue, VietNam</h1>
        <h2 className="text-sm ">{date}</h2>
      </div>
    </div>
  );
};
