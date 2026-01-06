import { useAccordion } from '../../../../shared/hooks/use-accordion';
import styles from './account-folder.module.scss';

export const AccountFolder = ({
  icon,
  name,
  balance,
  transactionId,
  children,
  onFolderClick,
  isFolder = false,
}) => {
  const { isOpen, toggle } = useAccordion(false);

  const handleClick = () => {
    if (onFolderClick) onFolderClick(transactionId);
    if (isFolder) toggle();
  };

  const hasBalance = balance != null && balance !== '';
  const isNegative =
    hasBalance && parseFloat(balance.replace(/\s/g, '').replace(',', '.')) < 0;
  const balanceClass = isNegative
    ? styles['account-folder__balance--negative']
    : styles['account-folder__balance--positive'];

  return (
    <div className={styles['account-folder-wrapper']}>
      <div
        className={`${styles['account-folder']} ${isOpen ? styles['account-folder--open'] : ''}`}
        onClick={handleClick}
        aria-expanded={isFolder ? isOpen : undefined}
        aria-controls={isFolder ? `sub-accounts-${transactionId}` : undefined}
        role={isFolder ? 'button' : undefined}
        tabIndex={0}
      >
        <span className={styles['account-folder__icon']}>{icon}</span>
        <span className={styles['account-folder__name']}>{name}</span>

        {hasBalance && (
          <span
            className={`${styles['account-folder__balance']} ${balanceClass}`}
          >
            <span className={styles['account-folder__balance-value']}>
              {new Intl.NumberFormat('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(
                parseFloat(balance.replace(/\s/g, '').replace(',', '.'))
              )}
            </span>
            <span className={styles['account-folder__balance-currency']}>
              ₽
            </span>
          </span>
        )}

        {isFolder && (
          <span className={styles['account-folder__chevron']}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        )}
      </div>

      {isFolder && (
        <div
          id={`sub-accounts-${transactionId}`}
          className={`${styles['account-folder__sub-accounts']} ${isOpen ? styles['account-folder__sub-accounts--open'] : ''}`}
          aria-hidden={!isOpen}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default AccountFolder;
