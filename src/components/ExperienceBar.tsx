import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span className={styles.experienceBarSpan}>0 xp</span>
      <div className={styles.experienceBarDiv}>
        <div style={{ width: '50%' }} className={styles.experienceBarDivLevelStatus} />
        <span style={{ left: '50%' }} className={styles.experienceBarDivLevelCurrent}>300xp</span>
      </div>
      <span className={styles.experienceBarSpan}>600 xp</span>
    </header>
  );
}