
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES, ICON_MAP } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tight"
          >
            How We Can Help
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col glass-card rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="mb-8 p-4 bg-navy-800/50 rounded-2xl w-fit border border-white/5 group-hover:scale-110 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-500">
                <div className="group-hover:animate-pulse-slow">
                  {ICON_MAP[service.icon]}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-[22px] font-bold text-white mb-5 leading-[1.3] tracking-tight group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-[14px] leading-relaxed mb-8 font-normal">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10">
                   <Link to="/services" className="text-cyan-400 text-[10px] font-black uppercase tracking-widest hover:translate-x-1 focus:outline-none rounded-sm transition-transform inline-flex items-center group/btn">
                     See How We Help
                     <svg className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                     </svg>
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
