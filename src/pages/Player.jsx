import React from "react";
import leftarrow from "../assets/left-arrow.png";
import strangerthings from "../assets/Stranger-Things.mp4";
import "../styles/Player.css";
import { useNavigate } from "react-router-dom";

function Player() {
  const navigate = useNavigate();
  return (
    <div className="video">
      <img
        src={leftarrow}
        alt="leftarrow"
        onClick={() => {
          navigate(-1);
        }}
      />
      <video src={strangerthings} controls autoPlay loop />
    </div>
  );
}

export default Player;
