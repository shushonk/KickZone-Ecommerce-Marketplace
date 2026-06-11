import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { PageHeader } from '../../components/common/PageHeader';

export const SellerLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const sellers = JSON.parse(localStorage.getItem('kickzone_sellers') || '[]');
    const seller = sellers.find((s: any) => s.email === email && s.password === password);
    
    if (seller) {
      localStorage.setItem('kickzone_seller_session', JSON.stringify(seller));
      navigate('/seller/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-md mx-auto px-4">
        <PageHeader title="Seller Login" fallback="/become-seller" className="rounded-xl shadow-sm mb-6" />
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <form onSubmit={handleLogin}>
             <div className="text-center mb-8">
                 <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                 <p className="text-gray-500 text-sm mt-1">Manage your KickZone SellerHub</p>
             </div>
             
             {error && <div className="mb-4 p-3 bg-red-50 text-red-600 border border-red-200 rounded text-sm text-center">{error}</div>}
             
             <div className="space-y-4">
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                   <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border-gray-300 rounded shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="your@email.com" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                   <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border-gray-300 rounded shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" />
                </div>
             </div>
             
             <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 mt-6 rounded hover:bg-blue-700 transition">
               Login to Dashboard
             </button>
             
             <div className="mt-6 text-center text-sm">
                <span className="text-gray-500">Don't have a seller account?</span>{' '}
                <button type="button" onClick={() => navigate('/seller/register')} className="text-blue-600 font-medium hover:underline">
                  Register here
                </button>
             </div>
          </form>
        </div>
      </div>
    </div>
  );
};
