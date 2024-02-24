import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero p-5 mb-4 " style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;

