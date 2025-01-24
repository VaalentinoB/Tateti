import React, { useState } from "react";
import "./App.css";

const Turns = {
  X: "X",
  O: "O",
};

const Square = ({ children, index, updateBoard }) => {
  return (
    <div className="square" onClick={() => updateBoard(index)}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(Turns.X);

  const updateBoard = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    setTurn(turn === Turns.X ? Turns.O : Turns.X);
  };

  return (
    <main className="board">
      <h1>TaTeTi</h1>
      <section className="game">
        {board.map((value, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {value}
          </Square>
        ))}
      </section>
      <p className="turn">Turno actual: {turn}</p>
    </main>
  );
}

export default App;
