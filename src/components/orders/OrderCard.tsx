import React from 'react';
import { Link } from 'react-router';
import { Order } from '../../types';
import { formatINR } from '../../utils/pricing';
import { ChevronRight, Package } from 'lucide-react';

interface OrderCardProps {
  order: Order;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <Link to={`/orders/${order.id}`} className="block border border-gray-200 bg-white rounded-xl overflow-hidden hover:shadow-md transition">
      <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
        <div className="flex gap-4 text-sm text-gray-500">
          <div>
            <p className="uppercase text-xs font-semibold">Order Placed</p>
            <p>{new Date(order.date).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="uppercase text-xs font-semibold">Total</p>
            <p className="font-medium text-gray-900">{formatINR(order.totalAmount)}</p>
          </div>
        </div>
        <div className="text-sm font-medium">
          Order # <span className="text-blue-600">{order.id}</span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-full sm:w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 p-2">
          {order.items[0]?.imageUrl ? (
            <img src={order.items[0].imageUrl} alt="Product" className="w-full h-full object-contain" />
          ) : (
            <Package size={32} className="text-gray-300" />
          )}
        </div>
        <div className="flex-1 w-full flex flex-col justify-between h-full">
          <div>
            <h3 className="font-medium text-gray-900 line-clamp-1">{order.items[0]?.name}</h3>
            {order.items.length > 1 && (
              <p className="text-sm text-gray-500 mt-1">+{order.items.length - 1} more items</p>
            )}
          </div>
          <div className="mt-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
              ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                order.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 
                'bg-blue-100 text-blue-800'}`}>
              {order.status}
            </span>
          </div>
        </div>
        <div className="hidden sm:flex text-gray-400">
          <ChevronRight size={24} />
        </div>
      </div>
    </Link>
  );
};
