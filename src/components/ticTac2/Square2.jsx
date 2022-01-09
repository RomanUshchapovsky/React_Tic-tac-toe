import React from "react";
import style from "./Game2.module.css";

const Square2 = (props) => {
  return (
    <button className={style.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square2;
