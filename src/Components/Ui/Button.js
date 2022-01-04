import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.buttonBar} type={props.type} id={props.id}>
      {props.content}
    </button>
  );
};
export default Button;
