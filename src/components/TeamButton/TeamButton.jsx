import React from "react";
import { Link } from "react-router-dom";

import "./TeamButton.css";

const TeamButton = props => {
  return (
    <Link to={`/pl/${props.team.team_id}`}>
      <button>View {props.team.name}</button>
    </Link>
  );
};

export default TeamButton;
