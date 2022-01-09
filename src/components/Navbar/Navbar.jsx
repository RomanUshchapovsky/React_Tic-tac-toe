import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <div className={style.Navbar_link}>
        <NavLink to="/game1" activeClassName="active">
          Game1
        </NavLink>
      </div>
      <div className={style.Navbar_link}>
        <NavLink to="/game2" activeClassName="active">
          Game2
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
