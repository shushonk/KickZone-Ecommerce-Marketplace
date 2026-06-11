import React from 'react';
import { useNavigate } from 'react-router';
import { useStore } from '../store/useStore';
import { User, MapPin, Package, Heart, Tag, Bell, Moon, LogOut, Wallet, Coins, CornerUpLeft, LifeBuoy, Settings } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';

export const ProfileSettingsPage: React.FC = () => {
  const { user, setUser, theme, toggleTheme } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const OptionRow = ({ icon, title, onClick }: { icon: React.ReactNode, title: string, onClick?: () => void }) => (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition text-left"
    >
      <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
        {icon}
      </div>
      <span className="flex-1 font-medium text-gray-800">{title}</span>
    </button>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <PageHeader title="My Account" fallback="/" className="rounded shadow-sm mb-6" />
      
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6 flex flex-col md:flex-row items-center border-b border-gray-200">
        <div className="p-6 flex items-center gap-6 bg-gray-50 flex-1 w-full md:w-auto">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
             <User size={40} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user?.name || 'Guest User'}</h2>
            <p className="text-gray-500">{user?.email || 'Login to sync data'}</p>
            {user?.phone && <p className="text-gray-500 text-sm mt-1">{user.phone}</p>}
          </div>
        </div>
        <div className="p-6 flex gap-4 w-full md:w-auto overflow-x-auto bg-white border-t md:border-t-0 md:border-l border-gray-100 items-center justify-start md:justify-end">
           <button onClick={() => navigate('/wallet')} className="text-center bg-blue-50 p-3 rounded-xl min-w-[80px]">
             <Wallet size={24} className="mx-auto text-blue-600 mb-1" />
             <div className="text-xs font-bold text-blue-800">$145</div>
           </button>
           <button onClick={() => navigate('/rewards')} className="text-center bg-yellow-50 p-3 rounded-xl min-w-[80px]">
             <Coins size={24} className="mx-auto text-yellow-600 mb-1" />
             <div className="text-xs font-bold text-yellow-800">1,250</div>
           </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <h3 className="px-6 py-4 font-bold text-gray-900 bg-gray-50 border-b border-gray-100">Orders & Finance</h3>
        <div className="flex flex-col">
          <OptionRow icon={<Package size={20} />} title="My Orders & Tracking" onClick={() => navigate('/orders')} />
          <OptionRow icon={<CornerUpLeft size={20} />} title="Returns & Refunds" onClick={() => navigate('/returns')} />
          <OptionRow icon={<Wallet size={20} />} title="Wallet & Gifts" onClick={() => navigate('/wallet')} />
          <OptionRow icon={<Coins size={20} />} title="KickZone Coins & Rewards" onClick={() => navigate('/rewards')} />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <h3 className="px-6 py-4 font-bold text-gray-900 bg-gray-50 border-b border-gray-100">Account Settings</h3>
        <div className="flex flex-col">
          <OptionRow icon={<MapPin size={20} />} title="Saved Addresses" onClick={() => navigate('/checkout/address')} />
          <OptionRow icon={<Heart size={20} />} title="Wishlist" onClick={() => navigate('/wishlist')} />
          <OptionRow icon={<Tag size={20} />} title="My Coupons" onClick={() => navigate('/coupons')} />
          <OptionRow icon={<Settings size={20} />} title="Edit Profile & Privacy" />
          <OptionRow icon={<Bell size={20} />} title="Notification Preferences" onClick={() => navigate('/notifications')} />
          
          <div className="w-full flex items-center justify-between gap-4 p-4 hover:bg-gray-50 border-b border-gray-100 transition text-left">
            <div className="flex items-center gap-4">
               <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                 <Moon size={20} />
               </div>
               <span className="font-medium text-gray-800">Dark Theme</span>
            </div>
            <button 
              onClick={toggleTheme}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <h3 className="px-6 py-4 font-bold text-gray-900 bg-gray-50 border-b border-gray-100">Help & Support</h3>
        <div className="flex flex-col">
          <OptionRow icon={<LifeBuoy size={20} />} title="Help Center" onClick={() => navigate('/help-center')} />
          <OptionRow icon={<LifeBuoy size={20} />} title="Create Support Ticket" onClick={() => navigate('/support-ticket')} />
        </div>
      </div>
      
      <button 
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
};
