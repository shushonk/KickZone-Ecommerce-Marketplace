import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useStore } from '../store/useStore';
import { AddressCard } from '../components/checkout/AddressCard';
import { AddressForm } from '../components/checkout/AddressForm';
import { PriceSummary } from '../components/cart/PriceSummary';
import { Plus } from 'lucide-react';
import { Address } from '../types';
import { PageHeader } from '../components/common/PageHeader';

export const AddressPage: React.FC = () => {
  const navigate = useNavigate();
  const { addresses, addAddress, updateAddress, deleteAddress, cart } = useStore();
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(addresses[0]?.id || null);
  const [showForm, setShowForm] = useState(false);
  const [editAddress, setEditAddress] = useState<Address | null>(null);

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSaveAddress = (address: Address) => {
    if (editAddress) updateAddress(address);
    else addAddress(address);
    
    setShowForm(false);
    setEditAddress(null);
    setSelectedAddressId(address.id);
  };

  const handleContinue = () => {
    if (selectedAddressId) {
      // Could pass state here or store 'selectedAddress' in global store,
      // let's pass it via state since the store only has 'addresses'.
      navigate('/checkout/payment', { state: { addressId: selectedAddressId } });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader title="Delivery Address" fallback="/cart" className="rounded shadow-sm mb-6">
        {!showForm && (
          <button 
            onClick={() => setShowForm(true)}
            className="flex items-center gap-1 text-blue-600 font-medium hover:underline text-sm"
          >
            <Plus size={16} /> Add New
          </button>
        )}
      </PageHeader>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {showForm ? (
            <AddressForm 
              initialData={editAddress}
              onSubmit={handleSaveAddress} 
              onCancel={() => { setShowForm(false); setEditAddress(null); }} 
            />
          ) : (
            <div className="space-y-4">
              {addresses.length === 0 ? (
                <div className="text-center p-8 bg-gray-50 border rounded-xl">
                  <p className="text-gray-500 mb-4">No saved addresses found.</p>
                  <button 
                    onClick={() => setShowForm(true)}
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg"
                  >
                    Add Address
                  </button>
                </div>
              ) : (
                addresses.map(addr => (
                  <AddressCard 
                    key={addr.id} 
                    address={addr} 
                    selected={selectedAddressId === addr.id}
                    onSelect={() => setSelectedAddressId(addr.id)}
                    onEdit={() => { setEditAddress(addr); setShowForm(true); }}
                    onDelete={() => deleteAddress(addr.id)}
                  />
                ))
              )}
            </div>
          )}
        </div>
        
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="sticky top-24">
            <PriceSummary />
            <button
              onClick={handleContinue}
              disabled={!selectedAddressId || showForm}
              className="w-full mt-4 bg-[#FF9F00] hover:bg-[#F39800] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg shadow-md transition-colors"
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
