import React, { useState } from "react";
import CardsGrid from "./CardsGrid";
import cardImgs from "./CardImgs";

function Cards() {
  const [memoCards, setMemoCards] = useState([]);
  const [points, setPoints] = useState(10);

  // shuffling cards and setting points
  const shuffleCards = () => {
    const shuffledCards = [...cardImgs];

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };

    shuffleArray(shuffledCards);

    setMemoCards(shuffledCards);
    setPoints(10);
  };

  console.log("====memoCards===", memoCards, points);

  return (
    <>
      <h1 className="test-header">Language Memory Game</h1>
      <div>Points: {points}</div>
      <CardsGrid memoCards={memoCards} />
      <button onClick={shuffleCards}>Shuffle</button>
    </>
  );
}

export default Cards;

//.map((card) => ({ ...card, id: Math.random() }));
