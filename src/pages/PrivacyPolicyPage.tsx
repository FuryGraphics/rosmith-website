import PageHeader from '../components/PageHeader';

export default function PrivacyPolicyPage() {
  const updated = 'June 4, 2026';

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${updated}`}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="space-y-8 text-slate text-[15px] leading-relaxed">

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">1. Who We Are</h2>
              <p>R.O. Smith Law Firm ("Firm," "we," "us," or "our") operates this website located at <strong>rosmithlawfirm.com</strong>. Our primary office is at 11418 238th Street, Elmont, NY 11003. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit an inquiry.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">2. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Contact information</strong> — name, phone number, and email address you provide when requesting a consultation.</li>
                <li><strong>Case details</strong> — any information you voluntarily include in a message or email regarding your legal matter.</li>
                <li><strong>Usage data</strong> — IP address, browser type, pages visited, and time spent on the site, collected automatically via cookies and analytics tools.</li>
                <li><strong>Chat widget data</strong> — messages submitted through our LeadConnector chat widget, including name, contact details, and conversation content.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>To respond to consultation requests and inquiries.</li>
                <li>To communicate with you about your legal matter.</li>
                <li>To improve the content and functionality of our website.</li>
                <li>To comply with applicable legal and professional obligations.</li>
              </ul>
              <p className="mt-3">We do <strong>not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">4. No Attorney-Client Relationship</h2>
              <p>Submitting information through this website — including through the chat widget, email, or any contact form — does <strong>not</strong> create an attorney-client relationship. Do not send confidential or time-sensitive information until an attorney-client relationship has been established through a signed retainer agreement.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">5. Cookies &amp; Analytics</h2>
              <p>We use cookies and third-party analytics (such as Google Analytics) to understand how visitors use our site. These tools may collect anonymized usage data. You can disable cookies through your browser settings; however, some features of the site may not function correctly as a result.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">6. Third-Party Services</h2>
              <p>Our website uses the following third-party services that may collect data independently under their own privacy policies:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>LeadConnector / GoHighLevel</strong> — chat widget and CRM platform.</li>
                <li><strong>Google Analytics</strong> — website traffic analytics.</li>
                <li><strong>Google Maps</strong> — embedded map for office location.</li>
              </ul>
              <p className="mt-3">We encourage you to review the privacy policies of these services directly.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">7. Data Security</h2>
              <p>We implement reasonable administrative and technical safeguards to protect information submitted through this site. However, no data transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">8. Children's Privacy</h2>
              <p>This website is not directed to individuals under the age of 13, and we do not knowingly collect personal information from children.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">9. Your Rights</h2>
              <p>Depending on your state of residence, you may have rights to access, correct, or delete personal information we hold about you. To exercise these rights, contact us at <a href="mailto:rsmit042179@gmail.com" className="text-gold font-semibold hover:underline">rsmit042179@gmail.com</a>.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of the site after any changes constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="mt-3 space-y-1">
                <p><strong>R.O. Smith Law Firm</strong></p>
                <p>11418 238th Street, Elmont, NY 11003</p>
                <p>Phone: <a href="tel:9175477563" className="text-gold font-semibold hover:underline">(917) 547-7563</a></p>
                <p>Email: <a href="mailto:rsmit042179@gmail.com" className="text-gold font-semibold hover:underline">rsmit042179@gmail.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
