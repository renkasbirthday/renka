/* eslint-disable react/prop-types */
import styles from '../styles/Keyboard.module.css'

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const Keyboard = ({
  activeLetter,
  inactiveLetter,
  addGuessLetter,
  disabled = false
}) => {
  return (
    <div className='keyboard'>
      {KEYS.map(key => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetter.includes(key);
        return (
          <button
            onClick={() => addGuessLetter(key)}
            className={`${styles.btn}
            ${isActive ? styles.active : ''}
            ${isInactive ? styles.inactive : ''}`}
            disabled={isInactive || isActive || disabled}
            key={key}>
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard