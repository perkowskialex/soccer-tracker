import React from "react";

import FixtureCard from "../FixtureCard/FixtureCard";
import "./FixtureList.css";

const FixtureList = props => {
  console.log("fixture list props", props);
  return (
    <div className="card-list">
      {props.fixtures.map(f => (
        <FixtureCard key={f.fixture_id} f={f} />
      ))}
    </div>
  );
};

export default FixtureList;
