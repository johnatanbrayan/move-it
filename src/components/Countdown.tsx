import { useEffect, useState } from 'react';
import style from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export const Countdown = () => {
  const timeValue = 0.1;
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [time, setTime] = useState(timeValue * 60);

  const minutes = time / 60;
  const seconds = time % 60;

  const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
  const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    setIsActive(false);
    clearTimeout(countdownTimeout);
    setTime(timeValue * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setHasFinished(true);
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={style.countdownContainer}>
        <div>
          <span>{leftMinute}</span>
          <span>{rightMinute}</span>
        </div>
        <span>:</span>
        <div>
          <span>{leftSecond}</span>
          <span>{rightSecond}</span>
        </div>
      </div>

      {hasFinished ? (
        <button type="button" className={style.countdownButton} disabled>
          Cycle Finished
        </button>
      ) : (
        <>
          {!isActive ? (
            <button
              type="button"
              className={style.countdownButton}
              onClick={startCountDown}
            >
              Start a Cycle
            </button>
          ) : (
            <button
              type="button"
              className={`${style.countdownButton} ${style.countdownButtonIsActive}`}
              onClick={resetCountDown}
            >
              Abandon a Cycle
            </button>
          )}
        </>
      )}
    </div>
  );
};
