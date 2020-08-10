import React from "react";
import classes from "./Information.module.scss";

const Information = () => {
  return (
    <div className={classes.infopanel}>
      <div className={classes.container}>
        <h1>TODO App</h1>
        <section className={classes.description}>
          <p>React app with hooks</p>
        </section>
        <section className={classes.author}>
          <p>Author: Ivan Kolesnikov</p>
        </section>
      </div>
    </div>
  );
};

export default Information;
