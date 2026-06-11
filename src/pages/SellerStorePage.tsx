import React from 'react';
import { Star, MapPin, Search } from 'lucide-react';
import { DUMMY_PRODUCTS } from '../utils/dummyData';
import { Link } from 'react-router';

export const SellerStorePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Seller Header */}
      <div className="bg-white border-b border-gray-200 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md">
            TC
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
              TechCentral Official
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">Top Seller</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1"><MapPin size={16}/> New York, USA</span>
              <span>Joined: 2021</span>
              <span>Products: 1,204</span>
              <span className="flex items-center gap-1"><Star size={16} className="text-yellow-400 fill-yellow-400"/> 4.8 Seller Rating</span>
            </div>
            <div className="mt-4 flex gap-3 justify-center md:justify-start">
               <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">Follow +</button>
               <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition">Contact Seller</button>
            </div>
          </div>
        </div>
      </div>

      {/* Seller Policies / Info */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <div className="md:col-span-1">
             <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm sticky top-24">
               <h3 className="font-bold text-gray-900 mb-4">Seller Policies</h3>
               <ul className="text-sm text-gray-600 space-y-3">
                 <li><strong>Returns:</strong> 30 Days easy returns</li>
                 <li><strong>Shipping:</strong> Standard 2-3 Days</li>
                 <li><strong>Tax:</strong> Included in price</li>
               </ul>
               
               <h3 className="font-bold text-gray-900 mt-6 mb-4">Search Store</h3>
               <div className="relative">
                 <input type="text" placeholder="Search products..." className="w-full border border-gray-300 rounded-lg pl-9 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                 <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
               </div>
             </div>
           </div>

           <div className="md:col-span-3">
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">All Products</h2>
                <select className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Popularity</option>
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                </select>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {DUMMY_PRODUCTS.slice(0, 6).map(prod => (
                 <Link to={`/product/${prod.id}`} key={prod.id} className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition group">
                   <div className="aspect-square bg-gray-50 flex items-center justify-center mb-3">
                     <img src={prod.imageUrl} alt={prod.name} className="h-32 object-contain group-hover:scale-105 transition" />
                   </div>
                   <h3 className="text-sm font-medium text-gray-900 truncate">{prod.name}</h3>
                   <p className="font-bold mt-1">${prod.price.toFixed(2)}</p>
                 </Link>
               ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
