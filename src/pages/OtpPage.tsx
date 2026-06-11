import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { BackButton } from '../components/common/BackButton';

export const OtpPage: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp !== '1234') {
      setError('Invalid OTP. Use 1234.');
      return;
    }
    navigate('/login');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-4 left-4">
        <BackButton fallback="/login" />
      </div>
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded shadow">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Verify OTP
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the OTP sent to your email or phone
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleVerify}>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="otp"
                name="otp"
                type="text"
                required
                maxLength={4}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm text-center tracking-widest text-lg font-bold"
                placeholder="0000"
                value={otp}
                onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-[#FB641B] hover:bg-[#e05a18] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FB641B]"
            >
              Verify & Continue
            </button>
          </div>
          <div className="text-center mt-4 text-sm">
            <button type="button" onClick={() => setOtp('')} className="text-[#2874f0] font-medium hover:underline">
              Resend OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
