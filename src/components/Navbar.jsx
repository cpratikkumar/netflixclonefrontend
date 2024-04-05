import React, { useEffect, useRef, useState } from "react";
import brandicon from "../assets/logo.png";
import searchicon from "../assets/search.png";
import powericon from "../assets/power.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar({ changeNavColor }) {
  const [showSearch, setShowSearch] = useState(false);
  const reference = useRef(null);
  const openSearchBar = () => {
    setShowSearch(true);
  };
  const closeSearchBar = () => {
    setShowSearch(false);
  };

  return (
    <nav className={!changeNavColor ? "transparent" : "dark"}>
      <div className="left-navbar-div">
        <img src={brandicon} alt="Brand-icon" />

        <div className="navigation-link">
          <Link>Home</Link>
          <Link>TV Shows</Link>
          <Link>Movies</Link>
          <Link>My List</Link>
        </div>
      </div>
      <div className="right-navbar-div">
        <span>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className={showSearch ? "search-input-show" : "search-input"}
            ref={reference}
            autoComplete="off"
          />
          {showSearch ? (
            <img src={searchicon} alt="search-icon" className="movingSearch" />
          ) : (
            <img src={searchicon} alt="search-icon" onClick={openSearchBar} />
          )}
        </span>
        <img src={powericon} alt="power-icon" className="power-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
