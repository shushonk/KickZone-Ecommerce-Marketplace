import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { PageHeader } from '../../components/common/PageHeader';

export const SellerRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sellerName: '',
    businessName: '',
    phone: '',
    email: '',
    pickupPincode: '',
    businessCategory: 'electronics',
    gstNumber: '',
    panNumber: '',
    bankAccount: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Check required fields
    if (!formData.sellerName || !formData.businessName || !formData.phone || !formData.email || !formData.gstNumber) {
      setError('Please fill all required primary fields');
      return;
    }

    // Save locally to localStorage (mock backend)
    const sellers = JSON.parse(localStorage.getItem('kickzone_sellers') || '[]');
    const newSeller = { 
      ...formData, 
      id: 'S' + Date.now(), 
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    sellers.push(newSeller);
    localStorage.setItem('kickzone_sellers', JSON.stringify(sellers));
    
    // mark active dummy session
    localStorage.setItem('kickzone_seller_session', JSON.stringify(newSeller));
    
    setSuccess(true);
    setTimeout(() => {
      navigate('/seller/dashboard');
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <PageHeader title="Seller Registration" fallback="/become-seller" className="rounded-xl shadow-sm mb-6" />
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {success ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
              <p className="text-gray-600 mb-6">Your seller application has been received successfully. Redirecting to your dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Business Details</h2>
              {error && <div className="mb-6 p-4 bg-red-50 text-red-600 border border-red-200 rounded-lg">{error}</div>}
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                   <input required type="text" name="sellerName" value={formData.sellerName} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                   <input required type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="Doe Electronics" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                   <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="9876543210" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                   <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="contact@doeelectronics.com" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Pincode *</label>
                   <input required type="text" name="pickupPincode" value={formData.pickupPincode} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="110001" maxLength={6} />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Primary Category *</label>
                   <select name="businessCategory" value={formData.businessCategory} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500">
                     <option value="electronics">Electronics</option>
                     <option value="fashion">Fashion</option>
                     <option value="home">Home & Furniture</option>
                     <option value="grocery">Grocery</option>
                     <option value="other">Other</option>
                   </select>
                 </div>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Legal & Banking Info</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">GSTIN Number *</label>
                   <input required type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="22AAAAA0000A1Z5" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">PAN Number *</label>
                   <input required type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="ABCDE1234F" />
                 </div>
                 <div className="md:col-span-2">
                   <label className="block text-sm font-medium text-gray-700 mb-2">Bank Account Number (Placeholder) *</label>
                   <input required type="text" name="bankAccount" value={formData.bankAccount} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="Account Number" />
                 </div>
                 <div className="md:col-span-2">
                   <label className="block text-sm font-medium text-gray-700 mb-2">Business/Pickup Address *</label>
                   <textarea required name="address" value={formData.address} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" rows={3} placeholder="Full address" />
                 </div>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Security</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                   <input required type="password" name="password" value={formData.password} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
                   <input required type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" />
                 </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-sm text-lg">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
