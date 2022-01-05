import React from "react";

import classes from "./Curve.module.css";

const Curve = (props) => {
  const range = props.numbers["range"];
  const height = props.numbers["height"];

  console.log(range, height);
  const quadraticGraph = `M 0 150 Q ${range / 2} ${
    150 - 2 * height
  } ${range} ${150}`;

  return (
    <div className={classes.borderBox}>
      <svg width="100%" height="150">
        <path d={quadraticGraph} stroke="blue" fill="none" />
      </svg>
    </div>
  );
};
export default Curve;
