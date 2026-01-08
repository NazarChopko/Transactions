import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.card}>
          <div className={styles.cardShine}></div>
          <div className={styles.cardContent}>
            <div className={styles.cardChip}></div>
            <div className={styles.cardNumber}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p className={styles.loadingText}>Loading your wallet...</p>
    </div>
  );
};
