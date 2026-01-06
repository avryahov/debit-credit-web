import styles from '../transaction-table.module.scss';

export const TransactionTable = () => {
  const columns = [
    { key: 'date', label: 'Дата' },
    { key: 'description', label: 'Описание' },
    { key: 'category', label: 'Категория' },
    { key: 'counterparty', label: 'Контрагент' },
    { key: 'tag', label: 'Тег' },
    { key: 'amount', label: 'Сумма' },
    { key: 'account', label: 'Счет' },
  ];

  const rows = [
    {
      date: '23 янв 2026 г. в 15:35',
      description: 'Погашение кредита',
      category: 'Услуги',
      counterparty: 'Мегафон',
      tag: '',
      amount: '-3,00 ₽',
      account: 'Мегафон мужа',
    },
    // ... другие строки
  ];

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
