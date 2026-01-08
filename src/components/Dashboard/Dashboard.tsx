import type { CardInfo } from "../../types";
import { formatCurrency, formatPoints } from "../../utils";
import styles from "./Dashboard.module.css";

interface DashboardProps {
  cardInfo: CardInfo;
}

export const Dashboard = ({ cardInfo }: DashboardProps) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardGrid}>
        <div className={styles.balanceBox}>
          <span className={styles.cardLabel}>Card Balance</span>
          <span className={styles.cardValue}>
            {formatCurrency(cardInfo.balance)}
          </span>
          <span className={styles.cardSublabel}>
            {formatCurrency(cardInfo.available)} Available
          </span>
        </div>

        <div className={styles.paymentBox}>
          <span className={styles.cardLabel}>
            {cardInfo.paymentDue
              ? `Payment Due ${cardInfo.paymentDue}`
              : "No Payment Due"}
          </span>
          <span className={styles.cardSublabel}>{cardInfo.paymentMessage}</span>
        </div>

        <div className={styles.pointsBox}>
          <span className={styles.cardLabel}>Daily Points</span>
          <span className={`${styles.cardValue} ${styles.pointsValue}`}>
            {formatPoints(cardInfo.dailyPoints)}
          </span>
        </div>

        <div className={styles.checkBox}>
          <div className={styles.checkIcon}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
