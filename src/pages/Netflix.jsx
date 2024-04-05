import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Netflix.css";
import movieimage from "../assets/homeTitle.webp";
import playicon from "../assets/play.png";
import infoicon from "../assets/info.png";
import { useNavigate } from "react-router-dom";
function Netflix() {
  const [changeNavColor, setChangeNavColor] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setChangeNavColor(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="netflix-section">
      <Navbar changeNavColor={changeNavColor} />
      <div className="landing-screen">
        <img src={movieimage} alt="movie-img" />
        <div className="landing-screen-button">
          <button
            className="button1"
            onClick={() => {
              navigate("/player");
            }}
          >
            <img src={playicon} alt="play" />
            Play
          </button>

          <button
            className="button2"
            onClick={() => {
              navigate("/player");
            }}
          >
            <img src={infoicon} alt="info" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Netflix;
