import PropTypes from 'prop-types';
import { MOCK_ACCOUNTS_TREE } from '../../shared/constants/mock-accounts-tree';
import styles from './sidebar.module.scss';
import { AccountFolder, SubAccount } from './ui';

export const Sidebar = ({ isCollapsed, onSelectAccount }) => {
  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles['sidebar--collapsed'] : ''}`}
    >
      <div className={styles.sidebar__header}>
        <h3>Счета</h3>
      </div>
      <div className={styles.sidebar__nav}>
        {MOCK_ACCOUNTS_TREE.map((folder) => (
          <div key={folder.id} className={styles['sidebar__item']}>
            <AccountFolder
              icon={folder.icon}
              name={folder.name}
              balance={folder.balance}
              transactionId={folder.transactionId}
              isFolder={folder.isFolder}
              onSelectAccount={onSelectAccount}
            >
              {folder.children?.map((child) => (
                <SubAccount
                  key={child.id}
                  icon={child.icon}
                  name={child.name}
                  balance={child.balance}
                  transactionId={child.transactionId}
                  onSelectAccount={onSelectAccount}
                />
              ))}
            </AccountFolder>
          </div>
        ))}
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  onSelectAccount: PropTypes.func.isRequired,
};

export default Sidebar;
