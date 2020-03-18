import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="./assets/Soccer_monogram_frame-02.svg" alt="Logo" />
      </div>
      <div className="title container">
        <h1>Soccer Tracker (Corona Virus)</h1>
      </div>
      <div className="options-container">
        <Link className="option-link" to="/">
          Home
        </Link>
        <Link className="option-link" to="/pl">
          Premier League
        </Link>
      </div>
    </div>
  );
};

export default Header;
