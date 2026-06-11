import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface DeliveryLocation {
  pincode: string;
  city: string;
}

interface LocationState {
  currentLocation: DeliveryLocation | null;
  updateLocation: (pincode: string) => Promise<boolean>;
}

// Simple lookup for demo purposes
const pincodeLookup: Record<string, string> = {
  '110001': 'New Delhi',
  '110002': 'New Delhi',
  '560001': 'Bengaluru',
  '560002': 'Bengaluru',
  '400001': 'Mumbai',
  '400002': 'Mumbai',
  '600001': 'Chennai',
  '500001': 'Hyderabad',
  '700001': 'Kolkata',
  '411001': 'Pune'
};

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      currentLocation: { pincode: '110001', city: 'New Delhi' },
      updateLocation: async (pincode) => {
        // Simulate API call
        return new Promise((resolve) => {
          setTimeout(() => {
            const city = pincodeLookup[pincode];
            if (city) {
              set({ currentLocation: { pincode, city } });
              resolve(true);
            } else {
              resolve(false);
            }
          }, 500);
        });
      }
    }),
    {
      name: 'kickzone-location'
    }
  )
);
