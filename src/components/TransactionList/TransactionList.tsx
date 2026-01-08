import type { Transaction } from "../../types";
import { TransactionItem } from "./TransactionItem";
import styles from "./TransactionList.module.css";

interface TransactionListProps {
  transactions: Transaction[];
  onTransactionClick: (transaction: Transaction) => void;
}

export const TransactionList = ({
  transactions,
  onTransactionClick,
}: TransactionListProps) => {
  return (
    <div className={styles.transactionList}>
      <h2 className={styles.transactionListTitle}>Latest Transactions</h2>
      <div className={styles.transactions}>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onClick={() => onTransactionClick(transaction)}
          />
        ))}
      </div>
    </div>
  );
};
