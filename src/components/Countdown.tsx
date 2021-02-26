import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

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