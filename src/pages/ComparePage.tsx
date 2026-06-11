import React from 'react';
import { DUMMY_PRODUCTS } from '../utils/dummyData';
import { Star, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router';

export const ComparePage: React.FC = () => {
  // Grab two products for comparison mock
  const p1 = DUMMY_PRODUCTS[0];
  const p2 = DUMMY_PRODUCTS[1];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Compare Products</h1>
      
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden overflow-x-auto shadow-sm">
        <table className="w-full text-left min-w-[800px]">
          <tbody>
            <tr>
              <td className="p-4 border-b border-gray-200 w-1/4 bg-gray-50 border-r align-top">
                <h3 className="font-bold mb-2">Compare</h3>
                <p className="text-sm text-gray-500">Pick products to see their specifications side-by-side.</p>
              </td>
              {[p1, p2].map(prod => (
                <td key={prod.id} className="p-6 border-b border-gray-200 w-[37.5%] border-r last:border-r-0 align-top">
                  <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-4 rounded-lg mb-4">
                    <img src={prod.imageUrl} alt={prod.name} className="max-h-40 object-contain" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{prod.name}</h3>
                  <div className="flex items-center gap-1 text-sm mb-3">
                    <span className="bg-green-600 text-white px-1.5 py-0.5 rounded text-xs font-bold flex items-center gap-1">4.5 <Star size={10} className="fill-white"/></span>
                    <span className="text-gray-500">(1.2k reviews)</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-xl font-bold text-gray-900">${prod.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${(prod.price * 1.2).toFixed(2)}</span>
                    <span className="text-sm text-green-600 font-medium ml-2">20% off</span>
                  </div>
                  <button className="w-full bg-[#ff9f00] text-white py-2 rounded-sm font-medium hover:bg-[#fb641b] transition shadow-sm">
                    Add to Cart
                  </button>
                </td>
              ))}
            </tr>
            
            {/* Specs */}
            <tr>
              <td className="p-4 border-b border-gray-200 bg-gray-50 font-medium border-r">Brand</td>
              <td className="p-4 border-b border-gray-200 border-r">Generic Brand</td>
              <td className="p-4 border-b border-gray-200">TechGuru</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-200 bg-gray-50 font-medium border-r">Delivery</td>
              <td className="p-4 border-b border-gray-200 border-r text-green-600">Free Delivery by Tomorrow</td>
              <td className="p-4 border-b border-gray-200 text-green-600">Free Delivery, Standard</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-200 bg-gray-50 font-medium border-r">Warranty</td>
              <td className="p-4 border-b border-gray-200 border-r">1 Year Manufacturer Warranty</td>
              <td className="p-4 border-b border-gray-200">6 Months Service Warranty</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-200 bg-gray-50 font-medium border-r">Seller</td>
              <td className="p-4 border-b border-gray-200 border-r">
                <Link to="/seller/1" className="text-blue-600 hover:underline">TechCentral Official</Link>
              </td>
              <td className="p-4 border-b border-gray-200">
                <Link to="/seller/2" className="text-blue-600 hover:underline">ElectroWorld</Link>
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-200 bg-gray-50 font-medium border-r">Return Policy</td>
              <td className="p-4 border-b border-gray-200 border-r flex gap-2 items-center"><CheckCircle size={16} className="text-green-500"/> 7 Days Replacement</td>
              <td className="p-4 border-b border-gray-200 flex gap-2 items-center"><CheckCircle size={16} className="text-green-500"/> 7 Days Replacement</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
