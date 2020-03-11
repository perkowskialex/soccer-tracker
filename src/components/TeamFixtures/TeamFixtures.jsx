import React from "react";
import FixtureList from "../FixtureList/FixtureList";
import Loading from "../Loading/Loading";

import "./TeamFixtures.css";

export default class TeamFixtures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      isLoaded: false
    };
    fetch(
      `https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${props.team.team_id}/next/10`,
      {
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "8b54882d16msh91800fa15b1c3cep15cb26jsna5a0b982eaa6"
        }
      }
    )
      .then(res => {
        return res.json().then(data => {
          // gets {api}
          return data;
        });
      })
      .then(data => {
        this.setState({ fixtures: data.api.fixtures, isLoaded: true });
      });
  }

  render() {
    return this.state.isLoaded ? (
      <div>
        <FixtureList fixtures={this.state.fixtures} />
      </div>
    ) : (
      <Loading />
    );
  }
}
