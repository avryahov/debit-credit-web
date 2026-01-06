import { useState } from 'react';

export const useColumnVisibility = (initialColumns) => {
  const [visibleColumns, setVisibleColumns] = useState(initialColumns);

  const toggleColumn = (key) => {
    setVisibleColumns((prev) =>
      prev.map((col) =>
        col.key === key ? { ...col, visible: !col.visible } : col
      )
    );
  };

  return { visibleColumns, toggleColumn };
};
