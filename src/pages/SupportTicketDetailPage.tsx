import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { useSupportStore } from '../store/supportStore';
import { PageHeader } from '../components/common/PageHeader';
import { Send, User, HeadphonesIcon } from 'lucide-react';

export const SupportTicketDetailPage: React.FC = () => {
  const { ticketId } = useParams<{ ticketId: string }>();
  const { tickets, addReply } = useSupportStore();
  const [replyMessage, setReplyMessage] = useState('');

  const ticket = tickets.find(t => t.id === ticketId);

  if (!ticket) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ticket Not Found</h2>
        <Link to="/help-center" className="text-blue-600 hover:underline">Return to Help Center</Link>
      </div>
    );
  }

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyMessage.trim()) return;
    addReply(ticket.id, replyMessage);
    setReplyMessage('');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <PageHeader title={`Ticket #${ticket.id}`} fallback="/help-center" className="mb-6 rounded-xl shadow-sm bg-white" />
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{ticket.subject}</h1>
              <p className="text-sm text-gray-500 mt-1">Issue Type: {ticket.issueType} {ticket.orderId && `| Order Info: ${ticket.orderId}`}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">Status:</span>
              <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                ticket.status === 'Open' ? 'bg-blue-100 text-blue-800' :
                ticket.status === 'In Review' ? 'bg-orange-100 text-orange-800' :
                'bg-green-100 text-green-800'
              }`}>
                {ticket.status}
              </span>
            </div>
          </div>
          
          <div className="p-6">
             <div className="mb-8">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center">
                    <User size={20} />
                 </div>
                 <div>
                   <p className="font-bold text-gray-900">You <span className="text-gray-400 font-normal text-xs ml-2">{new Date(ticket.createdAt).toLocaleString()}</span></p>
                 </div>
               </div>
               <div className="pl-13 text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-xl rounded-tl-none border border-gray-100 ml-12">
                 {ticket.description}
               </div>
             </div>

             <div className="space-y-6">
               {ticket.replies.map(reply => (
                 <div key={reply.id} className={`flex flex-col ${reply.sender === 'user' ? 'items-end' : 'items-start'}`}>
                   <div className={`flex items-center gap-3 mb-2 flex-row${reply.sender === 'user' ? '-reverse' : ''}`}>
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center ${reply.sender === 'user' ? 'bg-indigo-100 text-indigo-700' : 'bg-blue-600 text-white'}`}>
                        {reply.sender === 'user' ? <User size={20} /> : <HeadphonesIcon size={20} />}
                     </div>
                     <div className={reply.sender === 'user' ? 'text-right' : 'text-left'}>
                       <p className="font-bold text-gray-900">
                         {reply.sender === 'user' ? 'You' : 'KickZone Support'} 
                         <span className="text-gray-400 font-normal text-xs mx-2">
                           {new Date(reply.createdAt).toLocaleString()}
                         </span>
                       </p>
                     </div>
                   </div>
                   <div className={`text-gray-700 whitespace-pre-wrap p-4 rounded-xl border max-w-3xl ${
                     reply.sender === 'user' 
                     ? 'bg-indigo-50 border-indigo-100 rounded-tr-none mr-12' 
                     : 'bg-blue-50 border-blue-100 rounded-tl-none ml-12'
                   }`}>
                     {reply.message}
                   </div>
                 </div>
               ))}
             </div>
          </div>
          
          {ticket.status !== 'Resolved' && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
               <form onSubmit={handleSendReply} className="flex gap-4">
                 <input 
                   value={replyMessage}
                   onChange={e => setReplyMessage(e.target.value)}
                   type="text" 
                   placeholder="Type your reply here..." 
                   className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                 />
                 <button 
                   type="submit" 
                   disabled={!replyMessage.trim()}
                   className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition disabled:bg-blue-400 flex items-center gap-2"
                 >
                   Send <Send size={18} />
                 </button>
               </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
