import style from '../styles/components/Countdown.module.css';

export const Countdown = () => {
  return (
    <div className={style.countdownContainer}>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <span>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
  );
};
