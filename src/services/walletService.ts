// Mock APIs for Wallet operations

interface WalletTransaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
}

class WalletService {
  async getTransactions(): Promise<WalletTransaction[]> {
    return new Promise((resolve) => setTimeout(() => resolve([
      { id: 'WT-001', type: 'credit', amount: 500, description: 'Added via UPI', date: new Date().toISOString() },
      { id: 'WT-002', type: 'debit', amount: 150, description: 'Order #ORD-8994 deduction', date: new Date(Date.now() - 86400000).toISOString() },
    ]), 400));
  }
}

export const walletService = new WalletService();
