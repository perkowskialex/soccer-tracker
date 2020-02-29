import React from "react";
import TeamButton from "../TeamButton/TeamButton";

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
      <p>Est. {props.team.founded}</p>
      <p>{props.team.venue_name}</p>
      <TeamButton team={props.team.name} />
    </div>
  );
};

export default Card;
