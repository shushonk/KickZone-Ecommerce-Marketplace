import React, { useState } from 'react';
import { Address } from '../../types';

interface AddressFormProps {
  initialData?: Address | null;
  onSubmit: (address: Address) => void;
  onCancel: () => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || '',
    phone: initialData?.phone || '',
    pincode: initialData?.pincode || '',
    state: initialData?.state || '',
    city: initialData?.city || '',
    streetAppt: initialData?.streetAppt || '',
    type: initialData?.type || 'Home'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: initialData?.id || Date.now().toString(),
      ...formData
    } as Address);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="text-lg font-bold mb-4">{initialData ? 'Edit Address' : 'Add New Address'}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
          <input required type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Street, Building, Area</label>
          <textarea required rows={2} name="streetAppt" value={formData.streetAppt} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div className="md:col-span-2">
           <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
           <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" value="Home" checked={formData.type === 'Home'} onChange={handleChange} className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm">Home</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" value="Work" checked={formData.type === 'Work'} onChange={handleChange} className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm">Work</span>
              </label>
           </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-6">
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">Save Address</button>
        <button type="button" onClick={onCancel} className="px-6 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg">Cancel</button>
      </div>
    </form>
  );
};
