import React from "react";
import "./TeamCard.css";
import TeamFixtures from "../TeamFixtures/TeamFixtures";

class TeamCard extends React.Component {
  constructor(props) {
    super(props);
    console.log("team card props", props);
    this.state = {
      coach: ""
    };
    fetch(
      `https://api-football-v1.p.rapidapi.com/v2/coachs/team/${this.props.team.team_id}`,
      {
        method: "GET",
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
        this.setState({ coach: data.api.coachs[0] });
        console.log(this.state.coach);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // const teamId = props.team.team_id;
  render() {
    return (
      <div className="team-card-container">
        {" "}
        <img
          className="image"
          src={`https://media.api-sports.io/teams/${this.props.team.team_id}.png`}
          alt="Team Logo"
        />
        <h1>{this.props.team.name}</h1>
        <h2>Manager: {this.state.coach.name}</h2>
        <p>Est. {this.props.team.founded}</p>
        <p>{this.props.team.venue_name}</p>
        <p>
          Location: {this.props.team.venue_address},{" "}
          {this.props.team.venue_city}
        </p>
        <div>
          <h2>{this.props.team.name}'s upcoming fixtures:</h2>
          <TeamFixtures team={this.props.team} />
        </div>
      </div>
    );
  }
}

export default TeamCard;
