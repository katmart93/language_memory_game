import React from "react";

function ScoresList({ scores }) {
  return (
    <div className="scores-list__container">
      <div className="scores-list__content">
        <div className="scores-list__header">
          <div>Score</div>
          <div>Date</div>
        </div>
        {scores.map((score, idx) => (
          <div className="single-score" key={idx}>
            <div className="scores">{score.final} points</div>
            <div className="date">{score.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoresList;
