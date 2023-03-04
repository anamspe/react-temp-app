import React from "react";

export default function FormattedDate(props) {
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = weekdays[props.date.getDay()];
  let currentMonth = months[props.date.getMonth()];
  let date = props.date.getDate();
  return (
    <div>
      {day}, {currentMonth} {date}
    </div>
  );
}
