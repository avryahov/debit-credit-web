import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useAdaptiveText } from 'shared/hooks/use-adaptive-text';
import { formatBalance, isBalanceNegative } from 'shared/utils/format-balance';
import styles from './account-folder.module.scss';

export const AccountFolder = ({
  icon = '📁',
  name,
  balance,
  children = [],
  onFolderClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isFolder = children.length > 0;
  const toggle = () => {
    if (onFolderClick) {
      onFolderClick();
    }
    if (isFolder) {
      setIsOpen(!isOpen);
    }
  };

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
    <div
      className={`${styles['account-folder-wrapper']} ${
        isOpen ? styles['account-folder-wrapper--open'] : ''
      }`}
    >
      <div
        className={styles['account-folder']}
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={
          isFolder ? `sub-accounts-${name.replace(/\s+/g, '-')}` : undefined
        }
      >
        <span className={styles['account-folder__icon']}>{icon}</span>
        <span
          className={styles['account-folder__name']}
          title={name}
          ref={nameRef} // 👈 привязываем ref
        >
          {adaptiveName}
        </span>
        {/* Объединяем баланс и валюту в один блок */}
        <span className={styles['account-folder__balance-container']}>
          <span
            className={`${styles['account-folder__balance-value']} ${
              isNegative
                ? styles['account-folder__balance-value--negative']
                : ''
            }`}
          >
            {displayBalance}
          </span>
          <span className={styles['account-folder__balance-currency']}>
            {balance ? '₽' : ''}
          </span>
        </span>
        <span className={styles['account-folder__chevron']}>
          {isFolder && <i className="fa-solid fa-chevron-right"></i>}
        </span>
      </div>
      {isFolder && (
        <div
          id={`sub-accounts-${name.replace(/\s+/g, '-')}`}
          className={styles['account-folder__sub-accounts']}
          aria-hidden={!isOpen}
        >
          {children}
        </div>
      )}
    </div>
  );
};

AccountFolder.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.arrayOf(PropTypes.node),
  onFolderClick: PropTypes.func,
};

AccountFolder.defaultProps = {
  icon: '📁',
  children: [],
  onFolderClick: undefined,
};

export default AccountFolder;
