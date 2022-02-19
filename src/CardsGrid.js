import React from "react";
import SingleCard from "./SingleCard";

function CardsGrid({ memoCards, chooseCard }) {
  return (
    <div className="cards-grid">
      {memoCards.map((card, idx) => (
        <SingleCard card={card} key={idx} chooseCard={chooseCard} />
      ))}
    </div>
  );
}

export default CardsGrid;
