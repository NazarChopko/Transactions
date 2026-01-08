import type { Transaction } from "../../types";
import {
  capitalizeFirst,
  formatCurrency,
  formatTransactionDate,
} from "../../utils";
import styles from "./TransactionDetail.module.css";

interface TransactionDetailProps {
  transaction: Transaction;
  onBack: () => void;
}

export const TransactionDetail = ({
  transaction,
  onBack,
}: TransactionDetailProps) => {
  return (
    <div className={styles.transactionDetail}>
      <header className={styles.detailHeader}>
        <button className={styles.backButton} onClick={onBack}>
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path
              d="M10 2L2 10L10 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </header>

      <div className={styles.detailContent}>
        <div className={styles.detailAmount}>
          {formatCurrency(transaction.amount)}
        </div>
        <div className={styles.detailMerchant}>{transaction.merchant}</div>
        <div className={styles.detailDate}>
          {formatTransactionDate(transaction.date, transaction.time)}
        </div>

        <div className={styles.detailCard}>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>
              Status: {capitalizeFirst(transaction.status)}
            </span>
          </div>
          <div className={`${styles.detailRow} ${styles.secondary}`}>
            <span className={styles.detailCardName}>
              {transaction.cardUsed || "Card"}
            </span>
          </div>
          <div className={styles.detailDivider}></div>
          <div className={`${styles.detailRow} ${styles.totalRow}`}>
            <span className={styles.detailTotalLabel}>Total</span>
            <span className={styles.detailTotalAmount}>
              {formatCurrency(transaction.amount)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
