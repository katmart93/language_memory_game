import React, { useState } from "react";
import CardsGrid from "./CardsGrid";

const cardImgs = [
  {
    type: "cat",
    src: "/img/cat_card_DE.jpg",
  },
  {
    type: "cat",
    src: "/img/cat_card_EN.jpg",
  },
  {
    type: "dog",
    src: "/img/dog_card_DE.jpg",
  },
  {
    type: "dog",
    src: "/img/dog_card_EN.jpg",
  },
  {
    type: "guinea",
    src: "/img/guinea_pig_card_DE.jpg",
  },
  {
    type: "guinea",
    src: "/img/guinea_pig_card_EN.jpg",
  },
  {
    type: "hamster",
    src: "/img/hamster_card_DE.jpg",
  },
  {
    type: "hamster",
    src: "/img/hamster_card_EN.jpg",
  },
  {
    type: "rabbit",
    src: "/img/rabbit_card_DE.jpg",
  },
  {
    type: "rabbit",
    src: "/img/rabbit_card_EN.jpg",
  },
  {
    type: "rat",
    src: "/img/rat_card_DE.jpg",
  },
  {
    type: "rat",
    src: "/img/rat_card_EN.jpg",
  },
];

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
