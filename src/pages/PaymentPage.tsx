import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useStore } from '../store/useStore';
import { useAuthStore } from '../store/authStore';
import { useWalletStore } from '../store/walletStore';
import { PriceSummary } from '../components/cart/PriceSummary';
import { PaymentMethodCard } from '../components/checkout/PaymentMethodCard';
import { CreditCard, Wallet as WalletIcon, Smartphone, Banknote, ShieldCheck, Coins } from 'lucide-react';
import { calculateCartSubtotal, calculateDiscount, calculateCouponDiscount, calculateFinalAmount, formatINR } from '../utils/pricing';
import { PageHeader } from '../components/common/PageHeader';

export const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, addresses, clearCart, appliedCoupon, addOrder } = useStore();
  const { user } = useAuthStore();
  const { balance: walletBalance, coins: coinBalance, deductCoins, deductMoney } = useWalletStore();
  
  const [selectedPayment, setSelectedPayment] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [paymentError, setPaymentError] = useState('');
  
  // Wallet states
  const [useWallet, setUseWallet] = useState(false);
  const [useCoins, setUseCoins] = useState(false);
  
  const addressId = location.state?.addressId;
  const deliveryAddress = addresses.find(a => a.id === addressId);

  if (cart.length === 0 || !deliveryAddress) {
    navigate('/cart');
    return null;
  }

  const rawSubtotal = calculateCartSubtotal(cart);
  const totalDiscount = cart.reduce((acc, item) => acc + calculateDiscount(item.price, item.discountPercentage) * item.quantity, 0);
  const baseFinalAmount = calculateFinalAmount(rawSubtotal, totalDiscount, appliedCoupon);

  // Calculate deductions
  const maxCoinsUsable = Math.min(coinBalance, Math.floor(baseFinalAmount * 0.1)); // Max 10% of order value
  let coinDeduction = useCoins ? maxCoinsUsable : 0;
  
  let remainingAfterCoins = baseFinalAmount - coinDeduction;
  let walletDeduction = useWallet ? Math.min(walletBalance, remainingAfterCoins) : 0;
  
  const finalPayable = Math.max(0, remainingAfterCoins - walletDeduction);

  const handlePlaceOrder = () => {
    if (finalPayable > 0) {
      if (selectedPayment === 'upi' && !upiId.includes('@')) {
        setPaymentError('Please enter a valid UPI ID');
        return;
      }
      if (selectedPayment === 'card' && cardNumber.length < 16) {
        setPaymentError('Please enter a valid 16-digit card number');
        return;
      }
    }

    setPaymentError('');
    setIsProcessing(true);

    setTimeout(() => {
      // Simulate failure scenario
      if (finalPayable > 0 && selectedPayment === 'card' && cardNumber === '0000000000000000') {
        setIsProcessing(false);
        navigate('/payment-failure', { state: { reason: 'Card declined by bank' } });
        return;
      }

      // Deduct wallet/coins
      if (walletDeduction > 0) {
        deductMoney(walletDeduction, 'Paid for Order');
      }
      if (coinDeduction > 0) {
        deductCoins(coinDeduction, 'Redeemed on Order');
      }

      const newOrder = {
        id: `OD${Math.floor(Date.now() * Math.random()).toString().substring(0, 10)}`,
        date: new Date().toISOString(),
        status: 'Ordered' as const,
        totalAmount: baseFinalAmount,
        items: cart.map(c => ({
          id: c.id,
          productId: c.id,
          name: c.name,
          price: c.price,
          quantity: c.quantity,
          imageUrl: c.imageUrl
        })),
        deliveryAddress,
        paymentMethod: finalPayable === 0 ? 'wallet' : selectedPayment,
        transactionId: `TXN${Date.now()}`
      };

      addOrder(newOrder);
      clearCart();
      navigate('/order/confirmation', { state: { orderId: newOrder.id, walletDeduction, coinDeduction } });
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <PageHeader title="Payment Options" fallback="/checkout/address" className="rounded shadow-sm mb-6" />
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          
          {paymentError && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {paymentError}
            </div>
          )}

          <div className="mb-6 space-y-3">
             <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <WalletIcon className="text-blue-600" />
                  <div>
                    <p className="font-bold">KickZone Wallet Balance</p>
                    <p className="text-sm text-gray-500">{formatINR(walletBalance)} available</p>
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-blue-600" checked={useWallet} onChange={e => setUseWallet(e.target.checked)} disabled={walletBalance === 0} />
                  <span className="font-medium text-gray-700">Use Wallet</span>
                </label>
             </div>

             <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Coins className="text-yellow-500" />
                  <div>
                    <p className="font-bold">KickZone Coins</p>
                    <p className="text-sm text-gray-500">{coinBalance} coins (Max {maxCoinsUsable} usable)</p>
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-yellow-500" checked={useCoins} onChange={e => setUseCoins(e.target.checked)} disabled={maxCoinsUsable === 0} />
                  <span className="font-medium text-gray-700">Use Coins</span>
                </label>
             </div>
          </div>
          
          {finalPayable > 0 ? (
            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-gray-900 mb-2">Other Payment Methods to pay {formatINR(finalPayable)}</h3>
              <div className={`border rounded-lg ${selectedPayment === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <PaymentMethodCard id="upi" title="UPI" description="Pay via any UPI app" icon={<Smartphone className="text-purple-600" />} selected={selectedPayment === 'upi'} onSelect={() => setSelectedPayment('upi')} />
                {selectedPayment === 'upi' && (
                  <div className="p-4 border-t border-blue-100 pl-16">
                    <p className="text-sm text-gray-600 mb-2">Enter your UPI ID</p>
                    <input type="text" value={upiId} onChange={e => setUpiId(e.target.value)} placeholder="username@upi" className="w-full max-w-sm px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                )}
              </div>
              
              <div className={`border rounded-lg ${selectedPayment === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <PaymentMethodCard id="card" title="Credit / Debit Card" description="Visa, MasterCard, RuPay & more" icon={<CreditCard className="text-blue-600" />} selected={selectedPayment === 'card'} onSelect={() => setSelectedPayment('card')} />
                {selectedPayment === 'card' && (
                  <div className="p-4 border-t border-blue-100 pl-16 space-y-4">
                    <input type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))} placeholder="Card Number" className="w-full max-w-sm px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500" />
                    <div className="flex gap-4 max-w-sm">
                      <input type="text" placeholder="MM/YY" className="w-1/2 px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500" />
                      <input type="password" placeholder="CVV" maxLength={3} className="w-1/2 px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <p className="text-xs text-gray-500 flex items-center gap-1"><ShieldCheck size={14} className="text-green-600" /> Your card details are securely mocked for this demo.</p>
                  </div>
                )}
              </div>

              <PaymentMethodCard id="cod" title="Cash on Delivery" description="Pay at your doorstep" icon={<Banknote className="text-green-600" />} selected={selectedPayment === 'cod'} onSelect={() => setSelectedPayment('cod')} />
            </div>
          ) : (
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center mb-8">
               <ShieldCheck className="mx-auto text-green-600 mb-2" size={48} />
               <h3 className="text-xl font-bold text-green-800">Payment Covered Completely</h3>
               <p className="text-green-700">Your wallet and coins cover the entire order amount.</p>
            </div>
          )}
        </div>
        
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <PriceSummary walletDeduction={walletDeduction} coinDeduction={coinDeduction} />
            <button
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className={`w-full mt-4 text-white py-4 rounded-sm font-bold text-lg shadow-md transition-colors ${
                isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FB641B] hover:bg-[#e05a18]'
              }`}
            >
              {isProcessing ? 'PROCESSING...' : `PAY ${formatINR(finalPayable)}`}
            </button>
            <div className="mt-4 flex items-start gap-2 text-xs text-gray-500 justify-center">
              <ShieldCheck size={24} className="text-gray-400" />
              <span>Safe and Secure Payments. Easy returns. 100% Authentic products.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
