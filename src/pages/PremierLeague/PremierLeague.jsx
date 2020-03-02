import React from "react";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";

import "./PremierLeague.css";

export default class PremierLeague extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      teams: [],
      searchField: ""
    };
  }

  //search comp func
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    //fetch Premier League
    fetch("https://api-football-v1.p.rapidapi.com/v2/teams/league/2", {
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "ffc04b5815mshc0cd65f93188805p1a1234jsnc8f5c54fcef3"
      }
    })
      .then(res => {
        return res.json().then(data => {
          // gets {api}
          console.log(data);
          return data;
        });
      })
      .then(data => {
        this.setState({ teams: data.api.teams });
        console.log(this.state.teams);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { teams, searchField } = this.state;
    // sort function
    let teamsSorted = teams.slice(0);
    teamsSorted.sort(function(a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    console.log("teams sort", teamsSorted);
    const filteredTeams = teamsSorted.filter(team =>
      // case insensitive
      team.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="teams-container">
        <h1>Premier League Teams</h1>
        <SearchBox
          // search info
          placeholder={`Search Premier League teams`}
          handleChange={this.handleChange}
        />
        <CardList teams={filteredTeams} />
      </div>
    );
  }
}
