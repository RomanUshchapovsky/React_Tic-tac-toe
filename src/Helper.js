export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
// export const calculateWinner = (squares) => {
//   const winnerLines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   let isDraw = true;
//   for (let i = 0; i < winnerLines.length; i++) {
//     const [a, b, c] = winnerLines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
//       return squares[a];
//     }
//     if (!squares[a] || !squares[b] || !squares[c]) {
//       isDraw = false;
//     }
//   }
//   if (isDraw) return "D";
//   return null;
// };
