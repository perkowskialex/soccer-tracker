import React from "react";
import "./TeamCard.css";
import TeamFixtures from "../TeamFixtures/TeamFixtures";

const TeamCard = props => {
  console.log("team card props", props);
  // const teamId = props.team.team_id;
  return (
    <div className="team-card-container">
      {" "}
      <img
        className="image"
        src={`https://media.api-sports.io/teams/${props.team.team_id}.png`}
        alt="Team Logo"
      />
      <h1>{props.team.name}</h1>
      <p>Est. {props.team.founded}</p>
      <p>{props.team.venue_name}</p>
      <p>
        Location: {props.team.venue_address}, {props.team.venue_city}
      </p>
      <div>
        <h2>{props.team.name}'s upcoming fixtures:</h2>
        <TeamFixtures team={props.team} />
      </div>
    </div>
  );
};

export default TeamCard;
