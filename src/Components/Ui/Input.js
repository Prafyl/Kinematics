import React, { Fragment } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.labelName}</label>
      <input
        placeholder={props.bgText}
        className={classes.inputBar}
        id={props.id}
        onChange={props.onInput}
        type={props.type}
        min={props.min}
        max={props.max}
      ></input>
    </Fragment>
  );
};
export default Input;
