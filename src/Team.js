import React from "react";
import { Link, Route } from "react-router-dom";

import TeamProfile from "./TeamProfile";
import { changeName } from "./rename";
const Team = ({ teams }) => {
  return teams.map(team => {
    return (
      <Link className="link" to={`/${team}`}>
        <div className="country">
          <span>
            <img
              className="flag"
              src={`../assets/${changeName(team)}.png`}
              alt="Unknown"
            />
          </span>
          <Route path={`/${team}`} component={TeamProfile} />
          <span>{team}</span>
        </div>
      </Link>
    );
  });
};

export default Team;
