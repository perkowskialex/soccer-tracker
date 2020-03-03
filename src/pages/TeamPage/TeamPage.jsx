import React from "react";
import TeamCard from "../../components/TeamCard/TeamCard";

const TeamPage = props => {
  let team = props.location.state;
  return <TeamCard team={team} />;
};

export default TeamPage;
