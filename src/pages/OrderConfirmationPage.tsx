import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router';
import { CheckCircle, Wallet, Coins } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { formatINR } from '../utils/pricing';

export const OrderConfirmationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId;
  const walletDeduction = location.state?.walletDeduction || 0;
  const coinDeduction = location.state?.coinDeduction || 0;

  if (!orderId) {
    navigate('/');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader title="Order Confirmation" fallback="/orders" className="rounded shadow-sm mb-6" />
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle size={80} className="text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for shopping with KickZone. Your order <span className="font-semibold text-gray-900">{orderId}</span> has been confirmed.
        </p>
        
        {(walletDeduction > 0 || coinDeduction > 0) && (
          <div className="bg-gray-100 rounded-xl p-6 mb-8 max-w-md mx-auto text-left">
            <h3 className="font-bold text-gray-800 mb-3 text-center">Payment Breakdown</h3>
            {walletDeduction > 0 && (
              <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm border border-gray-200 mb-2 mt-2">
                <span className="flex items-center gap-2"><Wallet size={16} className="text-blue-600" /> Wallet Deducted</span>
                <span className="font-bold text-blue-600">-{formatINR(walletDeduction)}</span>
              </div>
            )}
            {coinDeduction > 0 && (
              <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm border border-gray-200">
                <span className="flex items-center gap-2"><Coins size={16} className="text-yellow-600" /> Coins Redeemed</span>
                <span className="font-bold text-yellow-600">-{coinDeduction}</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to={`/orders/${orderId}`}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            View Order Details
          </Link>
          <Link 
            to="/"
            className="px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};


