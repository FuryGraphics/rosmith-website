import PageHeader from '../components/PageHeader';

export default function TermsPage() {
  const updated = 'June 4, 2026';

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle={`Last updated: ${updated}`}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate text-[15px] leading-relaxed">

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the R.O. Smith Law Firm website ("Site"), you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use the Site.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">2. Attorney Advertising</h2>
              <p>This website constitutes <strong>attorney advertising</strong> under the New York Rules of Professional Conduct. Prior results described on this Site do not guarantee, promise, or predict similar outcomes in future matters. Every legal case is unique and depends on its own facts and circumstances.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">3. No Attorney-Client Relationship</h2>
              <p>Use of this Site, submission of an inquiry form, use of the chat widget, or sending an email to R.O. Smith Law Firm does <strong>not</strong> create an attorney-client relationship. An attorney-client relationship is only established upon execution of a written retainer agreement signed by both the client and Attorney Randy O. Smith. Until such a relationship exists, please do not transmit confidential or privileged information through this Site.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">4. Informational Purposes Only</h2>
              <p>The content on this Site is provided for general informational purposes only and does not constitute legal advice. Laws vary by jurisdiction and change frequently. Do not rely on information on this Site as a substitute for consultation with a qualified attorney.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">5. Intellectual Property</h2>
              <p>All content on this Site, including text, graphics, logos, and design, is the property of R.O. Smith Law Firm and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content on this Site without express written permission.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">6. Third-Party Links &amp; Services</h2>
              <p>This Site may contain links to third-party websites or embed third-party services (such as Google Maps and the LeadConnector chat widget). We are not responsible for the content, privacy practices, or terms of any third-party services. Your use of third-party services is governed by their respective terms and policies.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">7. Disclaimer of Warranties</h2>
              <p>This Site is provided on an "as is" and "as available" basis without warranties of any kind, express or implied, including but not limited to accuracy, completeness, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">8. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, R.O. Smith Law Firm shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or reliance on this Site or its content.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">9. Governing Law</h2>
              <p>These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Nassau County or New York County, New York.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">10. Changes to These Terms</h2>
              <p>We reserve the right to modify these Terms &amp; Conditions at any time. The "Last updated" date at the top reflects the most recent revision. Continued use of the Site after changes constitutes acceptance of the revised Terms.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold uppercase text-navy mb-3">11. Contact</h2>
              <p>Questions regarding these Terms may be directed to:</p>
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
