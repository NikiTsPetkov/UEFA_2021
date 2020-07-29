import React from "react";
import Zoom from "react-reveal/Zoom";
import Team from "./Team";

const Groups = ({ data }) => {
  return data.map(team => {
    return (
      <Zoom>
        <div className="groups">
          <h4>Група {team[0]}</h4>
          <Team teams={team[1].teams} />
        </div>
      </Zoom>
    );
  });
};

export default Groups;
