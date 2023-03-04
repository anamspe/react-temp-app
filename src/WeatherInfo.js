import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import FormattedSunrise from "./FormattedSunrise";
import FormattedSunset from "./FormattedSunset";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="col-6">
          <FormattedTime time={props.data.time} />
        </div>
      </div>
      <div className="currentWeatherCard mt-4">
        <h1>
          {" "}
          📍 {props.data.city}, {props.data.country}
        </h1>
        <img src={props.data.iconUrl} alt={props.data.description} />
        <p className="text-capitalize">{props.data.description}</p>
        <h2>{Math.round(props.data.temperature)}ºC</h2>
        <small>
          ({Math.round(props.data.min_temp)}ºC ↔{" "}
          {Math.round(props.data.max_temp)}
          ºC)
        </small>
      </div>
      <div className="row attributes">
        <div className="col-4 windControl">
          <p>🍃 Wind: {Math.round(props.data.wind)}km/h </p>
        </div>
        <div className="col-4 humControl">
          <p>💦 Humidity: {props.data.humidity}% </p>
        </div>
        <div className="col-4 preControl">
          <p>💨 Feels like: {Math.round(props.data.feel)}ºC </p>
        </div>
        <div className="row">
          <div className="col-6">
            🌞 <FormattedSunrise time={props.data.sunrise} />
          </div>
          <div className="col-6">
            🌙 <FormattedSunset time={props.data.sunset} />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
