import React, { useState } from 'react';
import { Coins, Wallet, Gift, History, PlusCircle } from 'lucide-react';
import { useWalletStore } from '../store/walletStore';
import { PageHeader } from '../components/common/PageHeader';
import { formatINR } from '../utils/pricing';

export const WalletRewardsPage: React.FC<{ view: 'wallet' | 'rewards' | 'referrals' }> = ({ view }) => {
  const { balance, coins, transactions, addMoney } = useWalletStore();
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [addAmount, setAddAmount] = useState('');

  const filteredTransactions = transactions.filter(t => 
    view === 'wallet' ? t.currency === 'INR' : 
    view === 'rewards' ? t.currency === 'COIN' : 
    t.title.toLowerCase().includes('referral')
  );

  const handleAddMoney = (e: React.FormEvent) => {
    e.preventDefault();
    if (Number(addAmount) > 0) {
      addMoney(Number(addAmount), 'Added via NetBanking/UPI');
      setShowAddMoney(false);
      setAddAmount('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageHeader title={view} fallback="/profile" className="mb-6 rounded-xl shadow-sm capitalize" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className={`p-6 rounded-xl border ${view === 'wallet' ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-100'} shadow-sm text-center cursor-pointer`} onClick={() => window.location.href='/wallet'}>
          <Wallet size={32} className="mx-auto text-blue-600 mb-3" />
          <h3 className="font-medium text-gray-900">KickZone Wallet</h3>
          <p className="text-3xl font-bold text-blue-700 mt-2">{formatINR(balance)}</p>
        </div>
        <div className={`p-6 rounded-xl border ${view === 'rewards' ? 'bg-yellow-50 border-yellow-200' : 'bg-white border-gray-100'} shadow-sm text-center cursor-pointer`} onClick={() => window.location.href='/rewards'}>
          <Coins size={32} className="mx-auto text-yellow-500 mb-3" />
          <h3 className="font-medium text-gray-900">KickZone Coins</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">{coins}</p>
        </div>
        <div className={`p-6 rounded-xl border ${view === 'referrals' ? 'bg-green-50 border-green-200' : 'bg-white border-gray-100'} shadow-sm text-center cursor-pointer`} onClick={() => window.location.href='/referrals'}>
          <Gift size={32} className="mx-auto text-green-500 mb-3" />
          <h3 className="font-medium text-gray-900">Refer & Earn</h3>
          <p className="text-sm text-gray-600 mt-2 font-medium">Invite friends, get coins</p>
        </div>
      </div>

      {view === 'wallet' && (
         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 text-center">
            {showAddMoney ? (
              <form onSubmit={handleAddMoney} className="max-w-xs mx-auto">
                 <input 
                   type="number" 
                   value={addAmount} 
                   onChange={e => setAddAmount(e.target.value)}
                   placeholder="Enter Amount" 
                   className="w-full border-gray-300 rounded shadow-sm p-3 mb-4 text-center text-lg font-bold"
                 />
                 <div className="flex gap-2">
                   <button type="button" onClick={() => setShowAddMoney(false)} className="flex-1 bg-gray-100 px-4 py-2 rounded font-medium hover:bg-gray-200">Cancel</button>
                   <button type="submit" className="flex-1 bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700">Add</button>
                 </div>
              </form>
            ) : (
              <button 
                onClick={() => setShowAddMoney(true)}
                className="bg-blue-50 text-blue-700 border border-blue-200 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 mx-auto hover:bg-blue-100 transition"
              >
                <PlusCircle size={20} /> Add Money to Wallet
              </button>
            )}
         </div>
      )}

      {view === 'referrals' && (
         <div className="bg-green-50 rounded-xl shadow-sm border border-green-200 p-6 mb-8 text-center">
             <Gift size={48} className="mx-auto text-green-500 mb-4" />
             <h2 className="text-2xl font-bold text-green-800 mb-2">Refer a Friend, Earn 500 Coins</h2>
             <p className="text-green-700 mb-6 max-w-md mx-auto">Share your unique referral link. When they make their first purchase, you both get 500 KickZone Coins!</p>
             <div className="bg-white p-3 rounded border border-green-200 font-mono text-lg font-bold text-gray-800 flex justify-between items-center max-w-xs mx-auto">
               <span>KCKZ-REF-99X2</span>
               <button className="text-blue-600 text-sm hover:underline" onClick={() => alert('Copied to clipboard!')}>Copy</button>
             </div>
         </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <History size={20} /> {view === 'wallet' ? 'Passbook' : 'Activity History'}
        </h2>
        
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <History size={32} className="text-gray-400" />
            </div>
            <p className="text-lg font-bold text-gray-800 mb-1">No transactions yet</p>
            <p className="text-sm text-gray-500">Your {view} activity will appear here.</p>
            {view === 'wallet' && (
               <button onClick={() => setShowAddMoney(true)} className="mt-4 text-blue-600 font-bold hover:underline">Add money now</button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTransactions.map(t => (
               <div key={t.id} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                 <div>
                    <p className="font-medium text-gray-900">{t.title}</p>
                    <p className="text-sm text-gray-500">{new Date(t.date).toLocaleDateString()}</p>
                 </div>
                 <span className={`font-bold ${t.type === 'credit' ? 'text-green-600' : 'text-gray-900'}`}>
                   {t.type === 'credit' ? '+' : '-'} {t.currency === 'INR' ? formatINR(t.amount) : `${t.amount} Coins`}
                 </span>
               </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

