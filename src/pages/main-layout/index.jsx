import { Header } from '../../features/header';
import { Sidebar } from '../../features/sidebar';
import { TransactionTable } from '../../features/transaction-table';
import { useSidebarToggle } from '../../shared/hooks/use-sidebar-toggle';

export const MainLayout = () => {
  const { isCollapsed, toggleSidebar } = useSidebarToggle();

  return (
    <div className="main-layout">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="main-layout__content">
        <Sidebar isCollapsed={isCollapsed} />
        <main className="main-layout__main">
          <TransactionTable />
        </main>
      </div>
    </div>
  );
};
