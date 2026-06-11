import React from 'react';
import { Link } from 'react-router';
import { CheckCircle2, Zap, Tag, Gift } from 'lucide-react';

export const KickZonePlusPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#2874F0] to-[#1a5fce] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#FFC200] font-bold text-5xl italic">+</span>
            <h1 className="text-4xl font-bold">KickZone Plus</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100 mb-8">
            Experience the ultimate shopping membership. Free deliveries, early access, and incredible rewards.
          </p>
          <button className="bg-[#FFC200] text-black font-bold py-3 px-8 rounded shadow hover:bg-yellow-400 transition-colors">
            Join Now for 499 Coins
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Benefits of KickZone Plus</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-[#2874F0]" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
            <p className="text-gray-600 font-medium text-sm">Get unlimited free deliveries on all F-Assured products.</p>
          </div>

          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Tag className="text-[#FFC200]" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Early Access</h3>
            <p className="text-gray-600 font-medium text-sm">Shop exciting sales and new launches hours before everyone else.</p>
          </div>

          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="text-green-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Double Coins</h3>
            <p className="text-gray-600 font-medium text-sm">Earn 4 coins instead of 2 for every ₹100 spent.</p>
          </div>

          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
            <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-purple-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Priority Support</h3>
            <p className="text-gray-600 font-medium text-sm">Get faster resolutions with our dedicated customer support queue.</p>
          </div>
        </div>
      </div>
      
      {/* Plans */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Membership Plans</h2>
          <div className="bg-white border rounded-lg shadow-sm divide-y">
            <div className="p-6 flex justify-between items-center sm:flex-row flex-col gap-4">
              <div>
                <h3 className="font-bold text-lg mb-1">Plus Premium</h3>
                <p className="text-sm text-gray-500">12 Months</p>
              </div>
              <div className="text-center sm:text-right">
                <p className="font-bold text-xl">₹999</p>
                <p className="text-sm text-gray-500">or 499 Coins</p>
              </div>
              <button className="bg-[#2874F0] text-white px-6 py-2 rounded font-medium">Select Plan</button>
            </div>
            <div className="p-6 flex justify-between items-center sm:flex-row flex-col gap-4">
              <div>
                <h3 className="font-bold text-lg mb-1">Plus Basic</h3>
                <p className="text-sm text-gray-500">3 Months</p>
              </div>
              <div className="text-center sm:text-right">
                <p className="font-bold text-xl">₹399</p>
                <p className="text-sm text-gray-500">or 199 Coins</p>
              </div>
              <button className="border border-[#2874F0] text-[#2874F0] px-6 py-2 rounded font-medium">Select Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
