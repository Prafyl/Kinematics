import React, { useState, useReducer } from "react";

import gravityFinder from "./PlanetChecker";
import Input from "../../Ui/Input";
import Options from "../../Ui/Options";

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
  const [answer, setAnswer] = useState({ range: 0, height: 0, time: 0 });
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
      angle: (+event.target.value * Math.PI) / 180,
    });
  };
  const gravityChangeHandler = (event) => {
    dispatchInputData({
      type: "gravity",
      gravity: gravityFinder(event.target.value),
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setAnswer({
      range: Math.round(
        (inputData.velocity *
          inputData.velocity *
          Math.sin(inputData.angle * 2)) /
          inputData.gravity
      ),
      height: Math.round(
        (inputData.velocity *
          inputData.velocity *
          Math.sin(inputData.angle) *
          Math.sin(inputData.angle)) /
          (2 * inputData.gravity)
      ),
      time: Math.round(
        (2 * inputData.velocity * Math.sin(inputData.angle)) / inputData.gravity
      ),
    });
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <Input
          id="velocity"
          labelName="Initial Velocity"
          onInput={velocityChangeHandler}
        />
        <Input
          labelName="Angle Of Projection"
          id="angle"
          onInput={angleChangeHandler}
        />
        <Options gravityChangeHandler={gravityChangeHandler} />
        <button type="submit">Submit</button>
      </form>
      <p>Horizontal Range={answer.range}meters</p>
      <p>Time Taken={answer.time}seconds</p>
      <p>Maximum Height={answer.height}meters</p>
    </React.Fragment>
  );
};
export default Form;
