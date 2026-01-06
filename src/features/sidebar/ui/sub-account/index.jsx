import styles from './sub-account.module.scss';

export const SubAccount = ({ icon, name, balance, transactionId }) => {
  const isNegative =
    balance != null &&
    parseFloat(balance.replace(/\s/g, '').replace(',', '.')) < 0;
  const balanceClass = isNegative
    ? `${styles['sub-account__balance']} ${styles['sub-account__balance--negative']}`
    : `${styles['sub-account__balance']} ${styles['sub-account__balance--positive']}`;

  return (
    <div className={styles['sub-account']}>
      <span className={styles['sub-account__icon']}>{icon || '💳'}</span>
      <span className={styles['sub-account__name']}>{name}</span>
      {balance != null && (
        <span className={balanceClass}>
          <span>
            {new Intl.NumberFormat('ru-RU', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(parseFloat(balance.replace(/\s/g, '').replace(',', '.')))}
          </span>
          <span className={styles['sub-account__balance-currency']}>₽</span>
        </span>
      )}
    </div>
  );
};

export default SubAccount;
