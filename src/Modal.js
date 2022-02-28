import React from "react";
import { useNavigate } from "react-router-dom";

function Modal({ end, gameOver, shuffleCards }) {
  const navigate = useNavigate();

  return (
    <div>
      {(() => {
        if (end) {
          return (
            <div>
              <div>You won the game!</div>
              <button onClick={shuffleCards}>Play Again</button>
              <button onClick={() => navigate("/scores")}>Scores</button>
            </div>
          );
        } else if (gameOver) {
          return (
            <div>
              <div>Uh-oh! Looks like it's Game Over!</div>
              <button onClick={shuffleCards}>Try Again</button>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Modal;
