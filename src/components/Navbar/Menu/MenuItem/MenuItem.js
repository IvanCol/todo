import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MenuItem.module.scss";

const MenuItem = ({ icon, link }) => {
  return (
    <li>
      <NavLink to={link} className={classes.menuitem}>
        <img className={classes["menuitem-img"]} src={icon} alt="home" />
      </NavLink>
    </li>
  );
};

export default MenuItem;
