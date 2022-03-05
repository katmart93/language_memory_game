import React from "react";

function ScoresList({ scores }) {
  return (
    <div className="scores-list">
      <div className="scores-list__container">
        <div className="scores-list__content">
          {scores.map((score, idx) => (
            <div className="single-scores" key={idx}>
              <div className="scores">{score.final} points</div>
              <div className="date">{score.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScoresList;
