import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu/Menu";
import classes from "./Navbar.module.scss";
import logo from "../../assets/Navbar/logo.svg";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <Menu />
        <div className={classes.navbar__logo}>
          <img className={classes["navbar__logo-img"]} src={logo} alt="home" />
        </div>
        <button className={classes.navbar__btn}>
          <NavLink to="/auth" className={classes["navbar__btn-link"]}>
            Sign in
          </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
