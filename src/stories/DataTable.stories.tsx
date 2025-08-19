import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTable } from '../components/dataTable/DataTable';
import type { MockData, Column } from '../types/types';

const columns: Column<MockData>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: false },
  { key: "sector", title: "Sector", dataIndex: "sector", sortable: false },
  { key: "marketCap", title: "Market Cap", dataIndex: "marketCap", sortable: true },
  { key: "employees", title: "Employees", dataIndex: "employees", sortable: true },
];

const data: MockData[] = [
  { id: 1, name: "Tech Corp 01", sector: "Technology", marketCap: 950, employees: 5400 },
  { id: 2, name: "Health Corp 02", sector: "Healthcare", marketCap: 720, employees: 6300 },
  { "id": 3, "name": "Finance Corp 03", "sector": "Finance", "marketCap": 880, "employees": 4100 },
  { "id": 4, "name": "Energy Co 04", "sector": "Energy", "marketCap": 650, "employees": 3000 },
  { "id": 5, "name": "Consumer Co 05", "sector": "Consumer Goods", "marketCap": 570, "employees": 7200 },

  { "id": 6, "name": "Tech Corp 06", "sector": "Technology", "marketCap": 1020, "employees": 8200 },
];

export default {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
} as Meta<typeof DataTable<MockData>>;

// Default Table story
export const Table: StoryObj<typeof DataTable<MockData>> = {
  args: {
    data,
    columns,
    selectable: true,
    loading: false,
  },
};

// Loading story demonstrates the loader animation!
export const Loading: StoryObj<typeof DataTable<MockData>> = {
  args: {
    data: [],
    columns,
    selectable: true,
    loading: true,
  },
};

// Empty state (for completeness)
export const Empty: StoryObj<typeof DataTable<MockData>> = {
  args: {
    data: [],
    columns,
    selectable: true,
    loading: false,
  },
};
