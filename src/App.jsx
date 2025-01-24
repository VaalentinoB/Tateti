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

function App() {
  const [turn, setTurn] = useState(Turns.X);
  const [board, setBoard] = useState(Array(9).fill(null)); // Inicializar el tablero

  const updateBoard = (index) => {
    if (board[index]) return; // Prevenir sobrescribir una celda ocupada

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
