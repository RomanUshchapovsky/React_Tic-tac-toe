import React from "react";
import style from "./Game2.module.css";
import Square2 from "./Square2";

const Board2 = ({ squares, click }) => {
  return (
    <div className={style.board}>
      {squares.map((square, i) => (
        <Square2 key={i} value={square} onClick={() => click(i)} />
      ))}
    </div>
  );
};

export default Board2;
