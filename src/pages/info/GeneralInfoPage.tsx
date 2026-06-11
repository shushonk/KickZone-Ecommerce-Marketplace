import React from 'react';
import { Link } from 'react-router';
import { InfoPageLayout } from './InfoPageLayout';

export const GeneralInfoPage: React.FC<{
  title: string;
  type: string;
}> = ({ title, type }) => {
  const renderContent = () => {
    switch (type) {
      case 'contact':
        return (
          <>
            <section className="mb-10">
              <h2>Customer Support Overview</h2>
              <p>Welcome to the KickZone Customer Support center. Our dedicated team is here to assist you with any questions, concerns, or feedback you may have regarding your shopping experience. We understand that seamless support is crucial to a great eCommerce experience, and we strive to provide prompt and effective resolutions to all user inquiries. Our support is structured to handle various issues ranging from order tracking to business queries.</p>
              
              <h3>Order Support</h3>
              <p>If you need assistance with an existing order, the fastest way to get help is by visiting the "My Orders" section in your account profile. There, you can track your package, view order details, request an invoice, or initiate a cancellation or return. For complex order issues such as missing items, delayed shipments, or incorrect deliveries, our support agents are available 24/7 to investigate with our logistics partners and ensure a satisfactory outcome.</p>

              <h3>Payment Support</h3>
              <p>Having trouble completing a transaction or facing issues with a refund? Our payment specialists can help verify transaction statuses, resolve double charges, or assist with wallet balances. Note that refunds for failed transactions generally take 3-5 business days to reflect in your bank account or credit card statement depending on your banking provider.</p>

              <h3>Refund & Return Support</h3>
              <p>The return process is designed to be hassle-free. If a product does not meet your expectations or arrives damaged, you can schedule a pickup directly from the product page or order history. Our support team can assist if you encounter any difficulties scheduling the pickup, or track your refund status once the item has been picked up.</p>
              
              <h3>Seller Support & Business Inquiry</h3>
              <p>Are you a KickZone seller or looking to partner with us? We have a dedicated seller portal and support line. For business inquiries, bulk orders, corporate gifting, or brand partnerships, please direct your emails to our business development team. We offer dedicated account managers for large enterprise accounts.</p>

              <h3>Grievance Officer</h3>
              <p>For any escalations or unattended grievances, please contact our Grievance Officer: [Grievance Officer Name Placeholder].</p>
              
              <div className="bg-blue-50 p-6 rounded-xl mt-8">
                <h3 className="text-blue-900 mt-0">Contact Details</h3>
                <ul className="list-none pl-0 space-y-2">
                  <li><strong>Email:</strong> [Email Placeholder] support@kickzone.local</li>
                  <li><strong>Phone:</strong> [Phone Placeholder] 1-800-KICKZONE</li>
                  <li><strong>Office Address:</strong> KickZone, A Shashank Industries Project, Innovation Tower, Cyber Park, Sector 12, Tech Boulevard, New Delhi, 110001, India</li>
                  <li><strong>Response Time:</strong> Our standard response time for emails is 24-48 hours. Phone support is available from 8 AM to 10 PM IST.</li>
                </ul>
              </div>
              
              <div className="mt-12">
                <h3>Support Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                   <div className="p-6 border border-gray-200 rounded-xl text-center font-semibold bg-white shadow-sm hover:shadow-md transition">Orders</div>
                   <div className="p-6 border border-gray-200 rounded-xl text-center font-semibold bg-white shadow-sm hover:shadow-md transition">Payments</div>
                   <div className="p-6 border border-gray-200 rounded-xl text-center font-semibold bg-white shadow-sm hover:shadow-md transition">Returns</div>
                   <div className="p-6 border border-gray-200 rounded-xl text-center font-semibold bg-white shadow-sm hover:shadow-md transition">Account</div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-yellow-50 border border-yellow-100 rounded-xl">
                <h4 className="text-yellow-900 mt-0">Support Tips</h4>
                <ul className="text-sm space-y-2 text-yellow-800 mb-0">
                  <li>Always keep your Order ID handy when calling support.</li>
                  <li>Check the FAQ section before reaching out.</li>
                  <li>Use the in-app chat for the fastest response on live orders.</li>
                </ul>
              </div>
            </section>
          </>
        );
      case 'about':
        return (
          <>
            <section className="mb-10">
              <h2>KickZone Mission</h2>
              <p>KickZone was founded on a simple yet ambitious mission: to democratize commerce and provide a platform where anyone, anywhere can find and purchase anything they desire with absolute ease and reliability. We believe that technology should empower shoppers and sellers alike, creating a vibrant ecosystem of exchange. Our goal is to transform the way people buy and sell online by offering unmatched convenience, speed, and selection.</p>
              
              <h3>Marketplace Vision</h3>
              <p>Our vision is to build the most customer-centric marketplace on the internet. A place where every search yields the perfect product, every checkout is frictionless, and every delivery brings a smile. We are constantly innovating, exploring new categories, and optimizing our logistics network to fulfill this vision. We aim to become the default starting point for all product discovery.</p>
              
              <h3>Multi-Category Shopping</h3>
              <p>From the latest electronics and smartphones to daily groceries, trending fashion, durable home essentials, and rare books—KickZone supports a vast and expanding array of product categories. We partner with thousands of verified sellers to ensure our catalog remains diverse, competitive, and continuously refreshed with the latest trends and essential goods.</p>
              
              <h3>Customer-First Experience</h3>
              <p>Our entire platform is built with the customer at the center. We prioritize user interface simplicity, transparent pricing, and robust customer support. We constantly gather feedback to refine our buying journeys, ensuring that from the moment you land on our homepage to the day your package arrives, the experience is nothing short of exceptional.</p>

              <h3>Seller Ecosystem</h3>
              <p>We know that happy sellers make for happy customers. KickZone provides merchants with robust tools, analytics, and fulfillment services to grow their businesses. By fostering a healthy, competitive seller ecosystem, we ensure better pricing, wider selection, and higher quality products for our end users.</p>

              <h3>Delivery Promise</h3>
              <p>We understand that waiting for a package can be anxious. Our logistics network is engineered for speed and reliability, promising accurate delivery timelines and real-time tracking for every order. We continuously expand our fulfillment centers and delivery partner networks to reach even the most remote locations securely and swiftly.</p>
              
              <h3>Technology and AI Shopping Assistant</h3>
              <p>At the core of KickZone is cutting-edge technology. We leverage advanced machine learning models, distributed databases, and real-time analytics to power our platform. Our flagship innovation, the KickZone AI Shopping Assistant, is designed to emulate a knowledgeable in-store associate, guiding users through complex purchase decisions with tailored recommendations and natural conversation.</p>
              
              <h3>Trust and Safety</h3>
              <p>Trust is the foundation of any marketplace. We employ rigorous seller verification processes, secure payment gateways, and comprehensive buyer protection programs to ensure that every transaction on KickZone is safe, secure, and authentic.</p>

              <div className="mt-12 pt-8 border-t">
                <p className="italic text-gray-500">Note: KickZone is a demo eCommerce project and this page exists to demonstrate realistic about-us documentation.</p>
              </div>
            </section>
          </>
        );
      case 'careers':
        return (
          <>
            <section className="mb-10">
              <h2>Working at KickZone</h2>
              <p>KickZone is more than just a workplace; it's a launchpad for innovation. We are a fast-growing eCommerce platform looking for passionate, driven individuals to join our mission of reshaping the retail landscape. At KickZone, you'll tackle complex challenges at scale, work with cutting-edge technologies, and directly impact the shopping experience of millions of users.</p>
              
              <h3>Our Culture</h3>
              <p>We foster a culture of ownership, collaboration, and continuous learning. We believe that the best ideas can come from anywhere, and we encourage open dialogue and experimentation. Our environment is fast-paced but supportive, recognizing that breakthroughs require both hard work and the freedom to take calculated risks.</p>
              
              <h3>Engineering Roles</h3>
              <p>Join our tech team to build highly scalable backend systems, intuitive frontends, and intelligent machine learning models. We hire across all levels for Software Development Engineers, Data Scientists, Security Experts, and DevOps Engineers. Help us refine our AI Shopping Assistant and optimize our search algorithms!</p>
              
              <h3>Product & Design Roles</h3>
              <p>Are you obsessed with user experience? Our Product Managers and UX/UI Designers work at the intersection of business strategy and customer empathy to craft beautiful, intuitive journeys. Help us envision the future of eCommerce interactions.</p>
              
              <h3>Marketing Roles</h3>
              <p>Our Marketing team is the voice of KickZone. From large-scale brand campaigns and influencer partnerships to performance marketing and SEO, we are looking for creative marketers who can tell our story and acquire new users effectively.</p>

              <h3>Operations Roles</h3>
              <p>The backbone of our business. Operations roles include Supply Chain Management, Logistics Coordination, and Warehouse Management. Help us fulfill our delivery promise by optimizing complex supply networks and ensuring on-time dispatch.</p>

              <h3>Seller Support Roles</h3>
              <p>Empower our merchants to succeed. Seller Support Specialists and Account Managers help onboard new sellers, troubleshoot their issues, and provide strategic advice to grow their KickZone businesses.</p>

              <h3>Internships</h3>
              <p>We offer robust summer internship programs for students across Engineering, Product, and Business domains. Gain hands-on experience, mentorship from industry leaders, and a chance to secure a full-time offer.</p>

              <h3>Hiring Process</h3>
              <p>Our hiring process typically involves an initial recruiter screen, an online assessment or take-home assignment, followed by 3-4 rounds of technical or functional interviews, concluding with a cultural fit discussion. We aim to make the process transparent and respectful of your time.</p>

              <h3>Benefits Placeholder</h3>
              <p>[Benefits Placeholder] We offer competitive compensation, comprehensive health insurance, flexible working hours, learning allowances, wellness programs, and generous paid time off. Your well-being is our priority.</p>

              <h3>Equal Opportunity Statement</h3>
              <p>KickZone is proud to be an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees, regardless of race, color, religion, gender, sexual orientation, or disability.</p>
              
              <div className="mt-12 p-6 bg-gray-50 border rounded-xl text-center">
                 <h3 className="mt-0">Join our team!</h3>
                 <p>Interested in joining? Please reach out to careers@kickzone.local.</p>
                 <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 font-medium hover:bg-blue-700 transition">View Openings</button>
              </div>

            </section>
          </>
        );
      case 'stories':
        return (
          <>
            <section className="mb-10">
              <h2>KickZone Stories</h2>
              <p>Behind every order, every click, and every delivery, there is a story. KickZone Stories is our dedicated space to share the journeys of the people who make this marketplace vibrant: our customers, our sellers, and our innovators.</p>
              
              <h3>Our Brand Story</h3>
              <p>What started as a small project to simplify online buying has grown into a comprehensive destination for millions of products. Our brand story is defined by constant iteration, learning from our failures, and celebrated milestones. We are driven by the unyielding belief that commerce can be a powerful force for good when made accessible.</p>
              
              <h3>Customer Shopping Stories</h3>
              <p>From a rural student receiving their first laptop to a professional baker finding the exact rare ingredient they needed, our customers' moments of joy fuel our dedication. Read inspiring tales of how access to a diverse marketplace has positively impacted lives and simplified daily routines.</p>
              
              <h3>Seller Growth Stories</h3>
              <p>KickZone is an engine for entrepreneurship. We feature stories of local artisans, small business owners, and large enterprise distributors who have leveraged our platform to reach a national audience. From a single-room operation to a bustling warehouse, our sellers' growth trajectories are our proudest achievements.</p>
              
              <h3>Technology Stories</h3>
              <p>Go behind the scenes with our engineering teams. Learn how we scaled our databases to handle flash sales, how we optimized image loading for slower networks, and how our security team combats fraud. We share our technical learnings to contribute back to the developer community.</p>

              <h3>AI Shopping Assistant Story</h3>
              <p>Discover the evolution of our AI Shopping Assistant. From early prototype chatbots to the current context-aware, multimodal intelligence, learn how our AI team trains models to understand nuanced product queries and provide human-like shopping advice.</p>

              <h3>Community Vision</h3>
              <p>We view KickZone not just as a retail platform, but as a community. We participate in local initiatives, support sustainable packaging drives, and promote eco-friendly products. Our vision is a marketplace that respects the environment and uplifts local communities.</p>
              
              <h3>Future Roadmap</h3>
              <p>What's next for KickZone? Get a sneak peek into our upcoming feature launches, category expansions, and logistics innovations. We are constantly experimenting with AR try-ons, hyper-local delivery, and personalized shopping feeds.</p>

              <h3>Marketplace Impact</h3>
              <p>By connecting buyers and sellers across vast distances, we break down geographic barriers. We are tracking our social and economic impact, measuring how our platform contributes to digital literacy and economic inclusion in emerging markets.</p>
            </section>
          </>
        );
      case 'press':
        return (
          <>
            <section className="mb-10">
              <h2>Press & Media Room</h2>
              <p>Welcome to the KickZone Press Room. Here you will find the latest news, announcements, media assets, and corporate information for journalists and media professionals covering our journey in reshaping the eCommerce landscape.</p>
              
              <h3>Media Introduction</h3>
              <p>Thank you for your interest in KickZone. Our team is available to provide insights, data, and commentary on the evolution of eCommerce, retail technology, AI shopping assistants, and marketplace economics.</p>

              <h3>KickZone Overview</h3>
              <p>KickZone is a rapidly accelerating online marketplace connecting millions of consumers with thousands of verified sellers. We offer a comprehensive catalog spanning electronics, fashion, groceries, home appliances, and more, all backed by a unified, intelligent shopping experience and a robust fulfillment network.</p>

              <h3>Product Categories</h3>
              <p>Our platform handles a massive variety of goods. We categorize our marketplace logically to help users discover top-tier mobiles, cutting-edge electronics, trendy apparel, and everyday household essentials easily. We hold exclusive launches for major electronic and fashion brands.</p>

              <h3>Launch Story Placeholder</h3>
              <p>[Launch Story Placeholder] Read about our humble beginnings, the initial beta phase, and the massive public launch that established KickZone as a serious contender in the retail space.</p>
              
              <h3>Leadership Placeholder</h3>
              <p>[Leadership Placeholder] Meet the visionary minds behind KickZone. Our executive team brings decades of experience from top technology and retail firms globally.</p>

              <h3>Media Contact Placeholder</h3>
              <p>For press inquiries, interviews, or additional information, please reach out to our corporate communications team.</p>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl mt-4 mb-6 text-center">
                <p className="mb-0 font-medium">[Media Contact Placeholder]<br />Email: press@kickzone.local<br />Phone: +91-XXX-XXX-XXXX</p>
              </div>

              <h3>Press Kit Placeholder</h3>
              <p>Download our official press kit containing high-resolution logos, executive headshots, screenshots of our app, and an official company fact sheet.</p>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition mt-2 mb-6 shadow-sm">[Press Kit Download Placeholder]</button>

              <h3>Announcements Placeholder</h3>
              <ul className="list-none pl-0 space-y-4">
                <li className="p-4 border border-gray-100 rounded-lg shadow-sm">
                   <strong className="text-blue-600">October 12, 2024:</strong> KickZone introduces conversational AI Shopping Assistant.
                </li>
                <li className="p-4 border border-gray-100 rounded-lg shadow-sm">
                   <strong className="text-blue-600">August 5, 2024:</strong> KickZone expands delivery network to 500 new pin codes.
                </li>
                <li className="p-4 border border-gray-100 rounded-lg shadow-sm">
                   <strong className="text-blue-600">April 20, 2024:</strong> KickZone announces Q1 Growth Metrics and new seller tools.
                </li>
              </ul>

              <h3 className="mt-8">Brand Guidelines Placeholder</h3>
              <p>[Brand Guidelines Placeholder] Please review our brand guidelines for instructions on correctly using the KickZone name, logo variations, color palette, and typography in your publications.</p>
            </section>
          </>
        );
      case 'payments':
        return (
          <>
            <section className="mb-10">
              <h2>Payment Methods & Policies</h2>
              <p>At KickZone, we offer a wide range of secure payment options to ensure a smooth and convenient checkout experience for all our customers.</p>
              
              <h3>Accepted Payment Methods</h3>
              <p>We accept almost all major forms of digital payment, ensuring you can shop without friction.</p>

              <h3>UPI (Unified Payments Interface)</h3>
              <p>Pay instantly via Google Pay, PhonePe, Paytm, or any BHIM UPI app. UPI is the fastest and most seamless way to checkout. Simply enter your VPA or scan the QR code to complete the transaction directly from your bank app.</p>
              
              <h3>Debit/Credit Cards</h3>
              <p>We accept Visa, Mastercard, RuPay, Maestro, and American Express. All card transactions are processed through highly secure 3D-secure gateways involving OTP verification from your issuing bank.</p>
              
              <h3>Wallets</h3>
              <p>Pay using linked wallets like Amazon Pay, Paytm Wallet, Mobikwik, or PhonePe Wallet. Wallets offer one-click checkout experiences if sufficiently pre-funded.</p>

              <h3>Cash on Delivery (CoD)</h3>
              <p>Prefer to pay with cash? No problem. Cash on Delivery is available for the majority of our standard products. Pay the delivery executive in cash or via a UPI QR scan at your doorstep once the item arrives. (Valid for eligible products and pin codes up to a specific order value limit).</p>
              
              <h3>Payment Secure Process</h3>
              <p>Your security is our top priority. All online transactions are processed through 256-bit encrypted secure payment gateways that are PCI-DSS compliant. KickZone does not store your full card details or CVV numbers on our servers.</p>
              
              <h3>Payment Failure Handling</h3>
              <p>If your payment is interrupted or fails due to network issues, do not panic. If the amount was deducted from your account, it will automatically be refunded to the original payment source. Refund timelines for failed transactions generally range from 3 to 5 business days depending on your bank.</p>
              
              <h3>Refunds on Cancellations/Returns</h3>
              <p>When you cancel an order or return an item, the refund is initiated automatically once the cancellation is confirmed or the returned item passes quality checks. The refund will be credited back to your original payment method. For Cash on Delivery orders, refunds are processed to your KickZone Wallet or a verified bank account.</p>

              <h3>Payment Safety Tips</h3>
              <p>Never share your OTP, PIN, or CVV with anyone, including individuals claiming to be KickZone representatives. Ensure you are on the official KickZone app or website before making a payment. Do not click on unverified payment links sent via SMS from unknown numbers.</p>

              <h3>Invoice/Payment Confirmation</h3>
              <p>A digital invoice is generated immediately after a successful payment and sent to your registered email. You can also download your GST-compliant invoices anytime from the 'My Orders' section on your profile dashboard.</p>
            </section>
          </>
        );
      case 'shipping':
        return (
          <>
            <section className="mb-10">
              <h2>Shipping and Delivery Policy</h2>
              <p>We are committed to delivering your orders as quickly and securely as possible. Our delivery network spans across thousands of pin codes, ensuring your favorite items reach you in perfect condition.</p>
              
              <h3>The Delivery Process</h3>
              <p>Once your order is placed, it is routed to the nearest fulfillment center or seller. Items are rigorously checked for quality, securely packed, and handed over to our trusted delivery partners. You will receive SMS and email updates at every stage of the journey from dispatch to arrival.</p>
              
              <h3>Delivery Timeline</h3>
              <p>Delivery times vary based on your location and the product's availability. Standard delivery takes 3-5 business days. We also offer Expedited Delivery (1-2 days) and Same-Day Delivery for select products in major metropolitan areas. You can view the estimated delivery date on the product page before ordering.</p>
              
              <h3>Shipping Charges</h3>
              <p>Shipping charges are calculated based on the weight of the items and the distance to the delivery address. Detailed shipping costs will be visible on the cart page before you complete the checkout. Additional charges may apply for oversized items or expedited delivery.</p>

              <h3>Free Delivery</h3>
              <p>KickZone offers Free Delivery on millions of items for orders exceeding a specific minimum value. Members of our KickZone Plus loyalty program enjoy free standard shipping on all valid KickZone fulfilled orders with no minimum order value.</p>

              <h3>Grocery Delivery Slot Placeholder</h3>
              <p>[Grocery Delivery Slot Placeholder] For grocery and fresh produce, you can choose specific delivery time slots during checkout. Our delivery executives will ensure your groceries arrive fresh within the selected 2-hour window.</p>
              
              <h3>Delivery Partners Placeholder</h3>
              <p>[Delivery Partners Placeholder] We partner with top-tier national logistics providers as well as our in-house KickZone Logistics fleet to ensure fast and reliable delivery nationwide.</p>

              <h3>Tracking Orders</h3>
              <p>You can track the live status of your shipment from the 'My Orders' section. You'll see a detailed timeline of when the item was packed, shipped, arrived at your local hub, and out for delivery. You can also track the order via the courier partner's website using the AWB tracking number provided.</p>

              <h3>Delayed Delivery</h3>
              <p>While we strive for perfect on-time delivery, unforeseen circumstances like extreme weather or logistical strikes can cause delays. In such cases, we proactively update the estimated delivery date and notify you via email and SMS immediately.</p>

              <h3>Address Accuracy</h3>
              <p>To ensure smooth delivery, please provide a complete and accurate delivery address, including landmarks, street names, and correct contact numbers. Our delivery executives may call you for directions if needed.</p>
              
              <h3>Damaged Package Process</h3>
              <p>If your package arrives with visible damage or tampering (e.g., torn tape, crushed box), please refuse the delivery and contact our support team immediately. If you discover internal damage after opening an intact box, take photographs and initiate a return request immediately through the app.</p>
            </section>
          </>
        );
      case 'cancellation':
        return (
          <>
            <section className="mb-10">
              <h2>Cancellation & Returns Policy</h2>
              <p>We want you to love what you ordered. If you change your mind or if an item isn't right, our straightforward cancellation and return policy has you covered.</p>
              
              <h3>Cancellation Rules</h3>
              <p>You can cancel an order any time before it is packed or dispatched from the warehouse. Simply go to 'My Orders', select the item, and click 'Cancel'. Instant refunds will be processed for prepaid orders. Once an order is shipped, you cannot cancel it online, but you can simply refuse the delivery at your doorstep when the executive arrives.</p>
              
              <h3>Return Eligibility</h3>
              <p>Most items purchased on KickZone can be returned within standard return windows (typically 7, 10, or 30 days depending on the product category). Items must be returned in their original condition, with price tags intact, unworn/unused, and inside the original manufacturer packaging with all accessories.</p>
              
              <h3>Replacement Process</h3>
              <p>If you received a defective, damaged, or incorrect item, you can opt for a free replacement instead of a refund. We will schedule a return pickup for the defective item and dispatch a brand new one to you simultaneously, subject to stock availability.</p>

              <h3>Refund Timeline</h3>
              <p>Once a returned item is picked up and passes the initial quality check (or upon receipt at our seller's facility), a refund is initiated. It takes 1-2 days for KickZone Wallet, 3-5 days for Credit/Debit Cards and Net Banking, and instant for UPI. You will be notified via email once the refund has been processed.</p>

              <h3>Damaged Item Reporting</h3>
              <p>If you receive a defective or physically damaged item, report it within 24-48 hours of delivery. Navigate to 'My Orders', select 'Return/Replace', and upload clear photos of the damage along with the box unboxing video if available. This speeds up the approval process significantly.</p>
              
              <h3>Non-Returnable Categories</h3>
              <p>For hygiene, safety, and legal reasons, certain items are non-returnable. This includes but is not limited to: innerwear, personal care and cosmetics, perishable goods, software licenses, customized items, and digital downloads. Please check the 'Return Policy' section mentioned on the product detail page before purchasing.</p>

              <h3>Seller Approval Placeholder</h3>
              <p>[Seller Approval Placeholder] Some returns for high-value electronics, smartphones, or furniture may require validation or approval directly from the seller or brand authorized service center before the return request is accepted.</p>

              <h3>Pickup Process</h3>
              <p>We offer free doorstep pickup for valid returns in most serviceable locations. Ensure you hand over the correct item in its original box to our courier partner. Proper packaging helps prevent damage during transit. If pickup is unavailable in your remote area, you may be asked to self-ship the item, and the reasonable shipping costs will be reimbursed to you.</p>

              <h3>Customer Responsibility</h3>
              <p>Customers are responsible for handing over the correct item for return. Handing over incorrect items, missing accessories, or maliciously damaged boxes will result in the return being rejected at the warehouse, and the item will be sent back without a refund.</p>
            </section>
          </>
        );
      case 'report':
        return (
          <>
            <section className="mb-10">
              <h2>Report Infringement</h2>
              <p>KickZone respects the intellectual property rights of others and takes claims of infringement very seriously. If you believe your intellectual property (trademark, copyright, or design) is being infringed by a listing on our platform, please use this dedicated process to report it directly to our legal team.</p>
              
              <h3>Intellectual Property Overview</h3>
              <p>KickZone operates as an online marketplace intermediary where independent third-party sellers list and sell their products. Since we do not manufacture, procure, or directly control these listings or the items sold, we rely on brand owners and rights holders to notify us of potential IP violations.</p>
              
              <h3>Trademark Complaint</h3>
              <p>If you believe a listing is using your registered trademark without authorization (e.g., selling goods with your brand logo, name, or tagline unlawfully), you can report unauthorized use. You must provide your valid and active Trademark Registration Certificate as evidence to action the teardown.</p>
              
              <h3>Copyright Complaint</h3>
              <p>If a seller has copied your copyrighted images, product photography, text descriptions, manual content, or other original works without permission, file a copyright infringement notice with links to your original work (source) and the infringing KickZone listing URLs.</p>

              <h3>Counterfeit Product Report</h3>
              <p>If you are a brand owner and spot products masquerading as your brand (counterfeits, knock-offs, or fakes), you can file a counterfeit complaint. KickZone maintains a zero-tolerance policy for counterfeits. We will permanently ban sellers found repeatedly guilty of peddling fake merchandise.</p>
              
              <h3>Brand Owner Complaint Process</h3>
              <p>Only the intellectual property owner or their authorized legal representative/agent may report a listing. Third-party observers or buyers who suspect fakes should report issues through standard customer support channels or product review mechanisms.</p>
              
              <h3>Required Evidence</h3>
              <p>To process your request quickly and legally, you must include: the exact details of the IP right being infringed, specific URLs of the infringing product pages, proof of ownership (certificates/registration docs), and a formal declaration that the information provided is accurate under penalty of perjury and that you have a good-faith belief of unauthorized use.</p>
              
              <h3>Takedown Process & Review Timeline</h3>
              <p>Once a valid claim with adequate proof is received, our trust & safety team reviews it promptly. Our average review timeline is 2-4 business days. If the claim is validated, the infringing listings are immediately disabled, and the seller is notified. Repeat offenders face immediate account suspension and blacklisting.</p>

              <h3>Misuse Warning</h3>
              <p>Filing false, misleading, or abusive infringement claims specifically to target competitors is a serious offense that can lead to legal liability. If you are unsure whether your rights are actually being infringed upon, we strongly recommend consulting legal counsel before submitting a formal report.</p>

              <h3>Contact Placeholder</h3>
              <p>[Contact Placeholder] To officially submit an infringement report, please email a formal Notice of Infringement with all required documentation and URLs to legal-infringement@kickzone.local.</p>
            </section>
          </>
        );
      case 'security':
        return (
          <>
            <section className="mb-10">
              <h2>Security and Safety</h2>
              <p>We are absolutely dedicated to keeping your personal data, financial transactions, and user account secure. We employ industry-leading security practices, advanced encryption, and continuous monitoring to protect you every time you step into the KickZone marketplace.</p>
              
              <h3>Account Security</h3>
              <p>Your KickZone account is protected by robust authentication mechanisms. We monitor for suspicious login attempts and will preemptively alert you or temporarily lock your account if we detect highly abnormal activity (such as login attempts from unfamiliar countries, unusual IP addresses, or unrecognized devices).</p>
              
              <h3>Password Safety</h3>
              <p>We strongly recommend using a unique, complex password for your KickZone account (a mix of upper/lower case letters, numbers, and symbols). Never share your password, OTPs (One Time Passwords), or security questions with anyone—even individuals claiming to be KickZone support agents. We also support two-factor authentication (2FA) for added account security.</p>
              
              <h3>Payment Security</h3>
              <p>All sensitive payment information is securely processed. We are fully compliant with the Payment Card Industry Data Security Standard (PCI DSS). For your safety, KickZone never stores your full credit/debit card numbers, CVVs, or internet banking passwords on our internal servers.</p>

              <h3>Secure Checkout</h3>
              <p>Our secure checkout process is completely encrypted using high-grade TLS/SSL certificates over HTTPS connections. You can verify this by checking for the padlock icon in your browser's address bar during the checkout phase.</p>
              
              <h3>Suspicious Activity</h3>
              <p>If you notice an order you didn't place, an address you didn't add, or an unrecognized login alert, immediately change your password and contact our fraud prevention team via customer support. We will freeze any pending unauthorized orders.</p>
              
              <h3>Phishing Warning</h3>
              <p>Beware of phishing emails or SMS messages claiming you have won a lottery, asking for urgent payments, or demanding account verification. KickZone emails will only come from official '@kickzone.com' addresses. We will NEVER ask for your password, CVV, or OTP on a phone call or email.</p>

              <h3>Privacy Protection</h3>
              <p>Our security infrastructure goes hand-in-hand with our rigorous privacy policies. We secure the data we collect and ensure it is mathematically protected and not sold to unauthorized data brokers. Read our comprehensive Privacy Policy for full details on how we handle your data.</p>
              
              <h3>User Safety Tips</h3>
              <ul className="list-disc pl-5 mt-4 mb-4">
                <li>Always log out completely when using public or shared computers.</li>
                <li>Keep your mobile device secure with a strong screen lock or biometrics.</li>
                <li>Regularly review your recent orders to spot any unauthorized purchases early.</li>
                <li>Report any suspicious emails, calls, or texts impersonating KickZone immediately.</li>
                <li>Keep your KickZone app updated to the latest version for the newest security patches.</li>
              </ul>

              <h3>Data Protection Overview</h3>
              <p>We implement stringent access controls internally to ensure your personal data is only accessed by authorized personnel on a strict need-to-know basis. Our databases are protected by advanced firewalls, intrusion detection systems, and we conduct regular third-party security audits and penetration testing.</p>

              <h3>Responsible Disclosure Placeholder</h3>
              <p>[Responsible Disclosure Placeholder] If you are a security researcher and believe you have discovered a security vulnerability on our platform or APIs, we invite you to report it via our Bug Bounty program. Please disclose responsibly and give our engineering team adequate time to patch the issue before making the vulnerability public.</p>
            </section>
          </>
        );
      case 'faq':
        return (
          <>
            <section className="mb-10">
              <h2>Frequently Asked Questions</h2>
              <p>Find detailed answers to the most common questions about KickZone services below. Our FAQ is designed to provide quick resolutions so you can focus on shopping.</p>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="font-bold">1. How do I create a KickZone account?</h4>
                  <p>Click on the Profile or Login icon in the top right corner. Enter your email or phone number, and follow the simple OTP verification process to register instantly.</p>
                </div>
                <div>
                   <h4 className="font-bold">2. Can I use KickZone in Guest Mode?</h4>
                   <p>Yes, you can browse products, use the search, and add items to your cart as a guest. However, a registered account is required to actually place an order, view order history, and track shipments securely.</p>
                </div>
                <div>
                   <h4 className="font-bold">3. How do I log in?</h4>
                   <p>You can log in securely using your registered email address or mobile number along with the secure OTP sent to your device.</p>
                </div>
                <div>
                   <h4 className="font-bold">4. How do I place an order?</h4>
                   <p>Browse products, select size/quantity if applicable, click "Add to Cart", proceed to Checkout, select your delivery address, choose a payment method, and confirm the order. It's that simple.</p>
                </div>
                <div>
                   <h4 className="font-bold">5. What payment methods are accepted?</h4>
                   <p>We seamlessly accept Credit/Debit cards, UPI (Google Pay, PhonePe), Wallets, Net Banking, and Cash on Delivery (where applicable based on pin code restrictions).</p>
                </div>
                <div>
                   <h4 className="font-bold">6. How can I track my order delivery?</h4>
                   <p>Go to the 'Orders' page, click on the specific order, and select 'Track Order' to see real-time updates and an estimated time of arrival.</p>
                </div>
                <div>
                   <h4 className="font-bold">7. What is the return policy?</h4>
                   <p>Eligible items can be returned within the specified window (typically 7-15 days depending on category) if they are unused, unwashed, and in original packaging.</p>
                </div>
                <div>
                   <h4 className="font-bold">8. How do I get a refund?</h4>
                   <p>Refunds are initiated immediately once the returned product passes quality checks and are credited to your original payment method generally within 3-7 business days.</p>
                </div>
                <div>
                   <h4 className="font-bold">9. How do I use the Wishlist?</h4>
                   <p>Click the heart icon on any product card or details page to save it to your Wishlist, allowing you to easily find or purchase it later when you're ready.</p>
                </div>
                <div>
                   <h4 className="font-bold">10. How does the Cart work?</h4>
                   <p>Items stay in your cart temporarily while you browse. Keep in mind that adding an item to your cart does not reserve the stock; completely finishing checkout secures the item.</p>
                </div>
                <div>
                   <h4 className="font-bold">11. How do I apply coupons?</h4>
                   <p>During the cart review or payment step, enter your promotional code in the 'Apply Coupon' field to immediately reflect the discount on your total amount.</p>
                </div>
                <div>
                   <h4 className="font-bold">12. Where can I find Special Offers?</h4>
                   <p>Check the homepage banners or navigate to the 'Top Offers' category to see all ongoing mega sales, flash discounts, and bank card offers.</p>
                </div>
                <div>
                   <h4 className="font-bold">13. How does product search work?</h4>
                   <p>Use the search bar at the top of the app. You can search by product name, brand, or category. You can also apply extensive filters (price, rating, brand) on the results page.</p>
                </div>
                <div>
                   <h4 className="font-bold">14. How do I use the AI Assistant?</h4>
                   <p>Open the AI Assistant page and type natural queries just like you're talking to a human: "Show me running shoes under $50". It will analyze your request contextually and suggest the best matching products.</p>
                </div>
                <div>
                   <h4 className="font-bold">15. How do I become a seller?</h4>
                   <p>Click on "Become a Seller" in the top header or footer, register your business details and GST information, and you can start listing products on our marketplace within 24 hours.</p>
                </div>
                <div>
                   <h4 className="font-bold">16. Is my personal information private?</h4>
                   <p>Yes. We adhere to strict data protection standards. We only collect the minimal data necessary to fulfill your orders and improve the app. Read our exhaustive Privacy Policy for more.</p>
                </div>
                <div>
                   <h4 className="font-bold">17. Is it secure to pay on KickZone?</h4>
                   <p>Absolutely. Our payment gateways use industry-standard encryption protocols (PCI-DSS) to ensure your banking details are securely handled and never exposed.</p>
                </div>
                <div>
                   <h4 className="font-bold">18. Admin/Demo Notes Placeholder</h4>
                   <p>KickZone is an advanced demonstration application highlighting modern frontend layout techniques, routing, and AI integration. The details here are strictly placeholders.</p>
                </div>
                
                <p className="mt-8 text-gray-500 italic bg-gray-50 p-4 rounded-lg">Note: More FAQs covering 40+ specific scenarios are continuously updated based on user feedback. The list above acts as a core primer. Check back often for more detailed guides.</p>
              </div>
            </section>
          </>
        );
      case 'sitemap':
        return (
          <>
            <section className="mb-10">
              <h2>Website Sitemap</h2>
              <p>Use this comprehensive sitemap to quickly navigate to any structured section of the KickZone marketplace.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div>
                  <h3 className="font-bold border-b pb-2 mb-4 text-blue-900 border-blue-100">Shopping Pages</h3>
                  <ul className="space-y-3">
                    <li><Link to="/" className="text-gray-700 hover:text-blue-600 hover:underline">Home</Link></li>
                    <li><Link to="/categories" className="text-gray-700 hover:text-blue-600 hover:underline">Categories</Link></li>
                    <li><Link to="/products" className="text-gray-700 hover:text-blue-600 hover:underline">Product Listing</Link></li>
                    <li><Link to="/product/1" className="text-gray-700 hover:text-blue-600 hover:underline">Product Detail Demo</Link></li>
                    <li><Link to="/search" className="text-gray-700 hover:text-blue-600 hover:underline">Search</Link></li>
                    <li><Link to="/wishlist" className="text-gray-700 hover:text-blue-600 hover:underline">Wishlist</Link></li>
                    <li><Link to="/cart" className="text-gray-700 hover:text-blue-600 hover:underline">Cart</Link></li>
                    <li><Link to="/checkout/address" className="text-gray-700 hover:text-blue-600 hover:underline">Checkout Workflow</Link></li>
                    <li><Link to="/orders" className="text-gray-700 hover:text-blue-600 hover:underline">Orders</Link></li>
                    <li><Link to="/profile" className="text-gray-700 hover:text-blue-600 hover:underline">Profile</Link></li>
                    <li><Link to="/offers" className="text-gray-700 hover:text-blue-600 hover:underline">Offers Hub</Link></li>
                    <li><Link to="/coupons" className="text-gray-700 hover:text-blue-600 hover:underline">Coupons</Link></li>
                    <li><Link to="/notifications" className="text-gray-700 hover:text-blue-600 hover:underline">Notifications</Link></li>
                    <li><Link to="/ai-assistant" className="text-gray-700 hover:text-blue-600 hover:underline">AI Assistant</Link></li>
                    <li><Link to="/admin" className="text-gray-700 hover:text-blue-600 hover:underline">Admin Summary Dashboard</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold border-b pb-2 mb-4 text-blue-900 border-blue-100">Footer Information Pages</h3>
                  <ul className="space-y-3">
                    <li><Link to="/contact-us" className="text-gray-700 hover:text-blue-600 hover:underline">Contact Us</Link></li>
                    <li><Link to="/about-us" className="text-gray-700 hover:text-blue-600 hover:underline">About Us</Link></li>
                    <li><Link to="/careers" className="text-gray-700 hover:text-blue-600 hover:underline">Careers</Link></li>
                    <li><Link to="/kickzone-stories" className="text-gray-700 hover:text-blue-600 hover:underline">KickZone Stories</Link></li>
                    <li><Link to="/press" className="text-gray-700 hover:text-blue-600 hover:underline">Press</Link></li>
                    <li><Link to="/payments" className="text-gray-700 hover:text-blue-600 hover:underline">Payments Information</Link></li>
                    <li><Link to="/shipping" className="text-gray-700 hover:text-blue-600 hover:underline">Shipping & Delivery</Link></li>
                    <li><Link to="/cancellation-returns" className="text-gray-700 hover:text-blue-600 hover:underline">Cancellation & Returns</Link></li>
                    <li><Link to="/faq" className="text-gray-700 hover:text-blue-600 hover:underline">FAQ Help Center</Link></li>
                    <li><Link to="/report-infringement" className="text-gray-700 hover:text-blue-600 hover:underline">Report Infringement</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold border-b pb-2 mb-4 text-blue-900 border-blue-100">Policy Pages</h3>
                  <ul className="space-y-3">
                    <li><Link to="/terms-of-use" className="text-gray-700 hover:text-blue-600 hover:underline">Terms of Use</Link></li>
                    <li><Link to="/privacy" className="text-gray-700 hover:text-blue-600 hover:underline">Privacy Policy</Link></li>
                    <li><Link to="/security" className="text-gray-700 hover:text-blue-600 hover:underline">Security Hub</Link></li>
                    <li><Link to="/sitemap" className="text-gray-700 hover:text-blue-600 hover:underline">Site Directory / Sitemap</Link></li>
                  </ul>
                  
                  <h3 className="font-bold border-b pb-2 mb-4 mt-8 text-blue-900 border-blue-100">Social Connections</h3>
                  <ul className="space-y-3">
                    <li><Link to="/social/facebook" className="text-gray-700 hover:text-blue-600 hover:underline">Facebook</Link></li>
                    <li><Link to="/social/twitter" className="text-gray-700 hover:text-blue-600 hover:underline">Twitter</Link></li>
                    <li><Link to="/social/youtube" className="text-gray-700 hover:text-blue-600 hover:underline">YouTube</Link></li>
                    <li><Link to="/social/instagram" className="text-gray-700 hover:text-blue-600 hover:underline">Instagram</Link></li>
                  </ul>
                </div>
              </div>
            </section>
          </>
        )
      default:
        return (
          <>
            <section className="mb-10">
              <h2>{title} Information</h2>
              <p>Information regarding {title.toLowerCase()} goes here.</p>
            </section>
          </>
        );
    }
  };

  return (
    <InfoPageLayout
      title={title}
      breadcrumbs={[{ label: title }]}
    >
      {renderContent()}
    </InfoPageLayout>
  );
};

export const SocialPlaceholder: React.FC<{ platform: string }> = ({ platform }) => {
  return (
    <InfoPageLayout title={`${platform} Page`} breadcrumbs={[{ label: `${platform} Page` }]}>
      <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Official KickZone social page coming soon.</h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">Stay tuned for updates on our {platform} presence! We'll be bringing you exciting product drops, behind-the-scenes content, and exclusive announcements.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm">
          Follow us on {platform} (Placeholder)
        </button>
      </div>
    </InfoPageLayout>
  );
};
