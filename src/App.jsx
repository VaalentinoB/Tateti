import React from "react";
import "./App.css";

const Turns = {
  X: "X",
  O: "O",
};

const square = ({ children, updateBoard, index }) => {
  return <div className="square">{children} </div>;
};
function App() {
  const board = Array(9).fill(null);

  return (
    <main className="board">
      <h1>TaTeTi</h1>
      <section className="game">
        {board.map((_, index) => {
          return <square key={index} index={index}></square>;
        })}
      </section>
      <p className="turn">Turno actual: {turn}</p>
    </main>
  );
}

export default App;
