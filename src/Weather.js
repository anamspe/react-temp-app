import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,

      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      max_temp: response.data.main.temp_max,
      min_temp: response.data.main.temp_min,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,

      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }

  
  function search() {
    const apiKey = "6914b599dae34153d2187249330170b1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <form className="formControl" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search"
                onChange={handleChange}
              />
              <input type="submit" value="🔍" className="btn" />
            </form>{" "}
          </div>
          <div className="col-6">
            <a href="/" className="d-flex justify-content-end">
              {" "}
              🏠{" "}
            </a>
          </div>

          <WeatherInfo data={weather} />
          <WeatherForecast coordinates={weather.coordinates} />
        </div>{" "}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
