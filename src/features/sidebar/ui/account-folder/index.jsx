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
  transactionId,
  isFolder,
  onSelectAccount,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children.length > 0;

  const handleFolderClick = (e) => {
    if (transactionId && typeof onSelectAccount === 'function') {
      onSelectAccount(transactionId);
    }
    if (hasChildren) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleChevronClick = (e) => {
    e.stopPropagation();
    if (hasChildren) {
      setIsOpen((prev) => !prev);
    }
  };

  let displayBalance = '';
  let isNegative = false;
  if (balance != null) {
    displayBalance = formatBalance(balance);
    isNegative = isBalanceNegative(balance);
  }

  const nameRef = React.useRef(null);
  const adaptiveName = useAdaptiveText(name, nameRef);

  const faIcon = ICON_MAP[icon] || faFolder;

  return (
    <div
      className={`${styles['account-folder-wrapper']} ${
        isOpen ? styles['account-folder-wrapper--open'] : ''
      }`}
    >
      <div
        className={styles['account-folder']}
        onClick={handleFolderClick}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={
          hasChildren ? `sub-accounts-${name.replace(/\s+/g, '-')}` : undefined
        }
      >
        <span className={styles['account-folder__icon']}>
          <FontAwesomeIcon icon={faIcon} />
        </span>
        <span
          className={styles['account-folder__name']}
          title={name}
          ref={nameRef}
        >
          {adaptiveName}
        </span>
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
            {balance != null ? '₽' : ''}
          </span>
        </span>
        <span
          className={styles['account-folder__chevron']}
          onClick={handleChevronClick}
        >
          {hasChildren && (
            <FontAwesomeIcon
              icon={faChevronRight}
              className={
                isOpen ? styles['account-folder__chevron--rotated'] : ''
              }
            />
          )}
        </span>
      </div>

      {hasChildren && (
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
  transactionId: PropTypes.string,
  isFolder: PropTypes.bool,
  onSelectAccount: PropTypes.func.isRequired,
};

AccountFolder.defaultProps = {
  icon: '📁',
  children: [],
  transactionId: undefined,
  isFolder: false,
};

export default AccountFolder;
