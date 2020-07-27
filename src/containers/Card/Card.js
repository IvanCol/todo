import React, { Component } from "react";
import classes from "./Card.module.scss";
import TaskTable from "../../components/TaskTable/TaskTable";

export default class Card extends Component {
  state = {
    tables: [
      {
        header: "Today",
        tasks: [
          { id: 1, text: "Learn Statistical analysis!" },
          { id: 2, text: "Plant the potato!" },
          { id: 3, text: "Run the bot!" },
        ],
      },
      {
        header: "Tomorrow",
        tasks: [
          { id: 1, text: "Learn React Hooks" },
          { id: 2, text: "Plant the tomato!" },
          { id: 3, text: "Refactor the bot!" },
        ],
      },
    ],
  };

  render() {
    return (
      <div className={classes.Card}>
        {this.state.tables.map((item, index) => {
          return (
            <TaskTable key={index} header={item.header} tasks={item.tasks} />
          );
        })}
      </div>
    );
  }
}
