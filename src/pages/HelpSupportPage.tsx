import React, { useState } from 'react';
import { Search, ChevronRight, MessageSquare, HeadphonesIcon, HelpCircle, FileText, Clock, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { PageHeader } from '../components/common/PageHeader';
import { useSupportStore } from '../store/supportStore';

export const HelpSupportPage: React.FC<{ type: 'center' | 'ticket' }> = ({ type }) => {
  const navigate = useNavigate();
  const { tickets, addTicket } = useSupportStore();
  
  const [issueType, setIssueType] = useState('Order Issue');
  const [orderId, setOrderId] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !description) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      const ticketId = addTicket({ issueType, orderId, subject, description });
      setIsSubmitting(false);
      navigate(`/support-ticket/${ticketId}`);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <PageHeader title={type === 'center' ? 'Help Center' : 'Create Support Ticket'} fallback={type === 'ticket' ? '/help-center' : '/profile'} className="mb-8 rounded-xl shadow-sm bg-white" />
        
        {type === 'center' ? (
          <div>
            <div className="bg-blue-600 text-white p-8 md:p-12 rounded-xl text-center mb-8 shadow-sm">
              <h1 className="text-3xl font-bold mb-4">Hello, how can we help?</h1>
              <div className="max-w-xl mx-auto relative mt-6">
                <input 
                  type="text" 
                  placeholder="Search for answers (e.g., 'returns', 'refunds')" 
                  className="w-full text-gray-900 border-2 border-transparent rounded-full pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-300 shadow-lg text-lg"
                />
                <Search className="absolute left-4 top-4 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Common Topics</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {['Track an Order', 'Cancel an Order', 'Return an Item', 'Refund Status', 'Payment Issues', 'My Account'].map(topic => (
                      <div key={topic} className="flex justify-between items-center p-3 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer transition border border-transparent hover:border-blue-100 group">
                        <span className="font-medium text-gray-700 group-hover:text-blue-700">{topic}</span>
                        <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-600"/>
                      </div>
                    ))}
                  </div>
                </div>

                {tickets.length > 0 && (
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                       <h3 className="font-bold text-gray-900 text-lg">Your Support Tickets</h3>
                    </div>
                    <div className="space-y-3">
                      {tickets.map(ticket => (
                        <Link to={`/support-ticket/${ticket.id}`} key={ticket.id} className="block p-4 border border-gray-100 hover:border-blue-300 rounded-lg transition group">
                           <div className="flex justify-between items-start mb-2">
                             <span className="font-bold text-blue-600 group-hover:underline">#{ticket.id} - {ticket.subject}</span>
                             <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                ticket.status === 'Open' ? 'bg-blue-50 text-blue-700' :
                                ticket.status === 'In Review' ? 'bg-orange-50 text-orange-700' :
                                'bg-green-50 text-green-700'
                             }`}>
                               {ticket.status}
                             </span>
                           </div>
                           <p className="text-sm text-gray-500 line-clamp-1">{ticket.description}</p>
                           <p className="text-xs text-gray-400 mt-2">Created: {new Date(ticket.createdAt).toLocaleDateString()}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Contact Us</h3>
                  <div className="space-y-3">
                    <button className="w-full border border-gray-200 p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 font-bold text-gray-700 transition">
                      <MessageSquare size={18} /> Chat with Assistant
                    </button>
                    <button className="w-full border border-gray-200 p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 font-bold text-gray-700 transition">
                      <HeadphonesIcon size={18} /> Request Call Back
                    </button>
                    <div className="relative py-4 flex items-center">
                      <div className="flex-grow border-t border-gray-200"></div>
                      <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or</span>
                      <div className="flex-grow border-t border-gray-200"></div>
                    </div>
                    <Link to="/support-ticket" className="w-full bg-blue-600 text-white p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 font-bold transition">
                      <FileText size={18} /> Create Ticket
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Issue Type *</label>
                  <select required value={issueType} onChange={e => setIssueType(e.target.value)} className="w-full border border-gray-300 shadow-sm rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none">
                    <option>Order Issue</option>
                    <option>Payment/Refund Issue</option>
                    <option>Delivery Issue</option>
                    <option>Account Related</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order ID (Optional)</label>
                  <input type="text" value={orderId} onChange={e => setOrderId(e.target.value)} className="w-full border border-gray-300 shadow-sm rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" placeholder="#KZ-ORD..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input required type="text" value={subject} onChange={e => setSubject(e.target.value)} className="w-full border border-gray-300 shadow-sm rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" placeholder="Brief summary of your issue" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea required value={description} onChange={e => setDescription(e.target.value)} rows={6} className="w-full border border-gray-300 shadow-sm rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" placeholder="Please describe your issue in detail. If this is about a specific order, include relevant details." />
              </div>
              
              <div className="pt-4 border-t border-gray-100 flex gap-4">
                <button type="button" onClick={() => navigate('/help-center')} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition">Cancel</button>
                <button disabled={isSubmitting} type="submit" className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition disabled:bg-blue-400">
                  {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

