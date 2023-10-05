import React,{useState} from "react";
import UnitsConversion from "./UnitsConversion";
import WeatherIcon from"./WeatherIcon";
import Time from "./Time";
import axios from "axios";
import "./styles.css";

export default function Weather(props){
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });

  function showWeather(response){
    setWeather({
      entry: response.data.name,
      ready: true,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coords: response.data.coord,
    });
  }
  function search(){
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);

  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleChange(event){
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="container ">
        <form onSubmit={handleSubmit} className="text-center mt-1 mb-4">
          <input
            type="search"
            placeholder="Enter City"
            autoComplete="off"
            autoFocus="on"
            onChange={handleChange}
            className="col-6"
          />
          <input type="submit" value="Search" className="col-2" />
          <input type="submit" value="Current Location" className="col-4" />
        </form>
        <hr />
        

        <div className="row align-items-start ">
          <div className="col-4 ">
            <div className="icon mb-2">
            <WeatherIcon code={weather.icon}  />
          
</div>
            <p className="temperature-today">
              <UnitsConversion temp={weather.temperature} />
            </p>

            <p className="typeofday">
              <strong>{weather.description}</strong>
            </p>
          </div>
          <div className="col-4">
            <p className="update">Last Updated:</p>
            <hr />
            <p className="day-today">
              <Time date ={weather.date}/>
            </p>
            <hr />
          </div>
          <div className="col-4">
            <p className="location">
              <strong>{weather.entry}</strong>
            </p>
            <p className="humidity">
              {" "}
              Humidity: {weather.humidity}%
              <br />
              Wind:{Math.round(weather.wind)}km/h
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading";
  }
  }
