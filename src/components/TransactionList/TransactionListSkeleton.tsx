import styles from "./TransactionList.module.css";

export const TransactionListSkeleton = () => {
  return (
    <div className={styles.transactionList}>
      <h2 className={styles.transactionListTitle}>Latest Transactions</h2>
      <div className={styles.transactions}>
        {[...Array(5)].map((_, index) => (
          <div key={index} className={styles.skeletonItem}>
            <div className={styles.skeletonLogo} />
            <div className={styles.skeletonInfo}>
              <div className={styles.skeletonLine} />
              <div className={styles.skeletonLineShort} />
            </div>
            <div className={styles.skeletonAmount} />
          </div>
        ))}
      </div>
    </div>
  );
};
