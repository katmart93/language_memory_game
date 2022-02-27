import React from "react";

function Modal({ end, gameOver, shuffleCards }) {
  return (
    <div>
      {(() => {
        if (end) {
          return (
            <div>
              <div>You won the game!</div>
              <button onClick={shuffleCards}>Play Again</button>
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
