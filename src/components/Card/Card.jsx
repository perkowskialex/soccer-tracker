import React from "react";

import "./Card.css";

export const Card = props => {
  // bring in team logo
  return (
    <div className="card-container">
      <img
        className="image"
        src={`https://media.api-sports.io/teams/${props.team.team_id}.png`}
        alt="Team Logo"
      />
      <h2>{props.team.name}</h2>
      <p>{props.team.venue_name}</p>
    </div>
  );
};

export default Card;
