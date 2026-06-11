import React from 'react';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface InfoPageLayoutProps {
  title: string;
  breadcrumbs: { label: string; to?: string }[];
  children: React.ReactNode;
}

export const InfoPageLayout: React.FC<InfoPageLayoutProps> = ({ title, breadcrumbs, children }) => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-6 flex-wrap whitespace-normal">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          {breadcrumbs.map((bc, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight size={14} className="mx-2 flex-shrink-0" />
              {bc.to ? (
                <Link to={bc.to} className="hover:text-blue-600">{bc.label}</Link>
              ) : (
                <span className="text-gray-900 font-medium">{bc.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-10 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">{title}</h1>
          </div>
          
          <div className="p-6 md:p-10 prose prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700">
            {children}
            
            <div className="mt-12 bg-blue-50 border border-blue-100 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3">Need more help?</h3>
              <p className="text-gray-600 mb-6">Our customer support team is available 24/7 to assist you.</p>
              <Link to="/contact-us" className="inline-block bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition">
                Contact Support
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-gray-900 font-bold mb-4">Related Information</h4>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <Link to="/faq" className="text-blue-600 hover:underline">FAQ Help Center</Link>
                <Link to="/shipping" className="text-blue-600 hover:underline">Shipping Policy</Link>
                <Link to="/cancellation-returns" className="text-blue-600 hover:underline">Returns Policy</Link>
                <Link to="/payments" className="text-blue-600 hover:underline">Payments Information</Link>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                KickZone is a demo eCommerce project. This page is sample informational content created for project demonstration purposes.
              </p>
              <p className="text-xs text-center text-gray-400">
                &copy; 2026 KickZone. All rights reserved. KickZone is a project/product owned by Shashank Industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
