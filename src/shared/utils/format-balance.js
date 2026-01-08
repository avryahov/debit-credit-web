/**
 * Приводит строку к числу, удаляя пробелы и заменяя запятую на точку.
 * @param {string|number} input
 * @returns {number}
 */
const parseBalanceString = (input) => {
  if (typeof input === 'number') return input;

  if (typeof input !== 'string') return 0;

  // Убираем пробелы, заменяем запятую на точку
  const cleaned = input.replace(/\s/g, '').replace(',', '.');
  const num = Number(cleaned);

  return isNaN(num) ? 0 : num;
};

/**
 * Форматирует баланс под текущую локаль.
 * @param {string|number|null|undefined} rawBalance строка вида "55 303,32" или число
 * @param {string} [locale='ru-RU'] локаль, например 'ru-RU', 'en-US'
 * @returns {string} отформатированная строка, например "55 303,32"
 */
export const formatBalance = (rawBalance, locale = 'ru-RU') => {
  if (rawBalance == null || rawBalance === '') {
    return '0,00';
  }

  const num = parseBalanceString(rawBalance);

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};

/**
 * Определяет, является ли баланс отрицательным.
 * @param {string|number} rawBalance
 * @returns {boolean}
 */
export const isBalanceNegative = (rawBalance) => {
  if (rawBalance == null) return false;

  const num = parseBalanceString(rawBalance);
  return num < 0;
};
