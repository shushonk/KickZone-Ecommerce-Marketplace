import React from 'react';
import { useParams, Link } from 'react-router';
import { useStore } from '../store/useStore';
import { TrackingTimeline } from '../components/orders/TrackingTimeline';
import { formatINR } from '../utils/pricing';
import { Package, Download, XCircle, RotateCcw, Star } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';

export const OrderDetailPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { orders, updateOrderStatus, addToCart } = useStore();
  
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Order not found</h2>
        <Link to="/orders" className="text-blue-600 hover:underline">Return to Orders</Link>
      </div>
    );
  }

  const handleReorder = () => {
    order.items.forEach(item => {
      addToCart({
        id: item.productId,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        category: 'Reordered',
        description: '',
        discountPercentage: 0,
        rating: 0
      });
    });
    // Normally we'd navigate to cart, but maybe just a toast is better
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageHeader title={`Order #${order.id}`} fallback="/orders" className="rounded shadow-sm mb-6" />

      <div className="bg-white border text-gray-800 border-gray-200 rounded-xl overflow-hidden mb-6">
        <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Order #{order.id}</h1>
            <p className="text-sm text-gray-500">Placed on {new Date(order.date).toLocaleDateString()}</p>
          </div>
          <button className="flex justify-center items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-100 transition">
            <Download size={16} /> Invoice
          </button>
        </div>

        <div className="p-4 sm:p-6 border-b border-gray-200">
          <TrackingTimeline currentStatus={order.status} />
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="font-semibold text-lg mb-4">Items in this order</h3>
          <div className="space-y-4">
            {order.items.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-4 border-b border-gray-100 last:border-0">
                <div className="w-full sm:w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center p-2 border border-gray-100">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">Quantity: {item.quantity}</p>
                  <p className="font-medium mt-2">{formatINR(item.price * item.quantity)}</p>
                </div>
                <div className="flex flex-col gap-2 justify-center mt-4 sm:mt-0">
                   <button className="flex items-center justify-center gap-1 text-sm font-medium text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition">
                     <Star size={16} /> Rate Product
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-lg border-b pb-3 mb-4">Delivery Details</h3>
          {order.deliveryAddress ? (
            <>
              <p className="font-medium text-gray-900">{order.deliveryAddress.fullName}</p>
              <p className="text-sm text-gray-600 mt-1">{order.deliveryAddress.streetAppt}</p>
              <p className="text-sm text-gray-600">{order.deliveryAddress.city}, {order.deliveryAddress.state} - {order.deliveryAddress.pincode}</p>
              <p className="text-sm text-gray-800 font-medium mt-3">Phone: {order.deliveryAddress.phone}</p>
            </>
          ) : (
            <p className="text-sm text-gray-500">No address details available.</p>
          )}
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-lg border-b pb-3 mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium uppercase">{order.paymentMethod}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t mt-4">
              <span>Total Amount</span>
              <span>{formatINR(order.totalAmount)}</span>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col gap-3">
            <button 
              onClick={handleReorder}
              className="w-full flex justify-center items-center gap-2 py-2.5 bg-gray-900 font-medium text-white rounded-lg hover:bg-gray-800 transition"
            >
              <RotateCcw size={18} /> Reorder
            </button>
            {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
               <button 
                onClick={() => updateOrderStatus(order.id, 'Cancelled')}
                className="w-full flex justify-center items-center gap-2 py-2.5 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition"
               >
                 <XCircle size={18} /> Cancel Order
               </button>
            )}
             {order.status === 'Delivered' && (
               <button 
                className="w-full flex justify-center items-center gap-2 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
               >
                 <Package size={18} /> Return / Replace
               </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
