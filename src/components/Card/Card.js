import React from "react";
import classes from "./Card.module.scss";

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.container}>
        <h3>Python</h3>
        <ul className={classes.card__list}>
          <li className={classes["card__list-item"]}>Data Analysis</li>
          <li className={classes["card__list-item"]}>Machine Learning</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
