import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import PremierLeague from "./pages/PremierLeague/PremierLeague";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl\">
        <Header />
        <Switch>
          <Route
            path="/pl/:team"
            render={props => <TeamPage {...props} />}
          ></Route>
          <Route path="/pl">
            <PremierLeague />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
