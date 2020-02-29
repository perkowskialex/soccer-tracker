import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import PremierLeague from "./pages/PremierLeague/PremierLeague";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import UpcomingFixtures from "./components/UpcomingFixtures/UpcomingFixtures";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/pl/fixtures">
          <UpcomingFixtures />
        </Route>
        <Route path="/pl">
          <PremierLeague />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
