import React, { useState } from "react";
import "./App.css";
import WinnerModal from "./componnets/WinnerModal.jsx";
import { Turns } from "./utils/constants.jsx";
import { checkWinner } from "./utils/checkWinner.jsx";
import Square from "./componnets/square.jsx";
import confetti from "canvas-confetti";

function App() {
  const [turn, setTurn] = useState(Turns.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === Turns.X ? Turns.O : Turns.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(Turns.X);
    setWinner(null);
  };

  return (
    <main className={`board ${winner ? "blur" : ""}`}>
      <h1>TaTeTi</h1>
      <section className="game">
        {board.map((value, index) => (
          <Square key={index} isSelected={false} onClick={() => updateBoard(index)}>
            {value}
          </Square>
        ))}
      </section>

      <section className="turns">
        <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
        <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
      </section>

      <WinnerModal winner={winner} onReset={resetGame} />
    </main>
  );
}

export default App;
