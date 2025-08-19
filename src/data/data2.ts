// data/data.ts

import type { MockData } from '../types/types';

export const generateMockData = (): MockData[] => {
  const data: MockData[] = [];
  const sectors = ['Technology', 'Healthcare', 'Finance', 'Energy', 'Consumer Goods'];
  const companies = ['Tech Corp', 'Health Corp', 'Finance Corp', 'Energy Co', 'Consumer Co'];
  for (let i = 1; i <= 20; i++) {
    data.push({
      id: i,
      name: companies[i % 5] + ' ' + (i < 10 ? '0' + i : i),
      sector: sectors[i % 5],
      marketCap: Math.floor(Math.random() * 1000) + 100,
      employees: Math.floor(Math.random() * 10000) + 1000,
    });
  }
  return data;
};
