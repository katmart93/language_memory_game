import React from "react";

function ScoresList({ scores }) {
  return (
    <div className="scores-list">
      {scores.map((score, idx) => (
        <p key={idx}>
          {score.final} points {score.date}
        </p>
      ))}
    </div>
  );
}

export default ScoresList;
