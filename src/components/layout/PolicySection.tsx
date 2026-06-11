import React from 'react';

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

export const PolicySection: React.FC<PolicySectionProps> = ({ title, children }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">
        {title}
      </h2>
      <div className="prose prose-blue max-w-none prose-p:text-gray-700 prose-ul:text-gray-700">
        {children}
      </div>
    </section>
  );
};
