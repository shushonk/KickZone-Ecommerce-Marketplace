import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Package, ShoppingBag, IndianRupee, AlertTriangle, LogOut } from 'lucide-react';

export const SellerDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [seller, setSeller] = useState<any>(null);

  useEffect(() => {
    const session = localStorage.getItem('kickzone_seller_session');
    if (session) {
      setSeller(JSON.parse(session));
    } else {
      navigate('/seller/login');
    }
  }, [navigate]);

  if (!seller) return null;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-4">
          <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded font-bold uppercase text-sm">KickZone SellerHub</div>
          <h1 className="text-xl font-bold">{seller.businessName}</h1>
        </div>
        <button 
          onClick={() => {
            localStorage.removeItem('kickzone_seller_session');
            navigate('/become-seller');
          }}
          className="flex items-center gap-2 text-blue-200 hover:text-white transition"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      {seller.status === 'pending' && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-6 mt-6 rounded shadow-sm">
          <div className="flex items-center">
            <AlertTriangle className="text-yellow-400 mr-3" />
            <div>
              <p className="font-bold text-yellow-800">Account Under Review</p>
              <p className="text-sm text-yellow-700">Your seller account is currently pending admin approval. You can prepare your catalog in the meantime.</p>
            </div>
          </div>
        </div>
      )}

      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
               <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
               <h3 className="text-2xl font-bold text-gray-900">₹0.00</h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <IndianRupee size={24} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
               <p className="text-gray-500 text-sm font-medium">Total Orders</p>
               <h3 className="text-2xl font-bold text-gray-900">0</h3>
            </div>
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
              <ShoppingBag size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
               <p className="text-gray-500 text-sm font-medium">Pending Orders</p>
               <h3 className="text-2xl font-bold text-gray-900">0</h3>
            </div>
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
              <ShoppingBag size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
               <p className="text-gray-500 text-sm font-medium">Active Products</p>
               <h3 className="text-2xl font-bold text-gray-900">0</h3>
            </div>
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
              <Package size={24} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="font-bold text-gray-800">Recent Orders</h2>
              <button className="text-blue-600 text-sm font-medium">View All</button>
            </div>
            <div className="p-12 text-center text-gray-500">
               No orders received yet. Once your account is approved and products are live, orders will appear here.
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h2 className="font-bold text-gray-800">Quick Actions</h2>
            </div>
            <div className="p-4 space-y-3">
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg font-medium transition">Add New Product</button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg font-medium transition">Update Inventory</button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg font-medium transition">Seller Analytics</button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg font-medium transition">Help Center</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
