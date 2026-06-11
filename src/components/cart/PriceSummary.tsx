import React from 'react';
import { useStore } from '../../store/useStore';
import { 
  calculateCartSubtotal, 
  calculateDiscount, 
  calculateCouponDiscount, 
  calculateDeliveryCharge, 
  calculatePlatformFee, 
  calculateTaxPlaceholder, 
  calculateFinalAmount, 
  formatINR 
} from '../../utils/pricing';

interface PriceSummaryProps {
  walletDeduction?: number;
  coinDeduction?: number;
}

export const PriceSummary: React.FC<PriceSummaryProps> = ({ walletDeduction = 0, coinDeduction = 0 }) => {
  const { cart, appliedCoupon } = useStore();

  const rawSubtotal = calculateCartSubtotal(cart);
  const totalDiscount = cart.reduce((acc, item) => acc + calculateDiscount(item.price, item.discountPercentage) * item.quantity, 0);
  const finalSubtotal = rawSubtotal - totalDiscount;
  
  const couponDiscount = calculateCouponDiscount(finalSubtotal, appliedCoupon);
  const delivery = calculateDeliveryCharge(finalSubtotal);
  const platform = calculatePlatformFee(finalSubtotal);
  const tax = calculateTaxPlaceholder(finalSubtotal - couponDiscount);
  
  const baseFinalAmount = calculateFinalAmount(rawSubtotal, totalDiscount, appliedCoupon);
  const finalAmount = Math.max(0, baseFinalAmount - walletDeduction - coinDeduction);
  const totalSaved = totalDiscount + couponDiscount;

  if (cart.length === 0) return null;

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold border-b border-gray-100 pb-3 mb-4 text-gray-800">Price Details</h3>
      
      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Price ({cart.length} items)</span>
          <span>{formatINR(rawSubtotal)}</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>-{formatINR(totalDiscount)}</span>
        </div>
        {appliedCoupon && (
          <div className="flex justify-between text-green-600">
            <span>Coupon ({appliedCoupon})</span>
            <span>-{formatINR(couponDiscount)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span className={delivery === 0 ? "text-green-600" : ""}>
            {delivery === 0 ? 'Free' : formatINR(delivery)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Platform Fee</span>
          <span>{formatINR(platform)}</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 pb-3">
          <span>Estimated Tax</span>
          <span>{formatINR(tax)}</span>
        </div>
        
        {walletDeduction > 0 && (
           <div className="flex justify-between text-blue-600">
             <span>Wallet Applied</span>
             <span>-{formatINR(walletDeduction)}</span>
           </div>
        )}
        
        {coinDeduction > 0 && (
           <div className="flex justify-between text-yellow-600">
             <span>Coins Applied</span>
             <span>-{formatINR(coinDeduction)}</span>
           </div>
        )}

        <div className="flex justify-between text-lg font-bold text-gray-900 pt-1">
          <span>Total Payable</span>
          <span>{formatINR(finalAmount)}</span>
        </div>
      </div>
      
      {totalSaved > 0 && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium text-center">
          You will save {formatINR(totalSaved)} on this order
        </div>
      )}
    </div>
  );
};

