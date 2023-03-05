import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <div>
          <div>
            <h2 className="d-inline">{Math.round(props.celsius)}º</h2>{" "}
            <span>
              C |{" "}
              <a href="/" onClick={showFahrenheit}>
                F
              </a>
            </span>
          </div>
          <small>
            ({Math.round(props.min)}ºC ↔ {Math.round(props.max)}
            ºC)
          </small>
        </div>
        <div className="row attributes">
          <div className="col-4 windControl">
            <p>🍃 Wind: {Math.round(props.wind)}km/h </p>
          </div>
          <div className="col-4 humControl">
            <p>💦 Humidity: {props.humidity}% </p>
          </div>
          <div className="col-4 preControl">
            <p>💨 Feels like: {Math.round(props.feel)}ºC </p>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    let fahrenheitMin = (props.min * 9) / 5 + 32;
    let fahrenheitMax = (props.max * 9) / 5 + 32;
    let fahrenheitFeel = (props.feel * 9) / 5 + 32;
    return (
      <div>
        <div>
          <div>
            <h2 className="d-inline">{Math.round(fahrenheitTemp)}º</h2>{" "}
            <span>
              <a href="/" onClick={showCelsius}>
                {" "}
                C{" "}
              </a>
              | F
            </span>
          </div>
          <small>
            ({Math.round(fahrenheitMin)}ºF ↔ {Math.round(fahrenheitMax)}
            ºF)
          </small>
        </div>
        <div className="row attributes">
          <div className="col-4 windControl">
            <p>🍃 Wind: {Math.round(props.wind)}km/h </p>
          </div>
          <div className="col-4 humControl">
            <p>💦 Humidity: {props.humidity}% </p>
          </div>
          <div className="col-4 preControl">
            <p>💨 Feels like: {Math.round(fahrenheitFeel)}ºF </p>
          </div>
        </div>
      </div>
    );
  }
}
