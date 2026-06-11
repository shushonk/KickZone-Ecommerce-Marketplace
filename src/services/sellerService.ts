// Mock APIs for Seller operations

export interface SellerProduct {
  id: string;
  name: string;
  price: number;
  stock: number;
  status: 'Active' | 'Inactive';
}

export interface SellerOrder {
  id: string;
  customerName: string;
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered';
  date: string;
}

export interface SellerDashboardData {
  totalProducts: number;
  totalOrders: number;
  pendingOrders: number;
  revenue: number;
}

class SellerService {
  async getDashboardData(): Promise<SellerDashboardData> {
    return new Promise((resolve) => setTimeout(() => resolve({
      totalProducts: 24,
      totalOrders: 156,
      pendingOrders: 12,
      revenue: 45000
    }), 800));
  }

  async getProducts(): Promise<SellerProduct[]> {
     return new Promise((resolve) => setTimeout(() => resolve([
       { id: '1', name: 'Premium Wireless Headphones', price: 2999, stock: 45, status: 'Active' },
       { id: '2', name: 'Ergonomic Office Chair', price: 4500, stock: 12, status: 'Active' },
       { id: '3', name: 'Mechanical Keyboard Blue Switches', price: 1500, stock: 0, status: 'Inactive' },
     ]), 600));
  }

  async getOrders(): Promise<SellerOrder[]> {
    return new Promise((resolve) => setTimeout(() => resolve([
      { id: 'ORD-001', customerName: 'Rahul Kumar', total: 2999, status: 'Pending', date: new Date().toISOString() },
      { id: 'ORD-002', customerName: 'Sneha Sharma', total: 4500, status: 'Shipped', date: new Date(Date.now() - 86400000).toISOString() },
    ]), 600));
  }
}

export const sellerService = new SellerService();
