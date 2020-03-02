import React from "react";

import "./FixtureCard.css";

export const FixtureCard = props => {
  console.log("fixture card", props);
  return (
    <div className="card-container">
      <h2>
        {props.f.homeTeam.team_name} v. {props.f.awayTeam.team_name}
      </h2>
    </div>
  );
};

export default FixtureCard;
