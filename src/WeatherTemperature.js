import React from "react";

export default function WeatherTemperature(props) {
  return (
      <div>
        <div>
          <div>
            <h2 className="d-inline">{Math.round(props.celsius)}º</h2>{" "}
            <span>C</span>
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
      </div> );
}