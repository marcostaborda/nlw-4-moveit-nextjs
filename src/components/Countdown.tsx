import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeOut: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>
            {minuteLeft}
          </span>
          <span>
            {minuteRight}
          </span>
        </div>
        <span>:</span>
        <div>
          <span>
            {secondsLeft}
          </span>
          <span>
            {secondsRight}
          </span>
        </div>
      </div>
      {hasFinished ? (
        <button
          type="button"
          disabled
          className={styles.countdownButton}
        >
          Ciclo Encerrado
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                onClick={resetCountdown}
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              >
                Abandonar ciclo
              </button>
            ) : (
                <button
                  type="button"
                  onClick={startCountdown}
                  className={styles.countdownButton}
                >
                  Iniciar novo Ciclo
                </button>
              )}
          </>
        )}

    </div>
  );
}