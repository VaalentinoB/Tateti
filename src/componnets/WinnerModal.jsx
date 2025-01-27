import React from "react";
import Square from "./square";

const WinnerModal = ({ winner, onReset }) => {
  if (winner === null) return null;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winner === false ? "Empate" : "Ganador:"}</h2>
        {winner && (
          <header className="win">
            <Square>{winner}</Square>
          </header>
        )}
        <footer>
          <button onClick={onReset}>Reiniciar</button>
        </footer>
      </div>
    </section>
  );
};

export default WinnerModal;
