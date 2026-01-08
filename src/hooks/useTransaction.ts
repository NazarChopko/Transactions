import { useEffect, useState } from "react";

import { fetchTransactionById } from "../api/transactions";

import type { Transaction } from "../types";

interface UseTransactionResult {
  transaction: Transaction | null;
  isLoading: boolean;
  error: string | null;
}

export const useTransaction = (
  id: string | undefined
): UseTransactionResult => {
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      setError("Transaction ID is required");
      return;
    }

    const loadTransaction = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchTransactionById(id);
        setTransaction(data);
      } catch (err) {
        setError("Failed to load transaction");
      } finally {
        setIsLoading(false);
      }
    };

    loadTransaction();
  }, [id]);

  return { transaction, isLoading, error };
};
