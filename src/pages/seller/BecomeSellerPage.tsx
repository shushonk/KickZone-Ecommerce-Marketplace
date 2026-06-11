import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Package, TrendingUp, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';

export const BecomeSellerPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="bg-blue-900 text-white pb-20 pt-8 px-4 text-center">
        <div className="max-w-7xl mx-auto mb-8 text-left">
           <PageHeader title="Seller Portal" fallback="/" className="bg-transparent text-white border-none shadow-none" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sell online to <span className="text-yellow-400">millions of customers</span></h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
          Start your selling journey on KickZone and grow your business across India. Zero setup cost, secure payments, and dedicated support.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate('/seller/register')}
            className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2"
          >
            Start Selling <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => navigate('/seller/login')}
            className="bg-white/10 border-2 border-white/20 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/20 transition"
          >
            Login to Dashboard
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Sell on KickZone?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Reach Customers Across India</h3>
            <p className="text-gray-600">Access millions of engaged shoppers ready to buy your products daily.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Dashboard & Inventory</h3>
            <p className="text-gray-600">Manage orders, inventory, and listings seamlessly through our seller dashboard.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Get your funds securely deposited directly into your bank account on time.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Growth Analytics</h3>
            <p className="text-gray-600">Use built-in data insights to track your sales performance and grow your brand.</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
           <h3 className="text-2xl font-bold mb-6 text-center">Steps to start selling</h3>
           <div className="flex flex-col md:flex-row gap-6 text-center">
              <div className="flex-1">
                 <div className="text-4xl font-black text-gray-200 mb-2">1</div>
                 <h4 className="font-bold mb-2">Register</h4>
                 <p className="text-gray-600 text-sm">Provide your GST, PAN, and Bank details to open your account.</p>
              </div>
              <div className="flex-1">
                 <div className="text-4xl font-black text-gray-200 mb-2">2</div>
                 <h4 className="font-bold mb-2">List Products</h4>
                 <p className="text-gray-600 text-sm">Upload your product catalog and set attractive pricing.</p>
              </div>
              <div className="flex-1">
                 <div className="text-4xl font-black text-gray-200 mb-2">3</div>
                 <h4 className="font-bold mb-2">Receive Orders</h4>
                 <p className="text-gray-600 text-sm">Pack the ordered items and keep them ready for dispatch.</p>
              </div>
              <div className="flex-1">
                 <div className="text-4xl font-black text-gray-200 mb-2">4</div>
                 <h4 className="font-bold mb-2">Get Paid</h4>
                 <p className="text-gray-600 text-sm">Payments are transferred directly to your bank account securely.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

