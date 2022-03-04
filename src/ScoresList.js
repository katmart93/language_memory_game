import React from "react";

function ScoresList({ scores }) {
  return (
    <div className="scores-list">
      {scores.map((score) => (
        <p>
          {score.final} points {score.date}
        </p>
      ))}
    </div>
  );
}

export default ScoresList;