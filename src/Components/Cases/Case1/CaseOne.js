import React, { useState } from "react";
const Case1 = () => {
  const [initialVelocity, setInitialVelocity] = useState(0);
  const [angle, setAngle] = useState(0);
  const [answer, setAnswer] = useState({});
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setAnswer({
      range: (initialVelocity * initialVelocity * Math.sin(angle * 2)) / 10,
      time: (2 * initialVelocity * Math.sin(2 * angle)) / 10,
      height:
        (initialVelocity *
          initialVelocity *
          Math.sin(angle) *
          Math.sin(angle)) /
        10,
    });
  };
  const velocityChangeHandler = (event) => {
    setInitialVelocity(+event.target.value);
  };
  const angleChangeHandler = (event) => {
    const angleDegree = +event.target.value * (Math.PI / 180);
    setAngle(angleDegree);
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="#velocity">Initial Velocity</label>
        <input
          id="velocity"
          type="number"
          onChange={velocityChangeHandler}
        ></input>
        <label>Angle Of Projecion</label>
        <input id="angle" type="number" onChange={angleChangeHandler}></input>
        <button type="submit">Submit</button>
        <div>
          <label htmlFor="inputState">State</label>
          <select id="inputState">
            <option defaultValue>Earth</option>
            <option>Mercury</option>
            <option>Venus</option>
            <option>Mars</option>
            <option>Jupiter</option>
            <option>Saturn</option>
            <option>Uranus</option>
            <option>Neptune</option>
            <option>Pluto</option>
          </select>
        </div>
      </form>
      <p> Horizontal Range = {answer.range}</p>
      <p> Time = {answer.time}</p>
      <p> Height = {answer.height}</p>
    </div>
  );
};
export default Case1;
