import React, { useState } from "react";
import CardsGrid from "./CardsGrid";
import cardImgs from "./CardImgs";

function Cards() {
  const [memoCards, setMemoCards] = useState([]);
  const [points, setPoints] = useState(10);

  // shuffling cards and setting points
  const shuffleCards = () => {
    const shuffledCards = [...cardImgs]
      .sort(() => 0.5 - Math.random())
      .map((card) => ({ ...card, id: Math.random() }));

    setMemoCards(shuffledCards);
    setPoints(10);
  };

  console.log(memoCards, points);

  return (
    <>
      <h1 className="test-header">Language Memory Game</h1>
      <div>Points: {points}</div>
      <div className="cards-grid">
        {memoCards.map((card) => (
          <div className="single-card" key={card.id}>
            <img className="card-front" src={card.src} />
          </div>
        ))}
      </div>
      <button onClick={shuffleCards}>Shuffle</button>
    </>
  );
}

export default Cards;
