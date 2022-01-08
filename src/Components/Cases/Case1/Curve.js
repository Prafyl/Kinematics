import React, { useRef, useState, useEffect } from "react";

import classes from "./Curve.module.css";

const Curve = (props) => {
  const [ratio, setRatio] = useState(0);
  const svgRef = useRef();

  useEffect(() => {
    setRatio(svgRef.current.width.baseVal.value);
  }, [window.onresize]);
  const range = (props.numbers["range"] * ratio) / props.numbers["range"];
  const height = (props.numbers["height"] * ratio) / props.numbers["range"];

  const quadraticGraph = `M 0 800 Q ${range / 2} ${
    800 - 2 * height
  } ${range} ${800}`;

  return (
    <React.Fragment>
      <div className={classes.borderBox}>
        <svg
          ref={svgRef}
          width="100%"
          className={classes.svgSize}
          height="800px"
        >
          <path
            d={
              props.numbers["range"] !== 1 && props.numbers["height"] !== 1
                ? quadraticGraph
                : 0
            }
            stroke="green"
            fill="none"
          />
        </svg>
      </div>
      <input
        id="test"
        min="1"
        max="10"
        defaultValue="10"
        step="1"
        type="range"
      />
    </React.Fragment>
  );
};
export default React.memo(Curve);
