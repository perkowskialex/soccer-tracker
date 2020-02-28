import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">Logo</div>
      <div className="options-container">
        <div className="option-link">Home Page</div>
        <div className="option-link">Premier League</div>
      </div>
    </div>
  );
};

export default Header;
