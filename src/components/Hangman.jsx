/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import words from "../wordlist.json";
import HangmanDraw from "./HangmanDraw";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import "../styles/hangman.css";
import { Toaster, toast } from "react-hot-toast";

export default function Hangman() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessLetters, setGuessLetters] = useState([]);

  // take and filter the letters we guess
  const incorrectLetters = guessLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessLetters.includes(letter));

  const addGuessLetter = useCallback(
    (letter) => {
      if (guessLetters.includes(letter) || isLoser || isWinner) {
        return;
      } else {
        setGuessLetters((currentLetters) => [...currentLetters, letter]);
      }
    },
    [guessLetters, isLoser, isWinner]
  );

  // keyboard event handler
  useEffect(() => {
    const handler = (e) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) {
        return;
      } else {
        e.preventDefault();
        addGuessLetter(key);
      }
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessLetters]);

  useEffect(() => {
    if (isWinner) {
      toast("Great job!, you know yourself well 😊", {
        icon: "👏",
        duration: 5000,
      });
    }
  }, [isWinner]);

  useEffect(() => {
    if (isLoser) {
      toast.error(
        "You lost, just think of words that I would use to describe you 😊",
        {
          duration: 5000,
        }
      );
    }
  }, [isLoser, wordToGuess]);

  return (
    <div className="hangman-wrapper">
      <div className="hangman">
        <Toaster />
        {/* I want to know how many times I chose the wrong letter */}
        <HangmanDraw numberOfGuess={incorrectLetters.length} />
        <HangmanWord
          result={isLoser}
          guessLetters={guessLetters}
          wordToGuess={wordToGuess}
        />
        <div className="keyboard-wrapper">
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetter={guessLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetter={incorrectLetters}
            addGuessLetter={addGuessLetter}
          />
        </div>
        {isLoser && (
          <button className="reset-btn" onClick={() => location.reload()}>
            Reset
          </button>
        )}
      </div>
      <div className="dog-wrapper">
        <img src="Xqg8.gif" alt="" />
        <div className="dialog-2">
          <div className="right-point"></div>
          <p className="dog-words">
            Guess the word by typing letters or pressing the buttons. The words
            are what I would use to describe you 😋
          </p>
        </div>
      </div>
    </div>
  );
}
