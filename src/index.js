import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import"./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="weather" >
      <Weather defaultCity="Munich" />
      <footer>
        {" "}
        <a href="https://github.com/Isapedro/create-react-weather/commit/d6138acc666e6035db69d3e682e0b6e9e0107b91" target="_blank" rel="noreferrer" className="github">Open-sourced</a> {""}
        coded by <a href="www.linkedin.com/in/isa-pedro92" target="_blank" rel="noreferrer">Anaisa Pedro</a>
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
