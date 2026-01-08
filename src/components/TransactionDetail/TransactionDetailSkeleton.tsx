import styles from "./TransactionDetail.module.css";

interface TransactionDetailSkeletonProps {
  onBack: () => void;
}

export const TransactionDetailSkeleton = ({
  onBack,
}: TransactionDetailSkeletonProps) => {
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
        <div className={styles.skeletonAmount} />
        <div className={styles.skeletonMerchant} />
        <div className={styles.skeletonDate} />

        <div className={styles.detailCard}>
          <div className={styles.detailRow}>
            <div className={styles.skeletonLabel} />
          </div>
          <div className={`${styles.detailRow} ${styles.secondary}`}>
            <div className={styles.skeletonCardName} />
          </div>
          <div className={styles.detailDivider}></div>
          <div className={`${styles.detailRow} ${styles.totalRow}`}>
            <div className={styles.skeletonTotal} />
            <div className={styles.skeletonTotalAmount} />
          </div>
        </div>
      </div>
    </div>
  );
};
