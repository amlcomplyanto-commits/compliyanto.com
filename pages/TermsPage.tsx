import React, { useEffect } from 'react';

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Terms and Conditions | ComplyAnto AML Consulting";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 tracking-tight">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Introduction</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Welcome to ComplyAnto. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Services</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              ComplyAnto provides independent compliance consulting, AML risk assessments, and regulatory advisory services. We are not a law firm and do not provide legal advice.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Confidentiality</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We maintain strict confidentiality regarding all client information, proprietary data, and compliance strategies discussed during our engagements, subject to applicable legal and regulatory requirements.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our services are provided "as is" without warranties of any kind. ComplyAnto shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the "Last updated" date at the top of this page.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              If you have any questions about these Terms and Conditions, please contact us at advisory@complyanto.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
