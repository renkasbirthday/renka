/* eslint-disable react/prop-types */
import classnames from "classnames";
import heart from "/heart.jpg";
import "../styles/memorycard.css";

export default function MemoryCard({ onClick, card, index, isInactive, isFlipped, isDisabled }) {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={heart} alt="heart" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt={card.type} />
      </div>
    </div>
  );
}
