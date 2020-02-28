import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = props => {
  return (
    <div className="card-list">
      {props.teams.map(team => (
        <Card key={team.id} team={team} />
      ))}
    </div>
  );
};

export default CardList;
