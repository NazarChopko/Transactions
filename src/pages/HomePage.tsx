import { useNavigate } from "react-router-dom";

import { Dashboard } from "../components/Dashboard";
import {
  TransactionList,
  TransactionListSkeleton,
} from "../components/TransactionList";

import { useTransactions } from "../hooks/useTransactions";

import { cardInfo } from "../data/mockData";

import type { Transaction } from "../types";

import styles from "../App.module.css";

export const HomePage = () => {
  const navigate = useNavigate();
  const { transactions, isLoading } = useTransactions();

  const handleTransactionClick = (transaction: Transaction) => {
    navigate(`/transaction/${transaction.id}`);
  };

  return (
    <div className={styles.homePage}>
      <Dashboard cardInfo={cardInfo} />
      {isLoading ? (
        <TransactionListSkeleton />
      ) : (
        <TransactionList
          transactions={transactions}
          onTransactionClick={handleTransactionClick}
        />
      )}
    </div>
  );
};
