import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import FixtureList from "../FixtureList/FixtureList";
import Loading from "../Loading/Loading";

import "./UpcomingFixtures.css";

class UpcomingFixtures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      searchField: "",
      isLoaded: false
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    console.log("Mount Upcoming Fixtures");
    // premier league fixture
    fetch(
      "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/next/50",
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
    const { searchField, fixtures } = this.state;
    const filteredFixtures = fixtures.filter(
      fixture =>
        fixture.awayTeam.team_name
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        fixture.homeTeam.team_name
          .toLowerCase()
          .includes(searchField.toLowerCase())
    );
    return (
      <div>
        <br />
        {/* TO DO  */}
        <SearchBox
          handleChange={this.handleChange}
          placeholder="search upcoming fixtures"
        />
        {/* make sure data is there */}
        {this.state.isLoaded ? (
          <div>
            <h1>Upcoming {this.state.fixtures[0].league.name} Fixtures</h1>
            <FixtureList
              isLoaded={this.state.isLoaded}
              fixtures={filteredFixtures}
            />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default UpcomingFixtures;
