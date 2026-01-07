import PropTypes from 'prop-types';
import React from 'react';
import { useAdaptiveText } from 'shared/hooks/use-adaptive-text';
import { formatBalance, isBalanceNegative } from 'shared/utils/format-balance';
import styles from './sub-account.module.scss';

export const SubAccount = ({ icon = '💳', name, balance }) => {
  let displayBalance = '';
  let isNegative = false;
  if (balance) {
    displayBalance = formatBalance(balance);
    isNegative = isBalanceNegative(balance);
  }

  // Создаем ref для элемента с названием
  const nameRef = React.useRef(null);
  const adaptiveName = useAdaptiveText(name, nameRef);

  return (
    <div className={styles['sub-account']}>
      <span className={styles['sub-account__icon']}>{icon}</span>
      <span
        className={styles['sub-account__name']}
        title={name}
        ref={nameRef} // 👈 привязываем ref
      >
        {adaptiveName}
      </span>
      {/* Объединяем баланс и валюту в один блок */}
      <span className={styles['sub-account__balance-container']}>
        <span
          className={`${styles['sub-account__balance-value']} ${
            isNegative ? styles['sub-account__balance-value--negative'] : ''
          }`}
        >
          {displayBalance}
        </span>
        <span className={styles['sub-account__balance-currency']}>
          {balance ? '₽' : ''}
        </span>
      </span>
      <span className={styles['sub-account__chevron']}></span>
    </div>
  );
};

SubAccount.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SubAccount.defaultProps = {
  icon: '💳',
};

export default SubAccount;
