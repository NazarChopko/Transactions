import { useEffect, useState } from "react";

import { fetchTransactions } from "../api/transactions";

import type { Transaction } from "../types";

interface UseTransactionsResult {
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
}

export const useTransactions = (): UseTransactionsResult => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (err) {
        setError("Failed to load transactions");
      } finally {
        setIsLoading(false);
      }
    };

    loadTransactions();
  }, []);

  return { transactions, isLoading, error };
};
