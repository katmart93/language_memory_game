import React, { useState } from "react";
import CardsGrid from "./CardsGrid";
import cardImgs from "./CardImgs";

function Cards() {
  const [memoCards, setMemoCards] = useState([]);
  const [points, setPoints] = useState(10);

  // shuffling cards
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
      <button onClick={shuffleCards}>Shuffle</button>
      <div>{points}</div>
    </>
  );
}

export default Cards;
