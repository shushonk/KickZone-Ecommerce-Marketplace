import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, Address, Order, User } from '../types';

interface AppState {
  user: User | null;
  setUser: (user: User | null) => void;
  
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  moveToWishlist: (productId: string) => void;
  
  addresses: Address[];
  addAddress: (address: Address) => void;
  updateAddress: (address: Address) => void;
  deleteAddress: (id: string) => void;
  
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: Order['status']) => void;

  appliedCoupon: string | null;
  setCoupon: (code: string | null) => void;
  
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
      
      cart: [],
      addToCart: (product) => {
        const { cart } = get();
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
          set({ cart: cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (productId) => {
        set({ cart: get().cart.filter(item => item.id !== productId) });
      },
      updateQuantity: (productId, quantity) => {
        set({ cart: get().cart.map(item => item.id === productId ? { ...item, quantity } : item) });
      },
      clearCart: () => set({ cart: [] }),
      
      wishlist: [],
      toggleWishlist: (product) => {
        const { wishlist } = get();
        const exists = wishlist.find(item => item.id === product.id);
        if (exists) {
          set({ wishlist: wishlist.filter(item => item.id !== product.id) });
        } else {
          set({ wishlist: [...wishlist, product] });
        }
      },
      moveToWishlist: (productId) => {
        const { cart, wishlist } = get();
        const item = cart.find(i => i.id === productId);
        if (item) {
          const existsInWishlist = wishlist.find(w => w.id === item.id);
          set({
            cart: cart.filter(i => i.id !== productId),
            wishlist: existsInWishlist ? wishlist : [...wishlist, item]
          });
        }
      },
      
      addresses: [],
      addAddress: (address) => set({ addresses: [...get().addresses, address] }),
      updateAddress: (address) => set({ addresses: get().addresses.map(a => a.id === address.id ? address : a) }),
      deleteAddress: (id) => set({ addresses: get().addresses.filter(a => a.id !== id) }),
      
      orders: [],
      addOrder: (order) => set({ orders: [order, ...get().orders] }),
      updateOrderStatus: (id, status) => set({ orders: get().orders.map(o => o.id === id ? { ...o, status } : o) }),
      
      appliedCoupon: null,
      setCoupon: (code) => set({ appliedCoupon: code }),
      
      theme: 'light',
      toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' })
    }),
    {
      name: 'kickzone-storage',
    }
  )
);
