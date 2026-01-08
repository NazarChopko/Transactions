import { useNavigate, useParams } from "react-router-dom";

import {
  TransactionDetail,
  TransactionDetailSkeleton,
} from "../components/TransactionDetail";

import { useTransaction } from "../hooks/useTransaction";

import styles from "../App.module.css";

export const TransactionPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { transaction, isLoading } = useTransaction(id);

  const handleBack = () => {
    navigate("/");
  };

  if (isLoading) {
    return <TransactionDetailSkeleton onBack={handleBack} />;
  }

  if (!transaction) {
    return (
      <div className={styles.notFound}>
        <p className={styles.notFoundText}>Transaction not found</p>
        <button className={styles.notFoundButton} onClick={handleBack}>
          Go back
        </button>
      </div>
    );
  }

  return <TransactionDetail transaction={transaction} onBack={handleBack} />;
};
