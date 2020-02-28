import React from "react";
import { ReactComponent } from "*.svg";

export default class PremierLeague extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      teams: []
    };
  }

  componentDidMount() {
    fetch("https://api-football-v1.p.rapidapi.com/v2/teams/league/1", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "ffc04b5815mshc0cd65f93188805p1a1234jsnc8f5c54fcef3"
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
