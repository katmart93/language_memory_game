import React from "react";

function SingleCard({ card, chooseCard }) {
  const handleClick = () => {
    // console.log("card clicked:", card.type, card.src, card);
    chooseCard(card);
  };
  return (
    <div className="single-card">
      <img className="card-front" src={card.src} />
      <img
        className="card-reverse"
        src="/img/zebra_reverse.jpg"
        onClick={handleClick}
      />
    </div>
  );
}

export default SingleCard;
