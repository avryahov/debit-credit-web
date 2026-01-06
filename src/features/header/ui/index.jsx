import styles from '../header.module.scss';

export const Header = ({ onToggleSidebar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <button onClick={onToggleSidebar} className={styles.header__toggle}>
          ☰
        </button>
        <span className={styles.header__title}>Финансовое состояние</span>
      </div>
      <div className={styles.header__right}>
        <button className={styles.header__icon}>⚙️</button>
        <button className={styles.header__icon}>📋</button>
        <button className={styles.header__icon}>🌙</button>
        <input
          type="text"
          placeholder="Поиск"
          className={styles.header__search}
        />
      </div>
    </header>
  );
};
