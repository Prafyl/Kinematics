import React from "react";

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <ul className={classes.navbar}>
      <li className={classes.active}>
        <a className="active" href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#case1">Case 1</a>
      </li>
    </ul>
  );
};
export default NavBar;
