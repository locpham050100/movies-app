import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Logo from "./img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <img alt="" className="header__icon" src={Logo} />
            <span className="header__name">Wayflix</span>
          </div>
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
