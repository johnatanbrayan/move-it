import style from '../styles/components/Profile.module.css';

export const Profile = () => (
  <div className={style.profileContainer}>
    <img src="https://github.com/johnatanbrayan.png" alt="Photo Perfil" />

    <div>
      <strong>Johnatan Brayan</strong>
      <p>
        <img src="icons/level.svg" alt="Level" /> Level 1
      </p>
    </div>
  </div>
);
