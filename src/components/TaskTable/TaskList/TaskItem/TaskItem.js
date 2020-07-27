import React from "react";
import classes from "./TaskItem.module.scss";

const TaskItem = (props) => {
  return <li className={classes.TaskItem}>{props.text}</li>;
};

export default TaskItem;
