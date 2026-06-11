import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// Layout & Common
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Auth Guard
import { AuthGuard } from './components/auth/AuthGuard';

// Pages
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { OtpPage } from './pages/OtpPage';
import { ProductListingPage } from './pages/ProductListingPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { AddressPage } from './pages/AddressPage';
import { PaymentPage } from './pages/PaymentPage';
import { PaymentFailurePage } from './pages/PaymentFailurePage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { OrderHistoryPage } from './pages/OrderHistoryPage';
import { OrderDetailPage } from './pages/OrderDetailPage';
import { ProfileSettingsPage } from './pages/ProfileSettingsPage';
import { WishlistPage } from './pages/WishlistPage';
import { SimplePlaceholder } from './pages/Placeholders';
import { AIAssistantPage } from './pages/AIAssistantPage';
import { AdminApp } from './pages/AdminDashboard';
import { PrivacyPage } from './pages/info/PrivacyPage';
import { TermsOfUsePage } from './pages/info/TermsOfUsePage';
import { GeneralInfoPage, SocialPlaceholder } from './pages/info/GeneralInfoPage';

// New Feature imports
import { SearchPage } from './pages/SearchPage';
import { ComparePage } from './pages/ComparePage';
import { ReturnsRefundsPage } from './pages/ReturnsRefundsPage';
import { WalletRewardsPage } from './pages/WalletRewardsPage';
import { SellerStorePage } from './pages/SellerStorePage';
import { HelpSupportPage } from './pages/HelpSupportPage';
import { SupportTicketDetailPage } from './pages/SupportTicketDetailPage';
import { KickZonePlusPage } from './pages/KickZonePlusPage';
import { KickZoneMinutesPage } from './pages/KickZoneMinutesPage';
import { KickZoneTravelPage } from './pages/KickZoneTravelPage';

// Seller Modules
import { BecomeSellerPage } from './pages/seller/BecomeSellerPage';
import { SellerRegisterPage } from './pages/seller/SellerRegisterPage';
import { SellerLoginPage } from './pages/seller/SellerLoginPage';
import { SellerDashboard } from './pages/seller/SellerDashboard';

// Remaining Seller Routes can map to Placeholder for now until made
import { SimpleSellerPlaceholder } from './pages/Placeholders';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      <Header />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/categories" element={<ProductListingPage />} />
          <Route path="/category/:categoryName" element={<ProductListingPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          
          {/* Protected Routes */}
          <Route path="/checkout/address" element={<AuthGuard><AddressPage /></AuthGuard>} />
          <Route path="/checkout/payment" element={<AuthGuard><PaymentPage /></AuthGuard>} />
          <Route path="/payment-failure" element={<AuthGuard><PaymentFailurePage /></AuthGuard>} />
          <Route path="/order/confirmation" element={<AuthGuard><OrderConfirmationPage /></AuthGuard>} />
          <Route path="/orders" element={<AuthGuard><OrderHistoryPage /></AuthGuard>} />
          <Route path="/orders/:orderId" element={<AuthGuard><OrderDetailPage /></AuthGuard>} />
          <Route path="/profile" element={<AuthGuard><ProfileSettingsPage /></AuthGuard>} />
          <Route path="/wishlist" element={<AuthGuard><WishlistPage /></AuthGuard>} />
          
          <Route path="/ai-assistant" element={<AIAssistantPage />} />
          
          {/* New Routes */}
          <Route path="/plus" element={<KickZonePlusPage />} />
          <Route path="/minutes" element={<KickZoneMinutesPage />} />
          <Route path="/travel" element={<KickZoneTravelPage />} />
          <Route path="/grocery" element={<ProductListingPage overrideCategory="Grocery" />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/returns" element={<ReturnsRefundsPage view="returns" />} />
          <Route path="/refunds" element={<ReturnsRefundsPage view="refunds" />} />
          <Route path="/replacement" element={<ReturnsRefundsPage view="replacement" />} />
          <Route path="/wallet" element={<WalletRewardsPage view="wallet" />} />
          <Route path="/rewards" element={<WalletRewardsPage view="rewards" />} />
          <Route path="/referrals" element={<WalletRewardsPage view="referrals" />} />
          <Route path="/seller/:sellerId" element={<SellerStorePage />} />
          
          {/* Seller Flow */}
          <Route path="/become-seller" element={<BecomeSellerPage />} />
          <Route path="/seller/register" element={<SellerRegisterPage />} />
          <Route path="/seller/login" element={<SellerLoginPage />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/seller/products" element={<SimpleSellerPlaceholder title="Seller Products" />} />
          <Route path="/seller/orders" element={<SimpleSellerPlaceholder title="Seller Orders" />} />
          <Route path="/seller/inventory" element={<SimpleSellerPlaceholder title="Seller Inventory" />} />
          <Route path="/seller/analytics" element={<SimpleSellerPlaceholder title="Seller Analytics" />} />

          <Route path="/help-center" element={<HelpSupportPage type="center" />} />
          <Route path="/support-ticket" element={<HelpSupportPage type="ticket" />} />
          <Route path="/support-ticket/:ticketId" element={<SupportTicketDetailPage />} />

          {/* Admin routes inside a nested layout */}
          <Route path="/admin/*" element={<AdminApp />} />
          
          {/* Info Pages */}
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact-us" element={<GeneralInfoPage title="Contact Us" type="contact" />} />
          <Route path="/about-us" element={<GeneralInfoPage title="About Us" type="about" />} />
          <Route path="/careers" element={<GeneralInfoPage title="Careers" type="careers" />} />
          <Route path="/kickzone-stories" element={<GeneralInfoPage title="KickZone Stories" type="stories" />} />
          <Route path="/press" element={<GeneralInfoPage title="Press" type="press" />} />
          <Route path="/payments" element={<GeneralInfoPage title="Payments" type="payments" />} />
          <Route path="/shipping" element={<GeneralInfoPage title="Shipping" type="shipping" />} />
          <Route path="/cancellation-returns" element={<GeneralInfoPage title="Cancellation & Returns" type="cancellation" />} />
          <Route path="/faq" element={<GeneralInfoPage title="FAQ" type="faq" />} />
          <Route path="/report-infringement" element={<GeneralInfoPage title="Report Infringement" type="report" />} />
          <Route path="/security" element={<GeneralInfoPage title="Security" type="security" />} />
          <Route path="/sitemap" element={<GeneralInfoPage title="Sitemap" type="sitemap" />} />
          
          <Route path="/social/facebook" element={<SocialPlaceholder platform="Facebook" />} />
          <Route path="/social/twitter" element={<SocialPlaceholder platform="Twitter" />} />
          <Route path="/social/youtube" element={<SocialPlaceholder platform="YouTube" />} />
          <Route path="/social/instagram" element={<SocialPlaceholder platform="Instagram" />} />

          {/* Placeholders */}
          <Route path="/coupons" element={<SimplePlaceholder title="My Coupons" />} />
          <Route path="/offers" element={<SimplePlaceholder title="Special Offers" />} />
          <Route path="/notifications" element={<SimplePlaceholder title="Notifications" />} />
          <Route path="*" element={<SimplePlaceholder title="Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}


