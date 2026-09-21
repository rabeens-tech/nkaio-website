import SubPageTemplate from '../templates/SubPages';

const privacySections = [
  {
    title: '1. Who we are',
    content:
      'NKAIO is a Portugal-based beauty and wellness organisation offering personalised beauty services, treatments, and appointment bookings. We act as the data controller for personal data collected through our website, booking forms, and appointment scheduling tools.',
  },
  {
    title: '2. Information we collect',
    content:
      'We may collect personal information such as your name, phone number, email address, treatment preferences, appointment date and time, booking history, and any other information you provide when contacting us or booking a session. We may also collect technical information such as browser type, device details, and site usage data for security and service improvement purposes.',
  },
  {
    title: '3. Why we process your data',
    content:
      'We use your personal data to manage appointments, confirm and remind you of bookings, provide beauty services, respond to your enquiries, maintain service records, improve our customer experience, prevent fraud or misuse, and comply with our legal and regulatory obligations.',
  },
  {
    title: '4. Legal basis for processing',
    content:
      'We process personal data on the basis of contract performance, legitimate interest, consent, and legal obligations. For example, when you book a session, we process your information to fulfil the appointment request. Where required, we will ask for clear consent before sending direct marketing messages or processing optional data beyond the essentials of the service.',
  },
  {
    title: '5. Bookings and appointment data',
    content:
      'Booking information is treated as sensitive operational data necessary to deliver your selected service. We use secure booking tools and scheduling systems, and we take appropriate technical and organisational measures to protect this information from unauthorised access, loss, or misuse. If we use third-party booking providers, they will process data only as necessary to deliver the booking service under their own privacy terms and applicable GDPR requirements.',
  },
  {
    title: '6. Data security',
    content:
      'We take reasonable and appropriate security measures to protect personal data, including secure hosting, restricted access controls, password protection, encryption where applicable, and careful management of third-party service providers. While no system can guarantee absolute security, we use commercially reasonable safeguards to protect client information in line with GDPR principles.',
  },
  {
    title: '7. Data retention',
    content:
      'We retain personal information only for as long as necessary for the purposes described in this policy, or as required by applicable law, accounting, tax, or dispute-resolution obligations. Appointment records are generally kept for a limited period to maintain service quality and legal compliance.',
  },
  {
    title: '8. Your GDPR rights',
    content:
      'Under the GDPR, you have the right to access your personal data, request correction of inaccurate data, request deletion of your data where appropriate, restrict or object to processing, and request data portability. You also have the right to withdraw consent at any time where consent is the legal basis for processing. To exercise any of these rights, please contact us using the details below.',
  },
  {
    title: '9. Cookies and website analytics',
    content:
      'Our website may use cookies or similar tools to ensure proper functionality, improve user experience, and understand visitor behaviour. Cookies may help us remember preferences and measure site performance. You can manage cookie preferences in your browser settings and, where required, through our cookie notice or consent mechanism.',
  },
  {
    title: '10. Marketing communications',
    content:
      'We may send service updates, reminders, or promotional content only where you have given us your consent or where such communication is otherwise allowed under applicable law. You can opt out at any time by following the unsubscribe link in our communications or by contacting us directly.',
  },
  {
    title: '11. International transfers',
    content:
      'If personal data is transferred outside the European Economic Area (EEA), we will ensure appropriate safeguards are in place in accordance with GDPR requirements, such as adequacy decisions, standard contractual clauses, or other lawful transfer mechanisms.',
  },
  {
    title: '12. Contact and complaints',
    content:
      'If you have any questions about this Privacy Policy, your personal data, or the way we handle your information, please contact us. If you believe we have not handled your personal data in accordance with the law, you have the right to make a complaint to the relevant data protection authority in Portugal or in the EU member state where you live or work.',
  },
];

const Privacy = () => {
  return (
    <SubPageTemplate>
      <main className="bg-[#090909] px-6 py-12 text-[#f1ece2] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 border-b border-[#c7a96b]/30 pb-8">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c7a96b]">
              Privacy Policy
            </p>
            <h1 className="font-serif text-4xl text-[#f1ece2] sm:text-5xl">
              Your privacy matters
            </h1>
          </div>

          <div className="space-y-8">
            <p className="text-base leading-7 text-[#f1ece2]/80">
              This Privacy Policy explains how NKAIO collects, uses, stores, and protects personal information from clients who book beauty services, treatments, or appointments through our website or related booking channels. We are committed to protecting your data and handling it in accordance with the General Data Protection Regulation (GDPR).
            </p>

            {privacySections.map((section) => (
              <section key={section.title} className="border-b border-white/10 pb-6 last:border-b-0">
                <h2 className="mb-3 text-xl font-medium text-[#e0c88e]">{section.title}</h2>
                <p className="text-base leading-7 text-[#f1ece2]/80">{section.content}</p>
              </section>
            ))}

            <div className="rounded-[22px] border border-[#c7a96b]/30 bg-[#c7a96b]/[0.04] p-6">
              <h2 className="mb-2 text-xl font-medium text-[#e0c88e]">Contact</h2>
              <p className="text-base leading-7 text-[#f1ece2]/80">
                If you would like to access, update, or delete your personal data, or if you have any questions about this policy, please contact us via the channels provided on our website or through the contact section of this site.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SubPageTemplate>
  );
};

export default Privacy;