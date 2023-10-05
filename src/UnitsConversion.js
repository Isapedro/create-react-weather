import React, { useState } from "react";


export default function TemperatureConversion(props) {
  let [unit, setUnit] = useState("celsius");

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
      <span className="temperatureConversion">
        <span className="temp">{Math.round(props.temp)}</span>
        <span className="celsius">°C |</span>
        <span className="fahrenheit">
          <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.temp * 9) / 5 + 32;
    return (
      <span className="temperatureConversion">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="celsius">
          {" "}
          <a href="/" className="text-decoration-none" onClick={showCelsius}>
            °C
          </a>{" "}
          |
        </span>
        <span className="fahrenheit">°F</span>
      </span>
    );
  }
}
