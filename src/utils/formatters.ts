export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const formatCurrencyWithSign = (
  amount: number,
  type: "debit" | "credit"
): string => {
  const formatted = formatCurrency(amount);
  return type === "credit" ? `+${formatted}` : formatted;
};

export const formatPoints = (points: number): string => {
  if (points >= 1000) {
    return `${Math.floor(points / 1000)}K`;
  }
  return points.toString();
};

export const formatTransactionDate = (date: string, time?: string): string => {
  if (time) {
    return `${date}, ${time}`;
  }
  return date;
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

interface TransactionForSubtitle {
  status: "pending" | "approved" | "declined";
  cardUsed?: string;
  description?: string;
  location?: string;
}

export const getTransactionSubtitle = (
  transaction: TransactionForSubtitle
): string => {
  if (transaction.status === "pending" && transaction.cardUsed) {
    return `Pending - ${transaction.cardUsed}`;
  }
  if (transaction.description && transaction.description.startsWith("From")) {
    return transaction.description;
  }
  if (transaction.cardUsed) {
    return transaction.cardUsed;
  }
  if (transaction.location) {
    return transaction.location;
  }
  return "";
};

interface TransactionForDateLine {
  date: string;
  description?: string;
}

export const getTransactionDateLine = (
  transaction: TransactionForDateLine
): string => {
  if (
    transaction.description &&
    !transaction.description.startsWith("From") &&
    transaction.description !== "Diana"
  ) {
    return transaction.date;
  }
  if (transaction.description === "Diana") {
    return `Diana – ${transaction.date}`;
  }
  return transaction.date;
};
