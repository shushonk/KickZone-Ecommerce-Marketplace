import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SupportTicket {
  id: string;
  issueType: string;
  orderId?: string;
  subject: string;
  description: string;
  status: 'Open' | 'In Review' | 'Resolved';
  createdAt: string;
  replies: Array<{
    id: string;
    sender: 'user' | 'support';
    message: string;
    createdAt: string;
  }>;
}

interface SupportState {
  tickets: SupportTicket[];
  addTicket: (ticket: Omit<SupportTicket, 'id' | 'status' | 'createdAt' | 'replies'>) => string;
  addReply: (ticketId: string, message: string) => void;
}

export const useSupportStore = create<SupportState>()(
  persist(
    (set, get) => ({
      tickets: [],
      addTicket: (ticketInput) => {
        const newTicket: SupportTicket = {
          ...ticketInput,
          id: 'TK' + Date.now().toString().slice(-6),
          status: 'Open',
          createdAt: new Date().toISOString(),
          replies: []
        };
        set(state => ({ tickets: [newTicket, ...state.tickets] }));
        return newTicket.id;
      },
      addReply: (ticketId, message) => {
        set(state => ({
          tickets: state.tickets.map(t => {
            if (t.id === ticketId) {
              return {
                ...t,
                replies: [...t.replies, {
                  id: 'R' + Date.now(),
                  sender: 'user',
                  message,
                  createdAt: new Date().toISOString()
                }]
              };
            }
            return t;
          })
        }));
        
        // Mock support reply
        setTimeout(() => {
          set(state => ({
             tickets: state.tickets.map(t => {
                if (t.id === ticketId) {
                   return {
                     ...t,
                     status: 'In Review',
                     replies: [...t.replies, {
                       id: 'R' + Date.now(),
                       sender: 'support',
                       message: 'Hi there, an agent is currently reviewing your recent message. Please allow 24-48 hours for a comprehensive update.',
                       createdAt: new Date().toISOString()
                     }]
                   };
                }
                return t;
             })
          }));
        }, 15000);
      }
    }),
    {
      name: 'kickzone-support-storage'
    }
  )
);
