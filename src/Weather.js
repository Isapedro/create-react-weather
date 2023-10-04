import React,{useState} from "react";
import UnitsConversion from "./UnitsConversion";
import Time from "./Time";
import axios from "axios";
import "./styles.css";

export default function Weather(props){
  let [city, setCity] = useState(props.defaultCity);
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState("");

  function showWeather(response){
    setLoaded(true);
    setWeather({
      entry:response.data.name,
      description:response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity:response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      coords:response.data.coord,
    });
  }
  function search(){
    let apiKey = "1a1cbe70f173d7353e1863e8e9d29275";
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
  if (loaded){
    return (
      <div className="container ">
        <form onSubmit={handleSubmit} className="text-center mt-1 mb-4">
          <input
            type="search"
            placeholder="Enter City"
            autoComplete="off"
            onChange={handleChange}
          />
          <input type="submit" value="Search" />
        </form> 
        <hr />
<br/>
       
        <div className="row align-items-start ">
          <div className="col-4 ">
            
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="rain-day"
              id="icon"
              width="130"
              className="icon"
            />

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
              <Time />
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
