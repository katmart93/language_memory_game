import React from "react";

function SingleCard({ card, chooseCard, flipped, cardsLocked }) {
  const handleClick = () => {
    if (!cardsLocked) chooseCard(card);
  };
  return (
    <div className="single-card">
      <div className={flipped ? "flipped" : ""}>
        <img alt="front" className="card-front" src={card.src} />
        <img
          alt="back"
          className="card-reverse"
          src="/img/zebra_reverse.jpg"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
