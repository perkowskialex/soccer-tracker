import React from "react";
import TeamCard from "../../components/TeamCard/TeamCard";

const TeamPage = props => {
  console.log("team page", props);
  return <TeamCard team={props.team} />;
};

export default TeamPage;
