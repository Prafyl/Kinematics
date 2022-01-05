import React from "react";

import Curve from "../Cases/Case1/Curve";

const Output = (props) => {
  const [name1, name2, name3] = props.name;
  return (
    <div>
      <p id={name1}>
        {name1}={props.answer[name1]}
      </p>
      <p id={name2}>
        {name2}={props.answer[name2]}
      </p>
      <p id={name3}>
        {name3}={props.answer[name3]}
      </p>
      <Curve numbers={props.answer} />
    </div>
  );
};
export default Output;
