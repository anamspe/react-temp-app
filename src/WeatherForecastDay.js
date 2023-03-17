import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  
 function max() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
 }

 function min() {
   let temperature = Math.round(props.data.temp.min);
   return `${temperature}º`;
 }

 function day() {
   let date = new Date(props.data.dt * 1000);
   let day = date.getDay();

   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

   return days[day];
 }

return (
    <div>
      <div>{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div>
        <span className="Forecast-min">{min()}</span>{" "}
        <span className="Forecast-max">{max()}</span>
      </div>
    </div>
  );
}
