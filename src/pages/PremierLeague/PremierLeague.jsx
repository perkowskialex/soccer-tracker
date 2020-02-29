import React from "react";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";

export default class PremierLeague extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      teams: [],
      searchField: ""
    };
  }

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
    const filteredTeams = teams.filter(team =>
      // case insensitive
      team.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="teams-container">
        <h1>Premier League Teams</h1>
        <SearchBox
          placeholder={`Search Premier League teams`}
          handleChange={this.handleChange}
        />
        <CardList teams={filteredTeams} />
      </div>
    );
  }
}
