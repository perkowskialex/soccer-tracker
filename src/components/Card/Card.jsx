import React from "react";

import "./Card.css";

export const Card = props => {
  // bring in team logo
  <img
    src={`https://media.api-sports.io/teams/${props.team}.png`}
    alt="Team Logo"
  />;
};
