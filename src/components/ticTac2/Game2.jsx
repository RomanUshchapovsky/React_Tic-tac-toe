import React, { useState } from "react";

import { calculateWinner } from "../../Helper";
import Board2 from "./Board2";
import style from "./Game2.module.css";

const Game2 = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    // determine if there was a click on a cell
    if (winner || boardCopy[index]) return;
    // determine whose move X ? O
    boardCopy[index] = xIsNext ? "X" : "O";
    // update the state
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className={style.start_btn}
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Start New GAME
      </button>
    );
  };

  return (
    <div className={style.wrapper}>
      {startNewGame()}
      <Board2 squares={board} click={handleClick} />
      <p className={style.game_info}>
        {winner ? "WINNER " + winner : "Next player" + (xIsNext ? "X" : "O")}
      </p>
    </div>
  );
};

export default Game2;
