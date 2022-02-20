import React from "react";
import SingleCard from "./SingleCard";

function CardsGrid({
  memoCards,
  chooseCard,
  firstChoice,
  secondChoice,
  cardsLocked,
}) {
  return (
    <div className="cards-grid">
      {memoCards.map((card, idx) => (
        <SingleCard
          card={card}
          key={idx}
          chooseCard={chooseCard}
          cardsLocked={cardsLocked}
          flipped={card === firstChoice || card === secondChoice || card.match}
        />
      ))}
    </div>
  );
}

export default CardsGrid;
