import React, { useState, useReducer } from "react";

import gravityFinder from "./PlanetChecker";
import Input from "../../Ui/Input";
import Output from "../../Ui/Output";
import Options from "../../Ui/Options";
import Button from "../../Ui/Button";
import Card from "../../Ui/Card/Card";

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
  const [answer, setAnswer] = useState({ range: 1, height: 1, time: 0 });
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
      <Card>
        <form onSubmit={submitHandler}>
          <Input
            type="number"
            id="velocity"
            labelName="Initial Velocity"
            onInput={velocityChangeHandler}
            min="0"
            max="10000"
            bgText="Initial Velocity"
          />
          <Input
            type="number"
            labelName="Angle Of Projection"
            id="angle"
            onInput={angleChangeHandler}
            min="0"
            max="90"
            bgText="Angle with horizontal"
          />
          <Options gravityChangeHandler={gravityChangeHandler} />
          <Button type="submit" id="submittButton" content="Submit" />
        </form>
      </Card>

      <Card>
        Ouput:
        <Output name={Object.keys(answer)} answer={answer} />
      </Card>
    </React.Fragment>
  );
};
export default Form;
