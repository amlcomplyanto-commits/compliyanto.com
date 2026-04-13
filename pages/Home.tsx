import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import CTABanner from '../components/CTABanner';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "ComplyAnto | AML Compliance & Risk Intelligence for MSBs";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-navy-950 text-white selection:bg-cyan-500/30 selection:text-cyan-50">
      <Helmet>
        <title>ComplyAnto | AML Compliance & Risk Intelligence for MSBs</title>
        <meta name="description" content="ComplyAnto is a premier regulatory consulting group specializing in AML/CFT governance, risk assessments, and compliance advisory for MSBs and fintechs." />
        <meta name="keywords" content="AML compliance, BSA consulting, risk assessment, MSB compliance, fintech regulatory advisory, anti-money laundering, KYC automation" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://complyanto.com/" />
        <meta property="og:title" content="ComplyAnto | AML Compliance & Risk Intelligence for MSBs" />
        <meta property="og:description" content="ComplyAnto is a premier regulatory consulting group specializing in AML/CFT governance, risk assessments, and compliance advisory for MSBs and fintechs." />
        <meta property="og:image" content="https://complyanto.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://complyanto.com/" />
        <meta property="twitter:title" content="ComplyAnto | AML Compliance & Risk Intelligence for MSBs" />
        <meta property="twitter:description" content="ComplyAnto is a premier regulatory consulting group specializing in AML/CFT governance, risk assessments, and compliance advisory for MSBs and fintechs." />
        <meta property="twitter:image" content="https://complyanto.com/og-image.jpg" />
      </Helmet>

      <Hero />
      <Services />
      <Industries />
      <CTABanner />
    </div>
  );
};

export default Home;
