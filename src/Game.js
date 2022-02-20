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
        console.log(
          `1st card type: ${firstChoice.type}, 2nd card type: ${secondChoice.type}, the cards match!`
        );
        setPoints((prev) => prev + 1);
        resetTurn();
      } else {
        console.log(
          `1st card type: ${firstChoice.type}, 2nd card type: ${secondChoice.type}, the cards DO NOT match!`
        );
        setPoints((prev) => prev - 1);
        resetTurn();
      }
    }
  }, [firstChoice, secondChoice]);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };

  return (
    <>
      <h1 className="test-header">Language Memory Game</h1>
      <div>Points: {points}</div>
      <button onClick={shuffleCards}>Shuffle</button>
      <CardsGrid memoCards={memoCards} chooseCard={chooseCard} />
    </>
  );
}

export default Game;

//.map((card) => ({ ...card, id: Math.random() }));
