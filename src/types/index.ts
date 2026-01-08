export interface Transaction {
  id: string;
  merchant: string;
  merchantLogo: string;
  amount: number;
  date: string;
  time?: string;
  type: "debit" | "credit";
  status: "pending" | "approved" | "declined";
  cardUsed?: string;
  location?: string;
  cashbackPercent?: number;
  description?: string;
}

export interface CardInfo {
  balance: number;
  available: number;
  paymentDue: string | null;
  paymentMessage: string;
  dailyPoints: number;
}
