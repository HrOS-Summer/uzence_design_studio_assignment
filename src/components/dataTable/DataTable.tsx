import React, { useState, useEffect } from "react";
import clsx from "clsx";
import type { DataTableProps, Column } from "../../types/types";
import { Loader } from '../loader/Loader';
import { ArrowUpDown, ArrowDown, ArrowUp } from 'lucide-react';



export function DataTable<T extends { id: number }>({
  data,
  columns,
  loading,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [ascending, setAscending] = useState(true);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Select All checkbox logic
  const allSelected = data.length > 0 && selectedRows.length === data.length;
  const someSelected = selectedRows.length > 0 && selectedRows.length < data.length;

  useEffect(() => {
    if (onRowSelect)
      onRowSelect(data.filter((row) => selectedRows.includes(row.id)));
    // Only if selectedRows or data changes
  }, [selectedRows, data, onRowSelect]);

  const handleSelectAll = () => {
    if (allSelected) setSelectedRows([]);
    else setSelectedRows(data.map((row) => row.id));
  };

  // ... your sort functions and row selection are the same as before...

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortKey as keyof T];
      const bValue = b[sortKey as keyof T];
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return ascending ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });
  }, [data, sortKey, ascending]);

  const toggleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    if (sortKey === col.dataIndex) setAscending((asc) => !asc);
    else {
      setSortKey(col.dataIndex as string);
      setAscending(true);
    }
  };

  const handleRowSelect = (id: number) => {
    let next;
    if (selectedRows.includes(id)) next = selectedRows.filter((x) => x !== id);
    else next = selectable === true ? [...selectedRows, id] : [id];
    setSelectedRows(next);
    // onRowSelect is now handled in useEffect
  };

  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 shadow rounded transition-colors duration-300">
      {true ? (
        <Loader />
      ) : data.length === 0 ? (
        <div className="p-6 text-center text-gray-500">No data available.</div>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr>
              {selectable && (
                <th
                  className="p-2 bg-gray-100 dark:bg-gray-800 align-middle"
                  aria-label="Select all"
                >
                  <input
                    type="checkbox"
                    checked={allSelected}
                    aria-checked={allSelected ? "true" : someSelected ? "mixed" : "false"}
                    ref={el => {
                      if (el) el.indeterminate = someSelected;
                    }}
                    onChange={handleSelectAll}
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={clsx(
                    "px-4 py-2 text-left font-semibold bg-gray-100 dark:bg-gray-800", // Consistent header bg
                    (col.key === "marketCap" || col.key === "employees") ? "cursor-pointer select-none hover:underline" : ""
                  )}
                  onClick={() => toggleSort(col)}
                  aria-sort={
                    sortKey === col.dataIndex
                      ? ascending
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  {col.title}
                  {(col.key === "marketCap" || col.key === "employees") && (
  <span className="ml-1 inline-block align-middle">
    {sortKey === col.dataIndex ? (
      ascending ? (
        <ArrowUp className="inline w-4 h-4 text-blue-600 dark:text-blue-400" aria-label="Sorted ascending" />
      ) : (
        <ArrowDown className="inline w-4 h-4 text-blue-600 dark:text-blue-400" aria-label="Sorted descending" />
      )
    ) : (
      <ArrowUpDown className="inline w-4 h-4 text-gray-400" aria-label="Sortable" />
    )}
  </span>
)}

                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row) => (
              <tr
                key={row.id}
                className={clsx(
                  "border-t border-gray-100 dark:border-gray-800",
                  selectable && selectedRows.includes(row.id) && "bg-blue-50 dark:bg-blue-900/40"
                )}
              >
                {selectable && (
                  <td className="px-2 py-1">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleRowSelect(row.id)}
                      aria-label="Select row"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2 dark:text-gray-100">
                    {String(row[col.dataIndex])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
