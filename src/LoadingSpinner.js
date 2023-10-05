import React from "react";
import { Circles } from "react-loader-spinner";
export default function LoadingSpinner(){

return (
  <Circles
    height="300"
    width="100%"
    color="#57385c"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);}