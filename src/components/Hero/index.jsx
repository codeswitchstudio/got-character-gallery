import React from "react";
import "./index.css";

function Hero(props) {
  return (
    <div className="hero p-5  " style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;

