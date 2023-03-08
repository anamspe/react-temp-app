import React from "react";

export default function WeatherIcon(props) {
  let icon = `/images/${props.code}.svg`;
  return <img src={icon} alt="cloudy" />;
}
