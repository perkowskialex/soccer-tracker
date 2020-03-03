import React from "react";
import { Link } from "react-router-dom";

import "./TeamButton.css";

const TeamButton = props => {
  return (
    <Link to={{ pathname: `/pl/${props.team.team_id}`, state: { props } }}>
      <button>View {props.team.name}</button>
    </Link>
  );
};

export default TeamButton;
