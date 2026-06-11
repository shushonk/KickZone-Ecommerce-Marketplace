import React, { useState } from 'react';
import { Plane, Bus, Hotel, MapPin, Calendar, Users } from 'lucide-react';
import { DUMMY_PRODUCTS } from '../utils/dummyData';
import { ProductCard } from '../components/product/ProductCard';

export const KickZoneTravelPage: React.FC = () => {
  const [tab, setTab] = useState('flights');
  const travelProducts = DUMMY_PRODUCTS.filter(p => p.category === 'Travel' || p.category === 'Accessories').slice(0, 16);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Banner */}
      <div className="bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80')] bg-cover bg-center h-[350px] relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">KickZone Travel</h1>
          <p className="text-lg md:text-xl font-medium drop-shadow-md">Book Flights, Hotels & Buses easily.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg border p-6 mb-12">
          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button onClick={() => setTab('flights')} className={`flex items-center gap-2 pb-3 px-6 font-semibold border-b-2 transition-colors ${tab === 'flights' ? 'border-[#2874F0] text-[#2874F0]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              <Plane size={20} /> Flights
            </button>
            <button onClick={() => setTab('hotels')} className={`flex items-center gap-2 pb-3 px-6 font-semibold border-b-2 transition-colors ${tab === 'hotels' ? 'border-[#2874F0] text-[#2874F0]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              <Hotel size={20} /> Hotels
            </button>
            <button onClick={() => setTab('bus')} className={`flex items-center gap-2 pb-3 px-6 font-semibold border-b-2 transition-colors ${tab === 'bus' ? 'border-[#2874F0] text-[#2874F0]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              <Bus size={20} /> Bus
            </button>
          </div>

          {/* Booking placeholder form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border rounded p-3">
              <span className="text-xs text-gray-500 font-bold block mb-1 uppercase">From</span>
              <div className="flex items-center gap-2">
                 <MapPin size={18} className="text-gray-400" />
                 <input type="text" placeholder="Delhi (DEL)" className="w-full outline-none font-medium" />
              </div>
            </div>
            <div className="border rounded p-3">
              <span className="text-xs text-gray-500 font-bold block mb-1 uppercase">To</span>
              <div className="flex items-center gap-2">
                 <MapPin size={18} className="text-gray-400" />
                 <input type="text" placeholder="Mumbai (BOM)" className="w-full outline-none font-medium" />
              </div>
            </div>
            <div className="border rounded p-3">
              <span className="text-xs text-gray-500 font-bold block mb-1 uppercase">Depart</span>
              <div className="flex items-center gap-2">
                 <Calendar size={18} className="text-gray-400" />
                 <input type="date" className="w-full outline-none font-medium text-gray-700" />
              </div>
            </div>
            <div className="border rounded p-3">
              <span className="text-xs text-gray-500 font-bold block mb-1 uppercase">Travellers & Class</span>
              <div className="flex items-center gap-2">
                 <Users size={18} className="text-gray-400" />
                 <input type="text" placeholder="1 Adult, Economy" className="w-full outline-none font-medium" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="bg-[#FFC200] text-black font-bold uppercase py-3 px-12 rounded shadow hover:bg-yellow-400">
              Search {tab === 'flights' ? 'Flights' : tab === 'hotels' ? 'Hotels' : 'Buses'}
            </button>
          </div>
        </div>

        {/* Travel Store */}
        <div className="mb-8">
           <h2 className="text-2xl font-bold mb-6">Travel Accessories Store</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {travelProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
           </div>
        </div>
      </div>
    </div>
  );
};
