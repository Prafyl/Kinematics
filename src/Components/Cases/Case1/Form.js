import React, { useState, useReducer } from "react";

import gravityFinder from "./PlanetChecker";
import Input from "../../Ui/Input";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "velocity":
      return {
        velocity: action.velocity,
        angle: state.angle,
        gravity: state.gravity,
      };
    case "angle":
      return {
        velocity: state.velocity,
        angle: action.angle,
        gravity: state.gravity,
      };
    case "gravity":
      return {
        velocity: state.velocity,
        angle: state.angle,
        gravity: action.gravity,
      };
  }
};

const Form = (props) => {
  const [inputData, dispatchInputData] = useReducer(reducerFunction, {
    velocity: 0,
    angle: 0,
    gravity: 10,
  });

  const velocityChangeHandler = (event) => {
    dispatchInputData({
      type: "velocity",
      velocity: +event.target.value,
    });
  };
  const angleChangeHandler = (event) => {
    dispatchInputData({
      type: "angle",
      angle: +event.target.value,
    });
  };
  const gravityChangeHandler = (event) => {
    dispatchInputData({
      type: "gravity",
      gravity: gravityFinder(event.target.value),
    });
  };
  return (
    <React.Fragment>
      <form>
        <Input id="velocity" onInput={velocityChangeHandler} />
        <Input id="angle" onInput={angleChangeHandler} />
        <label htmlFor="inputPlanet">Planet</label>
        <select id="inputPlanet" onChange={gravityChangeHandler}>
          <option defaultValue id="9.8">
            Earth
          </option>
          <option id="3.7">Mercury</option>
          <option id="8.87">Venus</option>
          <option id="3.71">Mars</option>
          <option id="24.92">Jupiter</option>
          <option id="10.44">Saturn</option>
          <option id="9.798">Uranus</option>
          <option id="11.15">Neptune</option>
          <option id="0.58">Pluto</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <p>
        {inputData.velocity}
        {inputData.angle}
        {inputData.gravity}
      </p>
    </React.Fragment>
  );
};
export default Form;
