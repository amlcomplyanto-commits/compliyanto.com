import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-32 bg-navy-950 relative overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0zOXYzOEgxdjM4eiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-[3rem] p-12 md:p-20 border border-cyan-500/20 shadow-[0_0_50px_rgba(0,240,255,0.1)] relative overflow-hidden"
        >
          {/* Decorative Corner Glows */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"></div>

          <div className="flex justify-center mb-8 relative z-10">
            <div className="p-4 bg-navy-800/80 rounded-2xl border border-white/10 shadow-lg">
              <ShieldCheck className="w-12 h-12 text-cyan-400" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-tight mb-6 relative z-10 leading-tight">
            Ready to simplify your compliance?
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
            Let's build a compliance program that protects your business and keeps regulators happy—without the headaches.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,123,0,0.3)] hover:shadow-[0_0_30px_rgba(255,123,0,0.5)] hover:-translate-y-1 flex items-center justify-center text-lg group">
              Contact Us
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
