import React, { useEffect, useState } from "react";
import ScoresList from "./ScoresList";

const URL = "http://localhost:3500/points";

function Scores() {
  const [scores, setScores] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Błąd!");
      })
      .then((data) => {
        setScores(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="scores-list">
      {scores && <ScoresList scores={scores} />}
    </div>
  );
}

export default Scores;
