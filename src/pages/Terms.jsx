import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800 bg-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">Terms of Use of Lokaci</h1>

      <section className="mb-6">
        <p className="mb-4">
          Welcome to <strong>LOKACI</strong>. This document is an electronic record in terms of the Information Technology Act, 2000
          and published in accordance with Rule 3 of the Information Technology (Intermediaries guidelines) Rules, 2011.
        </p>
        <p className="mb-4">
          Your use of the App/Website and services offered is subject to and governed by the following terms. By accessing or
          using the platform, you agree to be bound by these terms. Please read them carefully.
        </p>
      </section>

      {/* INTRODUCTION */}
      <Section title="1. Introduction">
        <Subsection title="1.1 Translation of the terms">
          LOKACI may provide translations for convenience, but the English version prevails in case of conflicts.
        </Subsection>
        <Subsection title="1.2 Definitions">
          "YOU" or “employee” refers to any natural or legal person registered on the App. "We", "Us", "Our" refer to LOKACI.com.
        </Subsection>
        <Subsection title="1.3 Use of another’s account">
          You may not impersonate or access the platform via someone else’s account unless authorized.
        </Subsection>
      </Section>

      {/* OBLIGATIONS */}
      <Section title="2. Obligations">
        <Subsection title="2.1 Membership Eligibility">
          Only legally competent individuals may use the platform. Minors or insolvents are not eligible.
        </Subsection>
        <Subsection title="2.2 Worker’s Eligibility">
          You declare that your workers are of minimum legal age and you meet all eligibility criteria.
        </Subsection>
        <Subsection title="2.3 Responsibility for your Account">
          You are responsible for all activities under your account, and must maintain its confidentiality.
        </Subsection>
        <Subsection title="2.4 Prohibited Content">
          List includes nudity, hate speech, fake profiles, spam, etc.
        </Subsection>
      </Section>

      {/* RIGHTS AND LIMITS */}
      <Section title="3. Rights and Limits">
        <BulletList title="3.1 Intellectual Property Rights" items={[
          "All rights reserved by LOKACI.",
          "Trademarks, logos, etc. belong to LOKACI."
        ]} />
        <Subsection title="3.2 Price Modification Rights">
          LOKACI may change pricing without notice in accordance with applicable laws.
        </Subsection>
        <Subsection title="3.3 Limitations on services / bookings">
          LOKACI can restrict, suspend, or terminate your account for breaches or misuse.
        </Subsection>
        <Subsection title="3.4 Messaging Limits">
          Sending spam or unsolicited messages to customers is strictly prohibited.
        </Subsection>
        <Subsection title="3.5 No Discrimination">
          Discrimination based on protected classes is illegal and not tolerated.
        </Subsection>
        <Subsection title="3.6 Content Posting">
          Prohibited content includes offensive, misleading, or illegal materials.
        </Subsection>
        <Subsection title="3.7 Relationship">
          You and LOKACI are independent contractors.
        </Subsection>
        <Subsection title="3.8 Listing of Services">
          You must be legally allowed to provide listed services and ensure they are accurate.
        </Subsection>
      </Section>

      {/* DISCLAIMER */}
      <Section title="4. Disclaimer and Limit of Liability">
        <Subsection title="4.1 No Warranty">
          Services are provided “AS IS” without warranties.
        </Subsection>
        <Subsection title="4.2 Credit/Debit Card Fraud">
          You bear responsibility for fraudulent transactions.
        </Subsection>
        <Subsection title="4.3 Product Side-effects">
          Service providers are responsible for any side-effects caused.
        </Subsection>
        <Subsection title="4.4 Disclosure of Personal Info">
          LOKACI is not liable for data breaches by third parties.
        </Subsection>
      </Section>

      {/* TERMINATION */}
      <Section title="5. Termination">
        <Subsection title="5.1 Termination from Services">
          Either party may terminate at any time.
        </Subsection>
        <Subsection title="5.2 Suspension of Account">
          Accounts may be suspended for unethical conduct.
        </Subsection>
        <Subsection title="5.3 Legal Action">
          Legal actions may be taken for hacking, misuse, or defamatory statements.
        </Subsection>
      </Section>

      {/* ADVERTISEMENTS */}
      <Section title="6. Advertisements">
        <Subsection title="6.1 Copyright">
          LOKACI owns all advertising and promotional materials.
        </Subsection>
      </Section>

      {/* FEES & PAYMENTS */}
      <Section title="7. Fees and Payments">
        <BulletList title="7.1 Registration Fees" items={["Currently free."]} />
        <BulletList title="7.2 Charges for Advertisements" items={["No advertisement fees."]} />
        <Subsection title="7.3 Payments">
          Detailed cancellation policies and charges listed.
        </Subsection>
        <Subsection title="7.4 Taxation">
          GST-compliant billing as per Indian laws.
        </Subsection>
        <Subsection title="7.5 Pricing">
          Prices are determined by LOKACI. No extra charges are allowed.
        </Subsection>
      </Section>

      {/* DISPUTES */}
      <Section title="8. Dispute Resolution">
        <Subsection title="8.1 Grievance Redressal">
          Contact: <a href="mailto:grievance.officer@lokaci.com" className="text-blue-600">grievance.officer@lokaci.com</a>
        </Subsection>
        <Subsection title="8.2 Jurisdiction">
          Governed under Indian law. Courts of New Delhi have jurisdiction.
        </Subsection>
      </Section>

      {/* INDEMNITY */}
      <Section title="9. Indemnity">
        You agree to indemnify LOKACI against any legal claims from third parties due to your actions.
      </Section>

      {/* GENERAL TERMS */}
      <Section title="10. General Terms">
        <Subsection title="10.1 Important Points">
          This contract supersedes all prior agreements.
        </Subsection>
        <Subsection title="10.2 Incentive Programs">
          Governed by individual program terms. Subject to termination on misuse.
        </Subsection>
        <Subsection title="10.3 Changes to Terms">
          You are responsible for reviewing updates. Continued use implies acceptance.
        </Subsection>
      </Section>

      {/* PRIVACY POLICY */}
      <Section title="11. Privacy Policy">
        Data is protected under IT Act, 2000. Shared with affiliates only under legitimate circumstances.
      </Section>

      {/* DOs & DON'Ts */}
      <Section title="12. Lokaci Dos and Don’ts">
        Covers data security, neutrality in reviews, and platform conduct.
      </Section>

      {/* COMPLAINTS */}
      <Section title="13. Complaints">
        We may investigate behavior that causes issues with customers.
      </Section>

      {/* CONTACT */}
      <Section title="14. Contact Us">
        You may leave a message via the contact feature on the App/Website or email us.
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{title}</h2>
    <div className="pl-4 border-l-4 border-indigo-300">{children}</div>
  </div>
);

const Subsection = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-gray-700 mb-1">{title}</h3>
    <p className="text-gray-700">{children}</p>
  </div>
);

const BulletList = ({ title, items }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-gray-700 mb-1">{title}</h3>
    <ul className="list-disc pl-6 text-gray-700">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

export default TermsOfUse;
