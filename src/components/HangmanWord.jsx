/* eslint-disable react/prop-types */

const HangmanWord = ({ guessLetters, wordToGuess, result = false }) => {
  return (
    <div className='letter-line-wrapper'>
      {/* take the word, create individual characters, write with map */}
      {wordToGuess.split('').map((letter, index) => (
        <span className='letter-line' key={index}>
          <span style={{
            visibility: guessLetters.includes(letter) || result
              ? 'visible'
              : 'hidden',
            color: !guessLetters.includes(letter) && result ? '#BE123C' : '#1C1917'
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord