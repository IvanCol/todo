import React from "react";
import TaskItem from "./TaskItem/TaskItem";
import classes from "./TaskList.module.scss";

const TaskList = (props) => {
  return (
    <ul className={classes.TaskList}>
      {props.tasks.map((item, index) => {
        return <TaskItem key={index} text={item.text} />;
      })}
    </ul>
  );
};

export default TaskList;
