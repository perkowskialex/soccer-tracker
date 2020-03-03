import React from "react";
import "./TeamCard.css";

const TeamCard = props => {
  console.log("team card props", props);
  return (
    <div className="card-container">
      {" "}
      <img
        className="image"
        src={`https://media.api-sports.io/teams/${props.team.team_id}.png`}
        alt="Team Logo"
      />
      <h2>{props.team.name}</h2>
      <p>Est. {props.team.founded}</p>
      <p>{props.team.venue_name}</p>
    </div>
  );
};

export default TeamCard;
