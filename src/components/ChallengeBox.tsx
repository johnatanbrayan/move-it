import style from '../styles/components/ChallengeBox.module.css';

export const ChallengeBox = () => (
  <div className={style.challengeBoxContainer}>
    <div className={style.challengeBoxNotActive}>
      <strong>Start a cycle to receive challenges</strong>

      <p>
        <img src="icons/level-up.svg" alt="Icon Level Up" />
        Level up by completing the challenges.
      </p>
    </div>
  </div>
);
