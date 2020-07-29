import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Main from "./Main";
import TeamProfile from "./TeamProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Heading />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:id" component={TeamProfile} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
