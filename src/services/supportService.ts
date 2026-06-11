// Mock APIs for Support Center

class SupportService {
  async getFAQ() {
    return new Promise((resolve) => setTimeout(() => resolve([
      { id: '1', question: 'How do I cancel my order?', answer: 'You can cancel any order before it is packed from the My Orders section.' },
      { id: '2', question: 'How do I check my refund status?', answer: 'Refunds are automatically processed to the original payment method in 3-5 days.' }
    ]), 300));
  }
}

export const supportService = new SupportService();
