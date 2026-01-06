import { Header } from '../../features/header';
import Sidebar from '../../features/sidebar';
import { TransactionTable } from '../../features/transaction-table';
import { useSidebarToggle } from '../../shared/hooks/use-sidebar-toggle';
import styles from './main-layout.module.scss';

export const MainLayout = () => {
  const { isCollapsed, toggleSidebar } = useSidebarToggle();

  return (
    <div className={styles['main-layout']}>
      <Header onToggleSidebar={toggleSidebar} />
      <div className={styles['main-layout__content']}>
        <Sidebar isCollapsed={isCollapsed} />
        <main className={styles['main-layout__main']}>
          <TransactionTable />
        </main>
      </div>
    </div>
  );
};
