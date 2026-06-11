import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthState {
  user: User | null;
  token: string | null;
  isGuest: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  continueAsGuest: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isGuest: false,
      login: (user, token) => set({ user, token, isGuest: false }),
      logout: () => set({ user: null, token: null, isGuest: false }),
      continueAsGuest: () => set({ isGuest: true }),
    }),
    {
      name: 'kickzone-auth-storage',
    }
  )
);
