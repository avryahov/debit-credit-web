import {
  faArchive,
  faCalendarCheck,
  faChartLine,
  faChartPie,
  faChevronRight,
  faCreditCard,
  faFileAlt,
  faFolder,
  faGlobe,
  faGraduationCap,
  faLandmark,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { useAdaptiveText } from 'shared/hooks/use-adaptive-text';
import { formatBalance, isBalanceNegative } from 'shared/utils/format-balance';
import styles from './account-folder.module.scss';

// Сопоставление иконок из mock-accounts-tree.js с FontAwesome icons
const ICON_MAP = {
  'fa-solid fa-folder': faFolder,
  'fa-solid fa-credit-card': faCreditCard,
  'fa-solid fa-chart-line': faChartLine,
  'fa-solid fa-graduation-cap': faGraduationCap,
  'fa-solid fa-globe': faGlobe,
  'fa-solid fa-landmark': faLandmark,
  'fa-solid fa-archive': faArchive,
  'fa-solid fa-wallet': faWallet,
  'fa-solid fa-calendar-check': faCalendarCheck,
  'fa-solid fa-chart-pie': faChartPie,
  'fa-solid fa-file-alt': faFileAlt,
};

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

  // Получаем иконку из ICON_MAP, если она есть, иначе используем дефолтную
  const faIcon = ICON_MAP[icon] || faFolder;

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
        <span className={styles['account-folder__icon']}>
          <FontAwesomeIcon icon={faIcon} />
        </span>
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
          {isFolder && (
            <FontAwesomeIcon
              icon={faChevronRight}
              className={
                isOpen ? styles['account-folder__chevron--rotated'] : ''
              }
            />
          )}
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
