export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  mrp?: number;
  discountPercentage: number;
  category: string;
  subCategory?: string;
  brand?: string;
  seller?: string;
  imageUrl: string;
  images?: string[];
  rating: number;
  reviews?: number;
  stock?: number;
  deliveryType?: string;
  tags?: string[];
  specifications?: Record<string, string>;
  offerTag?: string;
  isFlashDeal?: boolean;
  isBestSeller?: boolean;
  isRecommended?: boolean;
  isSponsored?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  pincode: string;
  state: string;
  city: string;
  streetAppt: string;
  type: 'Home' | 'Work';
}

export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'Ordered' | 'Packed' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  totalAmount: number;
  items: OrderItem[];
  deliveryAddress: Address | null;
  paymentMethod: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}
