import React from 'react';
import { InfoPageLayout } from './InfoPageLayout';

export const PrivacyPage: React.FC = () => {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      breadcrumbs={[{ label: 'Privacy Policy' }]}
    >
      <section className="mb-10">
        <h2>1. Introduction to KickZone Privacy</h2>
        <p>
          At KickZone, we value your trust and respect your privacy. This Privacy Policy outlines the types of personal information we collect, how it's used, protected, and your rights regarding your data. When you use the KickZone marketplace, applications, products, and services, you trust us with your information. We take this responsibility seriously and are committed to maintaining the confidentiality and security of your personal data in accordance with applicable data protection laws.
        </p>
        <p>
          This policy applies to all users of the KickZone platform, including buyers, sellers, and visitors across our website and mobile applications. By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy and agree to our collection, storage, use, and disclosure of your personal information as described herein.
        </p>
      </section>

      <section className="mb-10">
        <h2>2. Information We Collect</h2>
        <p>
          We collect various types of information to provide and improve our services to you. The data we collect generally falls into the following categories:
        </p>
        <ul>
          <li><strong>Personal Information:</strong> Includes your name, email address, phone number, shipping and billing addresses, and payment information when you register for an account or place an order.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our platform, such as the pages you visit, products you view, search queries, and time spent on the site.</li>
          <li><strong>Device Information:</strong> We collect data from the devices you use to access KickZone, including IP address, browser type, operating system, and device identifiers.</li>
          <li><strong>Communication Data:</strong> When you contact our customer support, use the AI Assistant, or communicate with sellers, we collect information about the communication and any information you choose to provide.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2>3. How We Use Your Data</h2>
        <p>
          The information we collect is utilized to enhance your shopping experience and operate our marketplace efficiently. Primary uses include:
        </p>
        <ul>
          <li><strong>Processing Orders and Deliveries:</strong> To process transactions, communicate order status, and coordinate deliveries to your specified addresses.</li>
          <li><strong>Improving Services and AI Assistant:</strong> To personalize your experience, provide personalized product recommendations, and train our AI shopping assistant to better understand and serve user queries.</li>
          <li><strong>Customer Support:</strong> To resolve technical issues, answer your inquiries, and assist with returns or refunds.</li>
          <li><strong>Marketing and Promotions:</strong> With your consent, we may send you promotional emails or push notifications about special offers, new features, and personalized recommendations.</li>
          <li><strong>Security and Fraud Prevention:</strong> To protect our users, partners, and platform from fraudulent activities, unauthorized access, and other security risks.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2>4. Cookies and Local Storage</h2>
        <p>
          KickZone uses cookies, local storage, and similar tracking technologies to analyze trends, administer the website, track users' movements around the site, and gather demographic information about our user base as a whole. Cookies are small data files stored on your device that help us remember your preferences, keep you logged in, and understand how you interact with our platform.
        </p>
        <p>
          You can control the use of cookies at the individual browser level. If you reject cookies, you may still use our website, but your ability to use some features or areas of our website may be limited. For example, your cart contents and language preferences may not persist across sessions if cookies are disabled.
        </p>
      </section>

      <section className="mb-10">
        <h2>5. Orders, Addresses, and Payment Data Handling</h2>
        <p>
          When you place an order, we collect processing data required to fulfill the transaction. Your shipping address is shared with our logistics partners and the respective sellers to ensure timely delivery. We maintain strict agreements with these third parties to ensure they only use this information for fulfillment purposes.
        </p>
        <p>
          Regarding payment information, KickZone employs industry-standard encryption protocols (such as PCI-DSS compliance mechanisms). We do not store sensitive payment card details like full credit card numbers or CVV codes directly on our servers. All transactions are securely processed through trusted third-party payment gateways (e.g., Razorpay, Stripe) which handle the actual authorization and processing.
        </p>
      </section>

      <section className="mb-10">
        <h2>6. AI Assistant Data</h2>
        <p>
          Interactions with the KickZone AI Shopping Assistant are logged to improve accuracy, contextual understanding, and response quality. When you chat with the AI, the text inputs are processed to generate relevant product recommendations and shopping advice. We anonymize and aggregate these interactions to analyze shopping trends and enhance the AI model's training securely, without linking the data to personal identifiers outside of your active session context.
        </p>
      </section>

      <section className="mb-10">
        <h2>7. User Choices and Data Retention</h2>
        <p>
          You have the right to access, update, or delete your personal information. You can manage your account settings, communication preferences, and saved addresses directly through your Profile page. If you wish to permanently delete your account and associated data, you may contact our customer support team.
        </p>
        <p>
          We retain your personal information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements. Once the retention period expires, your data is anonymized or securely deleted.
        </p>
      </section>
    </InfoPageLayout>
  );
};
