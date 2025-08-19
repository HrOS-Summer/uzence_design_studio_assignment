import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { InputField } from "./components/inputField/InputField";
import { DataTable } from "./components/dataTable/DataTable";
import { SelectedCard } from "./components/selectedCard/SelectedCard";
import { useCompanyData } from "./hooks/useCompanyData";
import type { Column, MockData } from "./types/types";

function App() {
  const [selectedRows, setSelectedRows] = useState<MockData[]>([]);

  const {
    inputValue,
    setInputValue,
    filteredData,
    showWarning,
  } = useCompanyData();

  const columns: Column<MockData>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: false },
    { key: "sector", title: "Sector", dataIndex: "sector", sortable: false },
    { key: "marketCap", title: "Market Cap", dataIndex: "marketCap", sortable: true },
    { key: "employees", title: "Employees", dataIndex: "employees", sortable: true },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center gap-8 py-8 transition-colors duration-300">
        <div className="w-full max-w-md">
          <InputField
            label="Filter by Name or Sector"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Enter name or sector"
            helperText="Type to filter companies and sectors."
            errorMessage={showWarning ? "Please use only A-Z, a-z, 0-9 characters." : ""}
            invalid={showWarning}
            variant="filled"
            size="md"
            showClear
          />
        </div>
        <div className="w-full max-w-3xl">
          <DataTable
            data={filteredData}
            columns={columns}
            loading={false}
            selectable
            onRowSelect={setSelectedRows}
          />
        </div>
        <div className="w-full max-w-3xl mt-8">
          {selectedRows.length > 0 && (
            <>
              <h2 className="font-bold mb-3 text-lg">Selected Rows:</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedRows.map((row) => (
                  <SelectedCard key={row.id} data={row} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
