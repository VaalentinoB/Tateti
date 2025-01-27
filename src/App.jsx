import React, { useState } from "react";
import "./App.css";

const Turns = {
  X: "X",
  O: "O",
};

const Square = ({ children, isSelected, onClick }) => {
  const className = `square ${isSelected ? "selected" : ""}`;
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};



const WIN_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]



function App() {
  const [turn, setTurn] = useState(Turns.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === Turns.X ? Turns.O : Turns.X;
    setTurn(newTurn);
  };

  return (
    <main className="board">
      <h1>TaTeTi</h1>
      <section className="game">
        {board.map((value, index) => (
          <Square
            key={index}
            isSelected={false}
            onClick={() => updateBoard(index)}
          >
            {value}
          </Square>
        ))}
      </section>

      <section className="turns">
        <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
        <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
      </section>
    </main>
  );
}

export default App;
