import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuthStore } from '../../store/authStore';

export const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isGuest } = useAuthStore();
  const location = useLocation();

  if (!user && !isGuest) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user is guest, they can browse, but maybe block checkout
  if (!user && isGuest && (location.pathname.includes('/checkout/payment') || location.pathname.includes('/profile') || location.pathname.includes('/orders'))) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
