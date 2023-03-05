import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import FormattedSunrise from "./FormattedSunrise";
import FormattedSunset from "./FormattedSunset";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <WeatherIcon code={props.data.icon} />
        {/* <img src={props.data.iconUrl} alt={props.data.description} /> */}
        <p className="text-capitalize">{props.data.description}</p>
        <WeatherTemperature
          celsius={props.data.temperature}
          min={props.data.min_temp}
          max={props.data.max_temp}
          feel={props.data.feel}
          wind={props.data.wind}
          humidity={props.data.humidity}
        />
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
