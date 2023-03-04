import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,

      iconUrl: "https://cdn-icons-png.flaticon.com/512/7084/7084486.png",
      date: "Tue, Feb 28",
      time: "4:00 pm",

      temperature: response.data.main.temp,
      max_temp: response.data.main.temp_max,
      min_temp: response.data.main.temp_min,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,

      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <form className="formControl">
              <input type="search" placeholder="Search" />
              <input type="submit" value="🔍" className="btn" />
            </form>
          </div>
          <div className="col-6">
            <a href="/" className="d-flex justify-content-end">
              {" "}
              🏠{" "}
            </a>
          </div>
          <div className="row mt-3">
            <div className="col-6">{weather.date}</div>
            <div className="col-6">{weather.time}</div>
          </div>
        </div>
        <div className="currentWeatherCard mt-4">
          <h1>
            {" "}
            📍 {weather.city}, {weather.country}
          </h1>
          <img src={weather.iconUrl} alt={weather.description} />
          <p className="text-capitalize">{weather.description}</p>
          <h2>{Math.round(weather.temperature)}ºC</h2>
          <small>
            ({Math.round(weather.min_temp)}ºC ↔ {Math.round(weather.max_temp)}
            ºC)
          </small>
        </div>
        <div className="row attributes">
          <div className="col-4 windControl">
            <p>🍃 Wind: {Math.round(weather.wind)}km/h </p>
          </div>
          <div className="col-4 humControl">
            <p>💦 Humidity: {weather.humidity}% </p>
          </div>
          <div className="col-4 preControl">
            <p>💨 Feels like: {Math.round(weather.feel)}ºC </p>
          </div>
          <div className="row">
            <div className="col-6">🌞 06:54 am</div>
            <div className="col-6">🌙 5:53 pm</div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6914b599dae34153d2187249330170b1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
