import { useEffect, useState } from 'react';
import style from '../styles/components/Countdown.module.css';

export const Countdown = () => {
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(30 * 60);

  const minute = time / 60;
  const second = time % 60;

  const [leftMinute, rightMinute] = String(minute).padStart(2, '0').split('');
  const [leftSecond, rightSecond] = String(second).padStart(2, '0').split('');

  function startCountDown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

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

      <button
        type="button"
        className={style.coundownButton}
        onClick={startCountDown}
      >
        Start a Cycle
      </button>
    </div>
  );
};
