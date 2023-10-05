import React, { useState, useEffect } from "react";
import "./weatherforecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(()=>{
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="WeatherForecast">
        <hr />
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 6){
          return (
            <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
          );
          } else { return null;
          }
        })}
          
        </div>
      </div>
    );
  } else {
    let apiKey = "6782253072f7d90462731a624097fc54";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
