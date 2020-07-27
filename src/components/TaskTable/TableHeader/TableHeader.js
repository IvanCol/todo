import React from "react";
import classes from "./TableHeader.module.scss";

const TaskHeader = (props) => {
  return <h1 className={classes.TableHeader}>{props.header}</h1>;
};

export default TaskHeader;
