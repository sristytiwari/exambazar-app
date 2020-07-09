import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./screens/landing-page";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Question from "./screens/question";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/question/:id" render={props => <Question {...props} />} />
          
      </Switch>
    </Router>
  );
}

export default App;
