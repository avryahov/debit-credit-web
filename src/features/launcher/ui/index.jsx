import styles from './launcher.module.scss';

export default function Launcher() {
  return (
    <div className={styles.launcher}>
      <div className={styles['launcher__content']}>
        <h1 className={styles['launcher__title']}>Debit & Credit</h1>
        <div className={styles['launcher__spinner']} />
      </div>
    </div>
  );
}
