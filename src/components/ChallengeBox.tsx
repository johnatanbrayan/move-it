import style from '../styles/components/ChallengeBox.module.css';

export const ChallengeBox = () => (
  <div className={style.challengeBoxContainer}>
    <div className={style.challengeBoxNotActive}>
      <strong>Inicie um ciclo para receber desafios a serem completados</strong>

      <div>
        <img src="icons/level-up.svg" alt="Icon Level Up" />
        <p>Complete-os e ganhe experiência e avance de leve.</p>
      </div>
    </div>
  </div>
);
