import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Coins, Globe2, CreditCard } from 'lucide-react';

const INDUSTRIES = [
  { name: 'Money Services Businesses', icon: <Building2 className="w-10 h-10 mb-6 text-cyan-400/50 group-hover:text-cyan-400 transition-colors duration-500" /> },
  { name: 'Fintech Companies', icon: <Landmark className="w-10 h-10 mb-6 text-cyan-400/50 group-hover:text-cyan-400 transition-colors duration-500" /> },
  { name: 'Crypto Payment Platforms', icon: <Coins className="w-10 h-10 mb-6 text-cyan-400/50 group-hover:text-cyan-400 transition-colors duration-500" /> },
  { name: 'Remittance Networks', icon: <Globe2 className="w-10 h-10 mb-6 text-cyan-400/50 group-hover:text-cyan-400 transition-colors duration-500" /> },
  { name: 'Payment Processors', icon: <CreditCard className="w-10 h-10 mb-6 text-cyan-400/50 group-hover:text-cyan-400 transition-colors duration-500" /> },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-navy-950 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tight"
          >
            Who We Work With
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto font-light"
          >
            We partner with businesses that move money, helping them stay compliant and grow safely.
          </motion.p>
        </div>
        
        {/* Mobile: Horizontal Scroll, Desktop: Grid */}
        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 snap-x snap-mandatory no-scrollbar">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[280px] md:min-w-0 snap-center group glass-card p-8 rounded-3xl border border-white/5 text-center hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="flex justify-center group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-500">
                {industry.icon}
              </div>
              <h3 className="font-bold text-white text-sm tracking-wide group-hover:text-cyan-400 transition-colors duration-500">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
