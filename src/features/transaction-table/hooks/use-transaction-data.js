import { useEffect, useState } from 'react';

const loadMockTransactions = async (transactionId) => {
  try {
    const module = await import(
      `../../../shared/constants/transactions/${transactionId}.js`
    );
    const exportKey = Object.keys(module).find((key) =>
      key.toUpperCase().endsWith('_TRANSACTIONS')
    );
    return exportKey ? module[exportKey] : [];
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `Mock file not found or invalid for: "${transactionId}"`,
        err.message
      );
    }
    return [];
  }
};

export const useTransactionData = (selectedAccountId) => {
  const [rows, setRows] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchTransactions = async () => {
      setIsUpdating(true);
      const data = await loadMockTransactions(selectedAccountId);
      if (!cancelled) {
        setRows(data);
        setTimeout(() => {
          if (!cancelled) setIsUpdating(false);
        }, 150);
      }
    };

    fetchTransactions();

    return () => {
      cancelled = true;
    };
  }, [selectedAccountId]);

  return { rows, isUpdating };
};
