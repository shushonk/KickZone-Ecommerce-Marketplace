import React from 'react';
import { PageHeader } from '../components/common/PageHeader';

export const SimplePlaceholder: React.FC<{ title: string, subtitle?: string, fallbackRoute?: string }> = ({ title, subtitle, fallbackRoute = '/' }) => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <PageHeader title={title} fallback={fallbackRoute} className="rounded shadow-sm mb-8" />
    <div className="text-center bg-white p-16 rounded-xl border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      {subtitle && <p className="text-gray-600 mb-2">{subtitle}</p>}
      <p className="text-gray-400">This page is currently under construction or a placeholder.</p>
    </div>
  </div>
);

export const SimpleSellerPlaceholder: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <PageHeader title={title} fallback="/seller/dashboard" className="rounded-xl shadow-sm mb-6" />
      <div className="max-w-4xl mx-auto bg-white p-12 text-center rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500">This seller module is currently under development.</p>
      </div>
    </div>
  );
};


