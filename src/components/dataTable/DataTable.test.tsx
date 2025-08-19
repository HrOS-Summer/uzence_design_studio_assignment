import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "./DataTable";
import type { Column } from "../../types/types";

type MockRow = {
  id: number;
  name: string;
  sector: string;
  marketCap: number;
  employees: number;
};

const mockData: MockRow[] = [
  { id: 1, name: "Apple", sector: "Tech", marketCap: 2000, employees: 10000 },
  { id: 2, name: "Tesla", sector: "Auto", marketCap: 800, employees: 5000 },
];

const columns: Column<MockRow>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: false },
  { key: "sector", title: "Sector", dataIndex: "sector", sortable: false },
  { key: "marketCap", title: "Market Cap", dataIndex: "marketCap", sortable: true },
  { key: "employees", title: "Employees", dataIndex: "employees", sortable: true },
];

describe("DataTable", () => {
  it("renders rows", () => {
    render(<DataTable data={mockData} columns={columns} loading={false} />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Tesla")).toBeInTheDocument();
  });

  it("sorts by market cap", () => {
    render(<DataTable data={mockData} columns={columns} loading={false} />);
    const header = screen.getByText("Market Cap");
    fireEvent.click(header);
    fireEvent.click(header);
    expect(header).toHaveTextContent("▼"); // descending arrow
  });
});
