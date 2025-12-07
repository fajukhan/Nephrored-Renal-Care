import React from "react";

const Privacy = () => {
  return (
    <div className="privacy-wrapper py-5">
      <div className="container privacy-container fade-in">

        <h1 className="text-center title my-5">Privacy Policy</h1>
        <p className="text-start fw-semibold date">Effective Date: 03 December 2025</p>

        <p className="mt-4">
          This Privacy Policy explains how Nephrored Renal Care Private Limited ("Nephrored Renal Care," 
          "we," "our," or "us") handles, protects, and manages the personal information of individuals 
          ("you" or "users") who access our website or use our dialysis-related services. Your privacy 
          is important to us, and we are committed to using your information responsibly and securely. 
          By using our website or services, you indicate that you understand and agree to the terms 
          outlined in this Privacy Policy.
        </p>

        {/* Section 1 */}
        <h2 className="sub-title mt-5">1. Acceptance of the Policy</h2>
        <ul>
          <li>You have read and understood this Privacy Policy.</li>
          <li>
            You permit Nephrored Renal Care to collect, store, use, and share your personal information 
            as described herein.
          </li>
          <li>You acknowledge that this Policy forms part of our website’s terms of use.</li>
        </ul>

        {/* Section 2 */}
        <h2 className="sub-title mt-4">2. Types of Information We Collect</h2>

        <h5 className="mt-3 fw-semibold">2.1 Personal Information Supplied by You</h5>
        <ul>
          <li>Full name, gender, age, date of birth</li>
          <li>Contact information (email, phone number, address)</li>
          <li>Medical details related to your dialysis care</li>
          <li>Insurance or payment-related information</li>
        </ul>

        <h5 className="mt-3 fw-semibold">2.2 Automatically Collected Data</h5>
        <ul>
          <li>Device and browser type</li>
          <li>IP address</li>
          <li>Pages viewed and interactions with the site</li>
          <li>Time spent and frequency of visits</li>
        </ul>

        <h5 className="mt-3 fw-semibold">2.3 Cookies & Tracking Tools</h5>
        <p>
          We may use cookies or similar identifiers to improve user experience, remember preferences, 
          and analyze site performance. You may modify your browser settings to limit cookie usage.
        </p>

        {/* Section 3 */}
        <h2 className="sub-title mt-4">3. How We Use Your Information</h2>
        <ul>
          <li>
            <strong>Delivering Medical & Support Services:</strong> Scheduling appointments, medical 
            records management, and personalized healthcare support.
          </li>
          <li>
            <strong>Enhancing User Experience:</strong> Improve website performance and optimize 
            services based on preferences.
          </li>
          <li>
            <strong>Essential Communications:</strong> Alerts, reminders, service updates, or 
            promotional messages (optional opt-out).
          </li>
          <li>
            <strong>Compliance Requirements:</strong> Legal, regulatory, and contractual obligations.
          </li>
        </ul>

        {/* Section 4 */}
        <h2 className="sub-title mt-4">4. Information Sharing</h2>
        <p>
          We do not sell your data. Information may be shared only with:
        </p>
        <ul>
          <li>
            <strong>Authorized Service Partners:</strong> IT, payment, data storage, or analytics 
            providers — strictly for operational purposes.
          </li>
          <li>
            <strong>Legal Requirements:</strong> When demanded by law, court orders, or authorities.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="sub-title mt-4">5. Data Storage & Retention</h2>
        <p>
          Your information is securely stored on servers within India. Certified third-party cloud 
          providers may be used with robust security measures. Data is retained only for the duration 
          required to provide services, comply with legal obligations, and enforce agreements.
        </p>

        {/* Section 6 */}
        <h2 className="sub-title mt-4">6. Safeguards & Security Measures</h2>
        <p>
          We implement strong security protocols to protect your information from unauthorized access, 
          misuse, alteration, or loss. Although no system is 100% secure, we continuously enhance our 
          measures to ensure maximum protection.
        </p>

        {/* Section 7 */}
        <h2 className="sub-title mt-4">7. Privacy of Minors</h2>
        <p>
          Our website and services are intended for users aged 18 and above. We do not knowingly collect 
          information from minors. If such information is identified, it will be deleted promptly.
        </p>

        {/* Section 8 */}
        <h2 className="sub-title mt-4">8. External Links</h2>
        <p>
          Our platform may contain links to third-party websites. We do not control their privacy 
          practices and encourage users to review their policies before sharing personal information.
        </p>

        {/* Section 9 */}
        <h2 className="sub-title mt-4">9. Policy Updates</h2>
        <p>
          This Privacy Policy may be revised periodically to reflect legal requirements or service 
          improvements. Updates will be posted on this page, and continued use of our services 
          constitutes acceptance of the revised terms.
        </p>

        {/* Section 10 */}
        <h2 className="sub-title mt-4">10. Contact & User Rights</h2>
        <p>
          To withdraw consent, update information, request corrections, or raise concerns, please 
          contact us in writing at:
        </p>

        <p className="fw-semibold">
          Nephrored Renal Care Private Limited <br />
          Plot no. 01 Naruka Colony, Basant Vihar <br />
          Sikar (Rajasthan) – 332001, India
        </p>

      </div>
    </div>
  );
};

export default Privacy;
