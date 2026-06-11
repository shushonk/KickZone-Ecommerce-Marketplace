import React from 'react';
import { useStore } from '../store/useStore';
import { OrderCard } from '../components/orders/OrderCard';
import { EmptyState } from '../components/common/EmptyState';
import { PackageSearch } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';

export const OrderHistoryPage: React.FC = () => {
  const { orders } = useStore();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageHeader title="My Orders" fallback="/profile" className="rounded shadow-sm mb-6" />
      
      {orders.length === 0 ? (
        <EmptyState 
          title="No orders found" 
          description="You haven't placed any orders yet. Start exploring our collection!"
          icon={<PackageSearch size={64} className="text-gray-300" />}
        />
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};
