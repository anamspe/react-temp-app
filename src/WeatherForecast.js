import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `50fa4024e3b1d5eac2f51ab18a47e997`;
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Thu</div>
          <div className="Forecast-icon">
            <WeatherIcon code="01d" />
          </div>
          <div>
            <span className="Forecast-min">10º</span>{" "}
            <span className="Forecast-max">19º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
