import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./PanelItem.module.scss";
import background from "../../../../assets/TableLayout/forest.jpg";

const PanelItem = ({ name }) => {
  return (
    <div className={classes.table}>
      <NavLink to={`/Table/${name}`}>
        <img
          src={background}
          alt="background"
          className={classes["table-img"]}
        />
      </NavLink>
      <p className={classes.description}>{name}</p>
    </div>
  );
};

export default PanelItem;
