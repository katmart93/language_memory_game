import React from "react";
import { useNavigate } from "react-router-dom";

function Modal({ end, gameOver, shuffleCards }) {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="modal__container">
        {(() => {
          if (end) {
            return (
              <div className="modal__content">
                <div className="modal__message">You won the game!</div>
                <button
                  onClick={shuffleCards}
                  className="modal-btn btn-try-again"
                >
                  Play Again
                </button>
                <button
                  onClick={() => navigate("/scores")}
                  className="modal-btn btn-scores"
                >
                  Scores
                </button>
              </div>
            );
          } else if (gameOver) {
            return (
              <div className="modal__content">
                <div className="modal__message">
                  Uh-oh! Looks like it's Game Over!
                </div>
                <button
                  onClick={shuffleCards}
                  className="modal-btn btn-game-over"
                >
                  Try Again
                </button>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default Modal;
