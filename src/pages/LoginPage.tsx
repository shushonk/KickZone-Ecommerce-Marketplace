import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuthStore } from '../store/authStore';
import { X } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email or mobile number');
      return;
    }

    // Mock successful login
    login({
      id: 'u_' + Date.now(),
      name: email.includes('@') ? email.split('@')[0] : 'User',
      email: email,
      phone: '9876543210'
    }, 'mock_token_' + Date.now());

    navigate(-1); // go back to previous page
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      
      {/* Close button outside modal on the right */}
      <div className="relative">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute -right-12 -top-2 text-white hover:text-gray-200"
        >
          <X size={32} />
        </button>

        <div className="w-full max-w-[750px] min-h-[520px] bg-white rounded shadow-2xl flex overflow-hidden">
          
          {/* Left Panel */}
          <div className="w-[40%] bg-[#2874F0] px-8 py-10 flex flex-col justify-between hidden sm:flex font-sans">
            <div>
              <h2 className="text-[28px] font-medium text-white mb-4">
                Login
              </h2>
              <p className="text-[18px] text-blue-100 leading-normal">
                Get access to your Orders, Wishlist and Recommendations
              </p>
            </div>
            {/* Simple abstract illustration block */}
            <div className="mt-auto pt-8">
              <div className="relative w-full h-[150px]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-white/20 rounded-t-lg"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-20 bg-white rounded-t shadow-lg flex items-end justify-center pb-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                </div>
                <div className="absolute bottom-2 left-6 w-8 h-8 bg-[#FFC200] rounded"></div>
                <div className="absolute top-10 right-8 w-12 h-6 bg-blue-300/40 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full sm:w-[60%] px-10 pt-14 pb-8 flex flex-col relative font-sans">
            
            <form className="flex-1 flex flex-col" onSubmit={handleLogin}>
              {error && <div className="text-[#ff6161] text-xs font-semibold mb-4">{error}</div>}
              
              <div className="relative mb-8 group">
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  required
                  className="block w-full px-0 py-2 border-b border-gray-300 text-gray-900 bg-transparent focus:outline-none focus:border-[#2874F0] peer"
                  placeholder=" "
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label 
                  htmlFor="email-address" 
                  className="absolute left-0 top-2 text-gray-500 text-base transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#2874F0] peer-valid:-top-3.5 peer-valid:text-xs peer-valid:text-gray-500 cursor-text"
                >
                  Enter Email/Mobile number
                </label>
              </div>

              <div className="text-xs text-gray-500 mb-6 font-medium">
                By continuing, you agree to KickZone's <a href="#" className="text-[#2874F0]">Terms of Use</a> and <a href="#" className="text-[#2874F0]">Privacy Policy</a>.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 text-base font-medium rounded-sm text-white bg-[#FB641B] shadow-sm hover:shadow transition-shadow focus:outline-none"
              >
                Request OTP
              </button>
            </form>

            <div className="mt-14 text-center">
              <Link to="/signup" className="text-[#2874F0] font-semibold text-sm hover:underline">
                New to KickZone? Create an account
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
