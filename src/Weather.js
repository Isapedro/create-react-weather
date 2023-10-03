import React from "react";
import axios from "axios";
import ClipLoader from "react-spinners/PropagateLoader";

export default function Weather(props) {

  function handleResponse(response){
    alert(`The weather in  ${response.data.name} is ${response.data.main.temp}ºC`)
  }
  let apiKey = "1a1cbe70f173d7353e1863e8e9d29275";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <ClipLoader
      color="blue"
      loading="true"
      cssOverride=""
      size={40}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
