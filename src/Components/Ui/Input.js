import React, { Fragment } from "react";
const Input = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.id}>
        {props.labelName} {"      "}
      </label>
      <input
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
