import React from "react";
import Moment from "react-moment";
import "moment-timezone";

import "./FixtureCard.css";

export const FixtureCard = props => {
  const date = props.f.event_date;
  console.log("fixture card", props);
  return (
    <div className="fixture-card-container">
      <h2>
        &nbsp;
        <Moment format="LL">{date}</Moment>
      </h2>
      <div className="league-container">
        <img
          className="league-image"
          src={`${props.f.league.logo}`}
          alt="League Logo"
        />
      </div>
      <div className="images-container">
        <img src={`${props.f.homeTeam.logo}`} alt="Home Team Logo" />
        <img src={`${props.f.awayTeam.logo}`} alt="Away Team Logo" />
      </div>
      <span>
        <h2>{props.f.homeTeam.team_name}</h2> <p>vs</p>{" "}
        <h2>{props.f.awayTeam.team_name}</h2>
      </span>
      <h4>Location: {props.f.venue}</h4>
    </div>
  );
};

export default FixtureCard;
