import PropTypes from 'prop-types';
import { COLUMN_CONFIGS } from '../constants/column-configs';
import { useTransactionData } from '../hooks/use-transaction-data';
import styles from '../transaction-table.module.scss';

const parseAmount = (amountStr) => {
  const trimmed = (amountStr || '').trim();
  const isNegative = trimmed.startsWith('-');
  const isPositive = trimmed.startsWith('+');
  const display = isNegative || isPositive ? trimmed.slice(1) : trimmed;
  return { display, isNegative, isPositive };
};

export const TransactionTable = ({ selectedAccountId }) => {
  const { rows, isUpdating } = useTransactionData(selectedAccountId);

  const visibleColumns = COLUMN_CONFIGS.filter((col) => col.visible);

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            {visibleColumns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.id || index}
              className={`${styles.row} ${isUpdating ? styles['row--fade-out'] : styles['row--fade-in']}`}
            >
              {visibleColumns.map((col) => {
                const value = row[col.key];
                let cellContent = value;
                let cellClassName = styles.cell;

                if (col.key === 'amount') {
                  const { display, isNegative } = parseAmount(value);
                  cellClassName = `${styles.cell} ${styles['cell--amount']}`;
                  if (isNegative) {
                    cellClassName += ` ${styles['cell--negative']}`;
                  } else {
                    cellClassName += ` ${styles['cell--positive']}`;
                  }
                  cellContent = display;
                }

                if (value === '' || value === null || value === undefined) {
                  cellClassName += ` ${styles['empty-cell']}`;
                  cellContent = '';
                }

                return (
                  <td
                    key={`${row.id || index}-${col.key}`}
                    className={cellClassName}
                  >
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
          {rows.length === 0 && !isUpdating && (
            <tr>
              <td
                colSpan={visibleColumns.length}
                className={styles['empty-cell']}
              >
                Нет транзакций
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

TransactionTable.propTypes = {
  selectedAccountId: PropTypes.string,
};

TransactionTable.defaultProps = {
  selectedAccountId: 'default',
};
