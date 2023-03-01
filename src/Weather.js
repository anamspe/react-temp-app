import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <div className="col-6">Tue, Feb 28</div>
          <div className="col-6">4:00 pm</div>
        </div> 
      </div>
      <div className="currentWeatherCard mt-4">
        <h1> 📍 Vancouver, BC, Canada</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7084/7084486.png"
          alt="Cloudy"
        />
        <p>Cloudy</p>
        <h2>2ºC</h2>
        <small>(-2ºC --- 3ºC)</small>
      </div>
      <div className="row attributes">
        <div className="col-4 windControl">
          <p>🍃 Wind: 5km/h </p>
        </div>
        <div className="col-4 humControl">
          <p>💦 Humidity: 77% </p>
        </div>
        <div className="col-4 preControl">
          <p>☔ Precipitation: 10% </p>
        </div>
        <div className="row">
          <div className="col-6">🌞 06:54 am</div>
          <div className="col-6">🌙 5:53 pm</div>
        </div>
      </div>
    </div>
  );
}
