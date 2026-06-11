import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { XCircle } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';

export const PaymentFailurePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reason = location.state?.reason || 'Transaction could not be completed at this time.';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col">
      <PageHeader title="Payment Failed" fallback="/cart" className="rounded shadow-sm mb-6" />
      <div className="flex-1 flex items-center justify-center py-16">
        <div className="bg-white p-8 rounded shadow text-center max-w-md w-full">
          <XCircle size={64} className="text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Payment Failed</h1>
          <p className="text-gray-600 mb-6">{reason}</p>
          
          <div className="space-y-4">
            <button 
              onClick={() => navigate('/checkout/payment', { state: location.state })}
              className="w-full py-3 bg-[#2874f0] text-white rounded shadow-sm font-medium hover:bg-blue-600"
            >
              Retry Payment
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="w-full py-3 bg-white border border-gray-300 text-gray-700 rounded shadow-sm font-medium hover:bg-gray-50"
            >
              Return to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

