import React from "react";
import TeamCard from "../../components/TeamCard/TeamCard";

class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {}
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return <TeamCard team={this.state.team} />;
  }
}

export default TeamPage;
