import styles from '../sidebar.module.scss';

export const Sidebar = ({ isCollapsed }) => {
  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles['sidebar--collapsed'] : ''}`}
    >
      <div className={styles.sidebar__header}>
        <h3>Счета</h3>
      </div>
      <nav className={styles.sidebar__nav}>
        <ul>
          <li>Наличные — 5 955,00 ₽</li>
          <li>ИП Бизнес счет — 300,00 ₽</li>
          <li>Наши карточки — 55 352,32 ₽</li>
          <li>T-Банк Premium — 39 033,59 ₽</li>
          <li>Сбербанк мужа — 6 900,79 ₽</li>
          {/* ... */}
        </ul>
      </nav>
    </aside>
  );
};
