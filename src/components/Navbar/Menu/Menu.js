import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import home from "../../../assets/Navbar/home.svg";
import info from "../../../assets/Navbar/info.svg";
import classes from "./Menu.module.scss";

const Menu = () => {
  const params = [
    { img: home, link: "/" },
    { img: info, link: "/info" },
  ];
  return (
    <ul className={classes.menu}>
      {params.map((param, index) => {
        return (
          <MenuItem
            key={`menuitem${index}`}
            icon={param.img}
            link={param.link}
          />
        );
      })}
    </ul>
  );
};

export default Menu;
