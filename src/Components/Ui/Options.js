import React from "react";

import classes from "./Options.module.css";

const Options = (props) => {
  return (
    <React.Fragment>
      <label htmlFor="inputPlanet">Planet</label>
      <select
        className={classes.optionBar}
        id="inputPlanet"
        onChange={props.gravityChangeHandler}
      >
        <option defaultValue id="9.8">
          Earth
        </option>
        <option id="274">Sun</option>
        <option id="3.7">Mercury</option>
        <option id="8.87">Venus</option>
        <option id="3.71">Mars</option>
        <option id="24.92">Jupiter</option>
        <option id="10.44">Saturn</option>
        <option id="9.798">Uranus</option>
        <option id="11.15">Neptune</option>
        <option id="0.58">Pluto</option>
      </select>
    </React.Fragment>
  );
};
export default Options;
