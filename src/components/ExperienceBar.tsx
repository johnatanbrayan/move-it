import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 XP</span>
      <div>
        <div style={{ width: '60%' }} />

        <span className={styles.currentExperience} style={{ left: '60%' }}>
          300 XP
        </span>
      </div>
      <span>600 XP</span>
    </header>
  );
}

export default ExperienceBar;
