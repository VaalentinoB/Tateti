import { WIN_COMBOS } from "./constants.jsx";

export const checkWinner = (boardToCheck) => {
  for (const combo of WIN_COMBOS) {
    const [a, b, c] = combo;
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a];
    }
  }
  return null;
};
