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
      <span>
        <h2>{props.f.homeTeam.team_name}</h2> <p>vs</p>{" "}
        <h2>{props.f.awayTeam.team_name}</h2>
      </span>
      <h4>Event Date and Time: {props.f.event_date}</h4>
      <h4>Location: {props.f.venue}</h4>
    </div>
  );
};

export default FixtureCard;
