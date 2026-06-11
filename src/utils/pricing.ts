export const calculateDiscount = (price: number, discountPercentage: number) => {
  return Math.floor(price * (discountPercentage / 100));
};

export const calculateCartSubtotal = (cartItems: { price: number; quantity: number }[]) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const calculateCouponDiscount = (subtotal: number, couponType: string | null) => {
  if (couponType === 'WELCOME50') return 50;
  if (couponType === 'SAVE10') return Math.floor(subtotal * 0.1);
  return 0;
};

export const calculateDeliveryCharge = (subtotal: number) => {
  if (subtotal === 0) return 0;
  return subtotal > 1000 ? 0 : 50;
};

export const calculatePlatformFee = (subtotal: number) => {
  if (subtotal === 0) return 0;
  return 5;
};

export const calculateTaxPlaceholder = (subtotal: number) => {
  return Math.floor(subtotal * 0.18); // 18% GST example
};

export const calculateFinalAmount = (subtotal: number, discountAmt: number, couponCode: string | null = null) => {
  if (subtotal === 0) return 0;
  const finalSubtotal = subtotal - discountAmt;
  const couponDiscount = calculateCouponDiscount(finalSubtotal, couponCode);
  const delivery = calculateDeliveryCharge(finalSubtotal);
  const platform = calculatePlatformFee(finalSubtotal);
  const tax = calculateTaxPlaceholder(finalSubtotal - couponDiscount);
  return Math.max(0, finalSubtotal - couponDiscount + delivery + platform + tax);
};

export const calculateTotalSavings = (discountAmt: number, couponDiscount: number) => {
  return discountAmt + couponDiscount;
};

export const formatINR = (amount: number) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount);
};
