import { useEffect, useState } from 'react';

/**
 * Хук для адаптивного сокращения текста.
 * При уменьшении ширины экрана текст постепенно сокращается.
 *
 * @param {string} text — исходный текст
 * @param {React.RefObject} ref — ref на элемент, в котором отображается текст
 * @param {number} [minWidth=10] — минимальная ширина, при которой текст полностью скрывается
 * @returns {string} — сокращенный текст
 */
export const useAdaptiveText = (text, ref, minWidth = 10) => {
  const [adaptiveText, setAdaptiveText] = useState(text);

  useEffect(() => {
    if (!ref.current || !text) return;

    const element = ref.current;
    const parent = element.parentElement;

    if (!parent) return;

    const observer = new ResizeObserver(() => {
      const parentWidth = parent.clientWidth;
      const elementWidth = element.offsetWidth;

      // Если элемент не помещается в родительский контейнер
      if (elementWidth > parentWidth - minWidth) {
        // Начинаем сокращать
        let shortened = text;
        let words = text.split(' ');

        // Пробуем сократить по словам
        while (words.length > 1 && elementWidth > parentWidth - minWidth) {
          words.pop();
          shortened = words.join(' ') + ' ...';
          element.textContent = shortened;
          // Пересчитываем ширину
          if (element.offsetWidth <= parentWidth - minWidth) break;
        }

        // Если все равно не влезает — сокращаем по буквам
        if (element.offsetWidth > parentWidth - minWidth) {
          let chars = text.split('');
          while (
            chars.length > 0 &&
            element.offsetWidth > parentWidth - minWidth
          ) {
            chars.pop();
            shortened = chars.join('') + ' ...';
            element.textContent = shortened;
          }
        }

        // Если даже одна буква не влезает — показываем пустую строку
        if (element.offsetWidth > parentWidth - minWidth) {
          shortened = '';
        }

        setAdaptiveText(shortened);
      } else {
        // Текст помещается — показываем полный
        setAdaptiveText(text);
      }
    });

    observer.observe(parent);

    return () => {
      observer.disconnect();
    };
  }, [text, ref, minWidth]);

  return adaptiveText;
};
