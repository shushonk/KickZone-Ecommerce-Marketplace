import React from 'react';
import { Link } from 'react-router';
import { Facebook, Twitter, Youtube, Instagram, Store, TrendingUp, Gift, LifeBuoy } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      {/* Footer Expendable Row */}
      <div className="border border-gray-200 py-4 px-8 flex justify-between items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors">
        <h3 className="text-gray-500 font-medium text-[15px]">KickZone - Your go-to place for Online Shopping</h3>
        <span className="text-gray-400 font-light text-2xl">+</span>
      </div>

      <div className="bg-[#212121] pt-12 text-white">
        {/* Footer Top Links */}
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-700 font-sans">
        
        {/* ABOUT */}
        <div>
          <h4 className="text-[#878787] text-xs font-semibold mb-4 uppercase">About</h4>
          <ul className="space-y-2 text-xs font-semibold flex flex-col items-start">
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/kickzone-stories" className="hover:underline">KickZone Stories</Link></li>
            <li><Link to="/press" className="hover:underline">Press</Link></li>
            <li><Link to="/corporate-information" className="hover:underline">Corporate Information</Link></li>
          </ul>
        </div>
        
        {/* GROUP COMPANIES */}
        <div>
          <h4 className="text-[#878787] text-xs font-semibold mb-4 uppercase">Group Companies</h4>
          <ul className="space-y-2 text-xs font-semibold flex flex-col items-start">
            <li><Link to="#" className="hover:underline">Myntra</Link></li>
            <li><Link to="#" className="hover:underline">Cleartrip</Link></li>
            <li><Link to="#" className="hover:underline">Shopsy</Link></li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h4 className="text-[#878787] text-xs font-semibold mb-4 uppercase">Help</h4>
          <ul className="space-y-2 text-xs font-semibold flex flex-col items-start">
            <li><Link to="/payments" className="hover:underline">Payments</Link></li>
            <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
            <li><Link to="/cancellation-returns" className="hover:underline">Cancellation & Returns</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        
        {/* CONSUMER POLICY */}
        <div>
          <h4 className="text-[#878787] text-xs font-semibold mb-4 uppercase">Consumer Policy</h4>
          <ul className="space-y-2 text-xs font-semibold flex flex-col items-start">
            <li><Link to="/cancellation-returns" className="hover:underline">Cancellation & Returns</Link></li>
            <li><Link to="/terms-of-use" className="hover:underline">Terms Of Use</Link></li>
            <li><Link to="/security" className="hover:underline">Security</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
            <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
            <li><Link to="/grievance-redressal" className="hover:underline">Grievance Redressal</Link></li>
            <li><Link to="/epr-compliance" className="hover:underline">EPR Compliance</Link></li>
            <li><Link to="/fssai" className="hover:underline">FSSAI Food Safety Connect App</Link></li>
          </ul>
        </div>

        {/* MAIL US */}
        <div className="border-l border-gray-700 pl-6">
          <h4 className="text-[#878787] text-xs font-semibold mb-4 uppercase">Mail Us:</h4>
          <p className="text-xs leading-relaxed mb-6 font-medium">
            KickZone,<br />
            A Shashank Industries Project,<br />
            Innovation Tower, Cyber Park,<br />
            Sector 12, Tech Boulevard,<br />
            New Delhi, 110001,<br />
            India
          </p>
          
          <h4 className="text-[#878787] text-xs font-semibold mb-2 uppercase">Social:</h4>
          <div className="flex gap-3">
             <Link to="/social/facebook" className="hover:text-blue-400"><Facebook size={18} /></Link>
             <Link to="/social/twitter" className="hover:text-blue-400">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
             </Link>
             <Link to="/social/youtube" className="hover:text-blue-400"><Youtube size={18} /></Link>
             <Link to="/social/instagram" className="hover:text-blue-400"><Instagram size={18} /></Link>
          </div>
        </div>
        
        {/* REGISTERED OFFICE */}
        <div className="pl-6 md:pl-0 lg:pl-6">
          <h4 className="text-[#878787] text-xs font-semibold mb-4 uppercase">Registered Office Address:</h4>
          <p className="text-xs leading-relaxed font-medium">
            KickZone,<br />
            A Shashank Industries Project,<br />
            Innovation Tower, Cyber Park,<br />
            Sector 12, Tech Boulevard,<br />
            New Delhi, 110001,<br />
            India<br />
            CIN : U51109KA2012PTC066107<br />
            Telephone: <span className="text-blue-500">044-45614700</span> / <span className="text-blue-500">044-67415800</span>
          </p>
        </div>
      </div>

      {/* Trust Badges & Copyright */}
      <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col xl:flex-row justify-between items-center text-sm font-semibold border-t border-[#3d3d3d] mt-[-1px]">
        
        <div className="flex flex-wrap items-center justify-center gap-6 xl:gap-8 mb-4 xl:mb-0 w-full xl:w-auto text-[#fff]">
           <Link to="/become-seller" className="flex items-center gap-2 hover:underline">
              <Store className="text-[#FFC200]" size={16} /> Become a Seller
           </Link>
           <Link to="/advertise" className="flex items-center gap-2 hover:underline">
              <TrendingUp className="text-[#FFC200]" size={16} /> Advertise
           </Link>
           <Link to="/gift-cards" className="flex items-center gap-2 hover:underline">
              <Gift className="text-[#FFC200]" size={16} /> Gift Cards
           </Link>
           <Link to="/help-center" className="flex items-center gap-2 hover:underline">
              <span className="text-[#FFC200] font-bold border border-[#FFC200] rounded-full w-4 h-4 flex items-center justify-center text-[10px]">?</span> Help Center
           </Link>
        </div>
        
        <div className="text-center xl:text-left mb-4 xl:mb-0 whitespace-nowrap">
          &copy; 2026 KickZone. All rights reserved. KickZone is owned by Shashank Industries.
        </div>
        
        <div className="flex gap-2 opacity-80 shrink-0 items-center">
          <div className="bg-white rounded px-2 py-0.5"><span className="text-blue-800 font-black text-xs">VISA</span></div>
          <div className="bg-white rounded px-1.5 py-0.5"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" /></div>
          <div className="bg-white rounded px-1.5 py-0.5"><span className="text-blue-900 font-bold text-xs italic">Maestro</span></div>
          <div className="bg-white rounded px-1.5 py-0.5 pr-2"><span className="text-blue-600 font-bold text-xs italic opacity-80">PayPal</span></div>
        </div>
      </div>
     </div>
    </footer>
  );
};

