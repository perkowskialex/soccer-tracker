import React from "react";
import SearchBox from "../SearchBox/SearchBox";

class UpcomingFixtures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      searchField: ""
    };
  }
  componentDidMount() {
    console.log("Mount Upcoming Fixtures");
    fetch(
      "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/next/10?timezone=Europe%252FLondon",
      {
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "ffc04b5815mshc0cd65f93188805p1a1234jsnc8f5c54fcef3"
        }
      }
    )
      .then(res => {
        return res.json().then(data => {
          // gets {api}
          console.log(data);
          return data;
        });
      })
      .then(data => {
        this.setState({ fixtures: data.api.results.fixtures });
        console.log(this.state.fixtures);
      });
  }

  render() {
    return <SearchBox />;
  }
}

export default UpcomingFixtures;
