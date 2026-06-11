import React from 'react';
import { Link, useParams } from 'react-router';
import { Package, Truck, ArrowLeft, RefreshCw, AlertCircle } from 'lucide-react';

export const ReturnsRefundsPage: React.FC<{ view: 'returns' | 'refunds' | 'replacement' }> = ({ view }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/orders" className="text-blue-600 flex items-center gap-1 mb-6 hover:underline text-sm font-medium">
        <ArrowLeft size={16} /> Back to Orders
      </Link>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 capitalize">
            {view === 'returns' ? 'Return Request' : view === 'refunds' ? 'Refund Status' : 'Replacement Request'}
          </h1>
          <p className="text-gray-500 mt-1">Order #KZ-ORD-88219</p>
        </div>

        <div className="p-6">
          {/* Mock content based on view */}
          <div className="flex gap-4 items-start mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="w-20 h-20 bg-gray-200 rounded shrink-0"></div>
            <div>
              <h3 className="font-medium text-gray-900">Premium Wireless Headphones</h3>
              <p className="text-sm text-gray-500 mt-1">Quantity: 1</p>
              <p className="text-sm font-medium mt-1">$299.99</p>
            </div>
          </div>

          {(view === 'returns' || view === 'replacement') && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason for {view}</label>
                <select className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>Select a reason</option>
                  <option>Item is damaged or defective</option>
                  <option>Received wrong item</option>
                  <option>Item does not match description</option>
                  <option>Missing parts or accessories</option>
                  <option>Changed my mind</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
                <textarea rows={3} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Please describe the issue..." />
              </div>

              <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex gap-3 text-sm">
                <AlertCircle size={20} className="shrink-0" />
                <div>
                  <strong>Pickup Scheduled:</strong> Our delivery partner will pick up the item within 24-48 hours. Please keep it packed in its original box.
                </div>
              </div>

              <button className="w-full bg-[#ff9f00] text-white py-3 rounded-lg font-medium hover:bg-[#fb641b] transition">
                Submit Request
              </button>
            </div>
          )}

          {view === 'refunds' && (
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-6 relative">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 z-10">
                      <Package size={16} />
                    </div>
                    <div>
                      <p className="font-medium">Item Picked Up</p>
                      <p className="text-sm text-gray-500">Oct 12, 10:30 AM</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 z-10">
                      <RefreshCw size={16} />
                    </div>
                    <div>
                      <p className="font-medium">Refund Initiated</p>
                      <p className="text-sm text-gray-500">Oct 13, 02:15 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center shrink-0 z-10">
                      <Truck size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Refund Credited to Bank</p>
                      <p className="text-sm text-gray-500">Expected by Oct 16. Refund timeline is 3-5 business days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
