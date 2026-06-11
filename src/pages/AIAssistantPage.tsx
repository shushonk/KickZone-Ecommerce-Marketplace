import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { DUMMY_PRODUCTS } from '../utils/dummyData';

export const AIAssistantPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string; products?: any[] }[]>([
    { role: 'ai', content: 'Hi there! I am your KickZone AI Shopping Assistant. How can I help you find the perfect product today?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setLoading(true);

    // Dummy local recommendation logic
    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      let matchedProducts = [];
      let reply = "Here are some options I found based on your request:";

      if (lower.includes('shoe') || lower.includes('sneaker')) {
        matchedProducts = DUMMY_PRODUCTS.filter(p => p.category === 'Shoes').slice(0, 4);
      } else if (lower.includes('phone') || lower.includes('mobile')) {
        matchedProducts = DUMMY_PRODUCTS.filter(p => p.category === 'Mobiles').slice(0, 4);
      } else if (lower.includes('cheap') || lower.includes('budget')) {
        matchedProducts = DUMMY_PRODUCTS.filter(p => p.price < 1000).slice(0, 4);
      } else {
        matchedProducts = [...DUMMY_PRODUCTS].sort(() => 0.5 - Math.random()).slice(0, 3);
        reply = "I'm not exactly sure what you're looking for, but here are some of our top picks right now!";
      }

      setMessages(prev => [...prev, { role: 'ai', content: reply, products: matchedProducts }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto w-full p-4 md:p-6 mb-8 flex-1 flex flex-col h-[calc(100vh-160px)]">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Sparkles size={24} />
          </div>
          <div>
            <h2 className="font-bold text-lg">KickZone AI Assistant</h2>
            <p className="text-xs text-purple-100">Smart shopping recommendations</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 flex flex-col gap-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 max-w-[90%] md:max-w-[80%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${msg.role === 'user' ? 'bg-gray-200 text-gray-700' : 'bg-purple-100 text-purple-600'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'}`}>
                  {msg.content}
                </div>
                
                {msg.products && msg.products.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                    {msg.products.map(p => (
                      <div key={p.id} className="w-[180px]">
                        <ProductCard product={p} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex flex-wrap gap-2 mb-3 pb-2">
            <button onClick={() => setInput("Show me smartphones under 20000")} className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-100 rounded-full text-xs font-medium hover:bg-purple-100 transition">Smartphones under 20k</button>
            <button onClick={() => setInput("Looking for running shoes")} className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-100 rounded-full text-xs font-medium hover:bg-purple-100 transition">Running shoes</button>
            <button onClick={() => setInput("Best noise cancelling headphones")} className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-100 rounded-full text-xs font-medium hover:bg-purple-100 transition">Noise cancelling headphones</button>
          </div>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for product recommendations..."
              className="flex-1 bg-gray-100 border-none px-4 py-3 text-sm rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white p-3 rounded-xl transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
