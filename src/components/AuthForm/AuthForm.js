import React from "react";
import classes from "./AuthForm.module.scss";
import eskimo from "../../assets/Auth/eskimo.svg";

const AuthForm = () => {
  const htmlFor = `text-${Math.random}`;
  return (
    <div className={classes.auth}>
      <img className={classes.auth__image} src={eskimo} alt="User" />
      <form className={classes.auth__form}>
        <div className={classes.auth__form__item}>
          <label
            htmlFor={htmlFor}
            className={classes["auth__form__item-label"]}
          >
            Login: &nbsp;
          </label>
          <input type="text" className={classes["auth__form__item-input"]} />
        </div>
        <div className={classes.auth__form__item}>
          <label
            htmlFor={htmlFor}
            className={classes["auth__form__item-label"]}
          >
            Password:&nbsp;
          </label>
          <input type="text" className={classes["auth__form__item-input"]} />
        </div>
        <button>LogIn</button>
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default AuthForm;
