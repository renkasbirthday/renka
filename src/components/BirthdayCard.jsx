/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { TbArrowBounce } from "react-icons/tb";
import Confetti from "react-dom-confetti";
import "../styles/birthdaycard.css";

export default function BirthdayCard() {
  const [confetti, setConfetti] = useState(false);
  const [item, setItem] = useState("🎁");
  const [count, setCount] = useState(0)

  const openPresent = () => {
    console.log(count);
    partyHorn.play();
    if (count < 1) {
      birthdaySong.play();
      setCount(count => count + 1);
    }
    let presents = ["😺", "🐶", "🎊", "🎈", "🎉", "✨", "🎇", "🐇", "🦆", "🎂"];
    setItem(presents[Math.floor(Math.random() * Math.floor(presents.length))]);
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 500);
  };

  const config = {
    angle: 85,
    spread: 65,
    startVelocity: 45,
    elementCount: 90,
    decay: 0.9,
  };

  const partyHorn = new Audio(
    "src/audio/mixkit-happy-party-horn-sound-530.wav"
  );
  const birthdaySong = new Audio("src/audio/birthday.mp3");

  return (
    <div className="birthday-card-wrapper">
      <div className="confetti-left">
        <Confetti active={confetti} config={config} />
      </div>
      <div className="birthday-card">
        <div className="card-front">
          <h3 className="happy">Happy Birthday My Love</h3>
          <div className="balloons">
            <div className="balloon-one" />
            <div className="balloon-two" />
            <div className="balloon-three" />
            <div className="balloon-four" />
          </div>
        </div>
        <div className="card-inside">
          <p>Dear Renka,</p>
          <p>
            In these almost four years, you've filled my life with endless love
            and happiness. Your smile brightens my days, and your laughter at my
            terrible jokes fills me with joy. You've been my best friend,
            teammate, and partner, always inspiring me to be better from how
            hard you work. I hope all of your dreams come true and that we can
            finally be together soon. Happy Birthday, my universe.
          </p>
          <p>With all my love, </p>
          <p className="end">Isaac ❤️</p>
          <div className="present-container">
            <Confetti active={confetti} config={config} />
            <button className="present-button" onClick={openPresent}>
              {item}
            </button>
          </div>
          <p className="open">
            Open some gifts <TbArrowBounce className="icon" />
          </p>
        </div>
      </div>
      <div className="confetti-right">
        <Confetti active={confetti} config={config} />
      </div>
    </div>
  );
}
