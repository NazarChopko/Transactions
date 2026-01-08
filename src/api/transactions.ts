import { transactions as mockTransactions } from "../data/mockData";

import type { Transaction } from "../types";

export const fetchTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, 1000);
  });
};

export const fetchTransactionById = (
  id: string
): Promise<Transaction | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const transaction = mockTransactions.find((t) => t.id === id) || null;
      resolve(transaction);
    }, 1000);
  });
};
