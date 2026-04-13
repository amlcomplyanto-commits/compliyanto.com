import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Globe } from 'lucide-react';
import WhyUs from '../components/WhyUs';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | ComplyAnto AML Consulting";
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-50 pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
            Who We Are
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            We're a team of independent AML advisors who help Money Services Businesses and Fintechs navigate complex regulations without slowing down.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100 relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold text-[#2563eb] mb-8">Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              At ComplyAnto, our goal is simple: to make compliance clear, practical, and effective. We know that navigating the financial regulatory landscape can be overwhelming. That's why we provide the clarity and independent oversight you need to operate with confidence. We believe that a strong compliance program shouldn't just be about checking boxes—it should protect your business and act as a foundation for safe, sustainable growth.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We want to be clear: we aren't here to sell you software. We are an independent consulting practice focused entirely on AML risk assessments, transaction intelligence, and real-world regulatory advice. We use our own analytical tools to dig deep into your data, giving you fast, precise insights that help you spot risks, fix gaps, and show regulators exactly what they need to see.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We combine years of expert judgment with data-driven analysis to help you build a stronger compliance framework—without the massive overhead of hiring a huge internal team. Think of us as an extension of your business, here to handle the heavy lifting so you can focus on what you do best.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Independent Advice',
              icon: <ShieldCheck className="w-10 h-10 text-[#2563eb]" />,
              desc: "We don't sell software, which means our advice is 100% objective. We recommend what actually works for your business, not what hits a sales quota."
            },
            {
              title: 'MSB Specialists',
              icon: <Award className="w-10 h-10 text-[#2563eb]" />,
              desc: "We know Money Services Businesses and Fintechs inside and out. We understand the unique pressures you face and the specific rules you need to follow."
            },
            {
              title: 'Cross-Border Experts',
              icon: <Globe className="w-10 h-10 text-[#2563eb]" />,
              desc: "Moving money internationally is complicated. We specialize in managing the unique risks that come with cross-border remittances and crypto payments."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-slate-200 text-center hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <WhyUs />
    </>
  );
};

export default AboutPage;
