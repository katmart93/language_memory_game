import React, { useEffect, useState } from "react";
import CardsGrid from "./CardsGrid";
import cardImgs from "./CardImgs";
import Modal from "./Modal";

const URL = "http://localhost:3500/points";

function Game() {
  const [memoCards, setMemoCards] = useState([]);
  const [points, setPoints] = useState(5);
  const [firstChoice, setFirstChoice] = useState();
  const [secondChoice, setSecondChoice] = useState();
  const [cardsLocked, setCardsLocked] = useState(false);
  const [end, isEnd] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // setting date
  const dateFormat = (dateObj) => {
    const components = {
      date: dateObj.getDate().toString().padStart(2, "0"),
      month: (dateObj.getMonth() + 1).toString().padStart(2, "0"),
      year: dateObj.getFullYear(),
      hour: dateObj.getHours(),
      minute: dateObj.getMinutes().toString().padStart(2, "0"),
    };

    return `${components.hour}:${components.minute} ${components.date}/${components.month}/${components.year}`;
  };

  const newDate = new Date();
  const date = dateFormat(newDate);

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
    setPoints(5);
    resetTurn();
    setGameOver(false);
    isEnd(false);
  };

  useEffect(() => {
    // console.log(end, "??????");
    if (end) {
      fetch(URL, {
        method: "POST",
        body: JSON.stringify({ final: points, date: date }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Błąd!");
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  }, [end]);

  //checking if all cards have match=true
  useEffect(() => {
    // console.log(
    //   "czy wsio",
    //   memoCards.every((card) => card.match),
    //   memoCards
    // );
    if (memoCards.every((card) => card.match) && memoCards.length) {
      isEnd(true);
    }
  }, [memoCards]);

  console.log("====memoCards===", memoCards, points);

  // choosing a card
  const chooseCard = (cardChosen) => {
    firstChoice ? setSecondChoice(cardChosen) : setFirstChoice(cardChosen);
  };

  // comparing selected cards
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setCardsLocked(true);
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
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  console.log(firstChoice, secondChoice, points);

  // reset turn
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setCardsLocked(false);
  };

  // game over
  useEffect(() => {
    if (points === 0) {
      setGameOver(true);
      setCardsLocked(true);
    }
  }, [points, cardsLocked]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <div>Points: {points}</div>
      {/* <button onClick={shuffleCards}>Shuffle</button> */}
      <CardsGrid
        memoCards={memoCards}
        chooseCard={chooseCard}
        firstChoice={firstChoice}
        secondChoice={secondChoice}
        cardsLocked={cardsLocked}
      />
      <Modal
        end={end}
        points={points}
        gameOver={gameOver}
        shuffleCards={shuffleCards}
      />
    </>
  );
}

export default Game;
