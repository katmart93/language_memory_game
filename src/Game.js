import React, { useEffect, useState } from "react";
import CardsGrid from "./CardsGrid";
import cardImgs from "./CardImgs";

function Game() {
  const [memoCards, setMemoCards] = useState([]);
  const [points, setPoints] = useState(10);
  const [firstChoice, setFirstChoice] = useState();
  const [secondChoice, setSecondChoice] = useState();

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

  // choosing a card
  const chooseCard = (cardChosen) => {
    firstChoice ? setSecondChoice(cardChosen) : setFirstChoice(cardChosen);
  };

  // comparing selected cards
  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.type === secondChoice.type) {
        setMemoCards((prev) => {
          return prev.map((card) => {
            if (
              card.type === firstChoice.type ||
              card.type === secondChoice.type
            ) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        setPoints((prev) => prev + 1);
        resetTurn();
      } else {
        setPoints((prev) => prev - 1);
        resetTurn();
      }
    }
  }, [firstChoice, secondChoice]);

  // reset turn
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };

  return (
    <>
      <h1 className="test-header">Language Memory Game</h1>
      <div>Points: {points}</div>
      <button onClick={shuffleCards}>Shuffle</button>
      <CardsGrid
        memoCards={memoCards}
        chooseCard={chooseCard}
        firstChoice={firstChoice}
        secondChoice={secondChoice}
      />
    </>
  );
}

export default Game;

//.map((card) => ({ ...card, id: Math.random() }));
