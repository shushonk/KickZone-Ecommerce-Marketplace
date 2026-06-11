import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  currency: 'INR' | 'COIN';
  title: string;
  date: string;
}

interface WalletState {
  balance: number;
  coins: number;
  transactions: Transaction[];
  addMoney: (amount: number, title?: string) => void;
  deductMoney: (amount: number, title: string) => boolean;
  addCoins: (amount: number, title: string) => void;
  deductCoins: (amount: number, title: string) => boolean;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      balance: 1500, // starting demo balance
      coins: 500, // starting coins
      transactions: [
        {
          id: 'T1',
          type: 'credit',
          amount: 1500,
          currency: 'INR',
          title: 'Welcome Bonus',
          date: new Date().toISOString()
        },
        {
           id: 'T2',
           type: 'credit',
           amount: 500,
           currency: 'COIN',
           title: 'Sign Up Reward',
           date: new Date().toISOString()
        }
      ],
      addMoney: (amount, title = 'Added to Wallet') => set((state) => ({
        balance: state.balance + amount,
        transactions: [{ id: 'T' + Date.now(), type: 'credit', amount, currency: 'INR', title, date: new Date().toISOString() }, ...state.transactions]
      })),
      deductMoney: (amount, title) => {
        const state = get();
        if (state.balance >= amount) {
          set({
            balance: state.balance - amount,
            transactions: [{ id: 'T' + Date.now(), type: 'debit', amount, currency: 'INR', title, date: new Date().toISOString() }, ...state.transactions]
          });
          return true;
        }
        return false;
      },
      addCoins: (amount, title) => set((state) => ({
        coins: state.coins + amount,
        transactions: [{ id: 'T' + Date.now(), type: 'credit', amount, currency: 'COIN', title, date: new Date().toISOString() }, ...state.transactions]
      })),
      deductCoins: (amount, title) => {
        const state = get();
        if (state.coins >= amount) {
          set({
             coins: state.coins - amount,
             transactions: [{ id: 'T' + Date.now(), type: 'debit', amount, currency: 'COIN', title, date: new Date().toISOString() }, ...state.transactions]
          });
          return true;
        }
        return false;
      }
    }),
    {
      name: 'kickzone-wallet-storage',
    }
  )
);
