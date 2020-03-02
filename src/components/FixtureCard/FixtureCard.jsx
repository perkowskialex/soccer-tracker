import React from "react";

import "./FixtureCard.css";

export const FixtureCard = props => {
  console.log("fixture card", props);
  return (
    <div className="card-container">
      <div className="images-container">
        <img src={`${props.f.homeTeam.logo}`} alt="Home Team Logo" />
        <img src={`${props.f.awayTeam.logo}`} alt="Away Team Logo" />
      </div>
      <h2>
        {props.f.homeTeam.team_name} v. {props.f.awayTeam.team_name}
      </h2>
    </div>
  );
};

export default FixtureCard;
