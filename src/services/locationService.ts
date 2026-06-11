// Mock APIs for Location operations

class LocationService {
  async isPinCodeServiceable(pincode: string): Promise<boolean> {
     // Mock serviceability
     return new Promise((resolve) => setTimeout(() => {
       const serviceable = ['110001', '560001', '400001', '600001', '500001', '700001', '411001'];
       resolve(serviceable.includes(pincode));
     }, 300));
  }
}

export const locationService = new LocationService();
