import React from "react";
import Img from "./img/5.jpg";

const fondo = {
  background: url("./img/5.jpg")
};
function Background() {
  return <div className={{ fondo }}></div>;
}

export default Background;
