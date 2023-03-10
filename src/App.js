import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <h1>Weather App</h1> */}
        <Weather defaultCity="Vancouver" />
        <footer>
          {" "}
          This project was coded by Ana Franco and it is{" "}
          <a
            href="https://github.com/anamspe/react-temp-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
