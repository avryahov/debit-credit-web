import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { useAdaptiveText } from 'shared/hooks/use-adaptive-text';
import { formatBalance, isBalanceNegative } from 'shared/utils/format-balance';
import styles from './sub-account.module.scss';

export const SubAccount = ({
  icon = '💳',
  name,
  balance,
  transactionId,
  onSelectAccount,
}) => {
  let displayBalance = '';
  let isNegative = false;
  if (balance != null) {
    displayBalance = formatBalance(balance);
    isNegative = isBalanceNegative(balance);
  }

  const faIcon = icon === '💳' ? faCreditCard : null;

  const nameRef = React.useRef(null);
  const adaptiveName = useAdaptiveText(name, nameRef);

  const handleClick = () => {
    if (transactionId && typeof onSelectAccount === 'function') {
      onSelectAccount(transactionId);
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          `SubAccount "${name}" clicked, but no transactionId or onSelectAccount provided`
        );
      }
    }
  };

  return (
    <div
      className={styles['sub-account']}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Счёт: ${name}`}
    >
      <span className={styles['sub-account__icon']}>
        {faIcon ? <FontAwesomeIcon icon={faIcon} /> : icon}
      </span>
      <span className={styles['sub-account__name']} title={name} ref={nameRef}>
        {adaptiveName}
      </span>
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
    </div>
  );
};

SubAccount.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  transactionId: PropTypes.string.isRequired,
  onSelectAccount: PropTypes.func.isRequired,
};

SubAccount.defaultProps = {
  icon: '💳',
};

export default SubAccount;
