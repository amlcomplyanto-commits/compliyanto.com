import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, ClipboardCheck, Globe, Search, ShieldAlert, MapPin, Package, Truck, Users, Activity } from 'lucide-react';
import Industries from '../components/Industries';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Services | ComplyAnto AML Consulting";
  }, []);

  const riskFactors = [
    { title: 'Jurisdiction Risk', icon: <MapPin className="w-6 h-6 text-[#2563eb]" />, desc: 'Where is the money going? We look closely at your geographic footprint and high-risk corridors.' },
    { title: 'Product Risk', icon: <Package className="w-6 h-6 text-[#2563eb]" />, desc: 'What are you offering? We assess the specific vulnerabilities tied to your financial products.' },
    { title: 'Delivery Channel Risk', icon: <Truck className="w-6 h-6 text-[#2563eb]" />, desc: 'How do customers interact with you? We analyze risks in digital, face-to-face, or agent-based transactions.' },
    { title: 'Customer Risk', icon: <Users className="w-6 h-6 text-[#2563eb]" />, desc: 'Who are you doing business with? We review your customer base, including PEPs and non-resident profiles.' },
    { title: 'Transaction Velocity', icon: <Activity className="w-6 h-6 text-[#2563eb]" />, desc: 'How fast is money moving? We look for unusual patterns in transaction volume and frequency.' }
  ];

  const services = [
    {
      id: 'aml-risk-assessment',
      title: 'AML Risk Assessments & Reports',
      description: "Every business is unique, and so are its risks. We take a deep dive into your operations—looking at where you do business, the products you offer, and how money moves—to build a clear, actionable picture of your risk exposure. Then, we give you the exact reports you need to show regulators you're in control.",
      deliverables: [
        'A complete, easy-to-understand Risk Assessment Report',
        'Clear mapping of your geographic and corridor risks',
        'A practical matrix of your product risks',
        'Reviews of how you score customer risk',
        'A step-by-step roadmap to fix any gaps'
      ],
      icon: <Shield className="w-10 h-10 text-[#2563eb]" />,
      methodology: riskFactors
    },
    {
      id: 'msb-compliance-consulting',
      title: 'MSB Compliance Consulting',
      description: "Running a Money Services Business comes with intense regulatory scrutiny. We help you build and manage compliance programs that actually work in the real world, from overseeing your agents to navigating state licensing and FinCEN rules.",
      deliverables: [
        'A custom AML/BSA manual built for your specific business',
        'Frameworks to safely manage your agent network',
        'Hands-on support for state licensing',
        'Guidance through FinCEN registration',
        'Training modules your team will actually understand'
      ],
      icon: <Globe className="w-10 h-10 text-[#2563eb]" />
    },
    {
      id: 'suspicious-activity-investigation',
      title: 'Suspicious Activity Investigation',
      description: "When a transaction looks suspicious, you need to know exactly what to do next. We help you dig into the details, clear false alarms, and write clear, accurate SARs when necessary.",
      deliverables: [
        'Deep-dive reports on complex transactions',
        'Help drafting and reviewing SAR narratives',
        'Management for historical lookback projects',
        'Strategies to reduce false-positive alerts',
        'Support when law enforcement comes knocking'
      ],
      icon: <Search className="w-10 h-10 text-[#2563eb]" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
            How We Can Help You
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Navigating financial regulations doesn't have to be overwhelming. We partner with you to build practical, effective AML and BSA compliance programs that protect your business and keep regulators happy.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-10 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-10 items-start"
            >
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex-shrink-0">
                {service.icon}
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">What You Get</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.methodology && (
                  <div className="mt-10 pt-10 border-t border-slate-100">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 text-[#2563eb] rounded-full mb-6">
                      <ShieldAlert size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Smart, Data-Driven Insights</span>
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">How We Break Down Risk</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.methodology.map((factor, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <div className="bg-white p-3 rounded-xl inline-block shadow-sm mb-4">
                            {factor.icon}
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 mb-2">{factor.title}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{factor.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <Industries />
    </div>
  );
};

export default ServicesPage;
