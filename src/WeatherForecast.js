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
function load(){
let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
let latitude = props.coordinates.lat;
let longitude = props.coordinates.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

}




  if (ready) {
    return (
      <div className="WeatherForecast">
        <hr />
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 6){
          return (
            <div className= "col" key={index}>
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
    load();
    
    return null;
    ;
  }
}
