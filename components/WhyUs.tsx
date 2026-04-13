import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-32 bg-navy-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Text & Counters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tight leading-tight">
              Our Compliance <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
              We navigate the complexities of financial regulations to protect your business from regulatory scrutiny and financial crime risks.
            </p>
            
            <ul className="space-y-5 mb-12">
              {[
                'BSA/AML risk frameworks',
                'Cross-border financial risk',
                'Transaction monitoring design',
                'Agent network oversight',
                'Suspicious activity detection'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-4 text-slate-200 font-medium group">
                  <div className="p-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: Dark Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-[3rem] p-12 relative overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
             
             <h3 className="text-3xl font-sans font-bold mb-10 text-white relative z-10 tracking-tight">Why ComplyAnto?</h3>
             
             <div className="space-y-8 relative z-10">
               <div className="border-l-2 border-cyan-500/50 pl-6 hover:border-cyan-400 transition-colors group">
                 <h4 className="font-bold text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors">Independent Perspective</h4>
                 <p className="text-slate-400 text-sm leading-relaxed font-light">Objective compliance advisory free from software vendor bias.</p>
               </div>
               <div className="border-l-2 border-cyan-500/50 pl-6 hover:border-cyan-400 transition-colors group">
                 <h4 className="font-bold text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors">MSB Regulatory Mastery</h4>
                 <p className="text-slate-400 text-sm leading-relaxed font-light">Deep understanding of state and federal MSB regulatory expectations.</p>
               </div>
               <div className="border-l-2 border-cyan-500/50 pl-6 hover:border-cyan-400 transition-colors group">
                 <h4 className="font-bold text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors">Advanced Analytics</h4>
                 <p className="text-slate-400 text-sm leading-relaxed font-light">Proprietary analytical approach to AML risk assessments.</p>
               </div>
               <div className="border-l-2 border-cyan-500/50 pl-6 hover:border-cyan-400 transition-colors group">
                 <h4 className="font-bold text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors">Practical Solutions</h4>
                 <p className="text-slate-400 text-sm leading-relaxed font-light">Actionable compliance frameworks that balance risk with business growth.</p>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
