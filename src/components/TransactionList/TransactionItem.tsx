import type { Transaction } from "../../types";
import {
  formatCurrencyWithSign,
  getTransactionDateLine,
  getTransactionSubtitle,
} from "../../utils";
import { MerchantLogo } from "../MerchantLogo/MerchantLogo";
import styles from "./TransactionList.module.css";

interface TransactionItemProps {
  transaction: Transaction;
  onClick: () => void;
}

export const TransactionItem = ({
  transaction,
  onClick,
}: TransactionItemProps) => {
  return (
    <div className={styles.transactionItem} onClick={onClick}>
      <div className={styles.transactionLogo}>
        <MerchantLogo merchant={transaction.merchantLogo} />
      </div>

      <div className={styles.transactionInfo}>
        <span className={styles.transactionMerchant}>
          {transaction.merchant}
        </span>
        <span className={styles.transactionDescription}>
          {getTransactionSubtitle(transaction)}
        </span>
        <span className={styles.transactionDate}>
          {getTransactionDateLine(transaction)}
        </span>
      </div>

      <div className={styles.transactionAmountSection}>
        <span
          className={`${styles.transactionAmount} ${
            transaction.type === "credit" ? styles.credit : ""
          }`}
        >
          {formatCurrencyWithSign(transaction.amount, transaction.type)}
        </span>
        {transaction.cashbackPercent && (
          <span className={styles.transactionCashback}>
            {transaction.cashbackPercent}%
          </span>
        )}
      </div>

      <div className={styles.transactionChevron}>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path
            d="M1 1L7 7L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
