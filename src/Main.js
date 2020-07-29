import React, { Component } from "react";
import Groups from "./Groups";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      groupA: ["A", { teams: ["Турция", "Италия", "Уелс", "Швейцария"] }],
      groupB: ["B", { teams: ["Дания", "Финландия", "Белгия", "Русия"] }],
      groupC: ["C", { teams: ["Нидерландия", "Украйна", "Австрия", " "] }],
      groupD: ["D", { teams: ["Англия", "Хърватска", " ", "Чехия"] }],
      groupE: ["E", { teams: ["Испания", "Швеция", "Полша", " "] }],
      groupF: ["F", { teams: [" ", "Португалия", "Франция", "Германия"] }]
    };
  }

  render() {
    const groups = Object.keys(this.state).map(key => {
      return this.state[key];
    });
    return (
      <main>
        <h3>Изберете отбор, за да разберете подробности...</h3>
        <div className="group">{<Groups data={groups} />}</div>
      </main>
    );
  }
}

export default Main;
