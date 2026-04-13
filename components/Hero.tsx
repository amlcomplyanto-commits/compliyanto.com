
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Activity, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden bg-navy-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-grid opacity-20"></div>
      
      {/* Floating Nodes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        
        {/* Floating Icons */}
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/3 left-1/5 text-cyan-500/20">
          <Shield size={48} />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }} className="absolute bottom-1/3 right-1/5 text-orange-500/20">
          <Lock size={40} />
        </motion.div>
        <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute top-1/4 right-1/3 text-cyan-500/20">
          <Activity size={32} />
        </motion.div>
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 3 }} className="absolute bottom-1/4 left-1/3 text-cyan-500/20">
          <Database size={36} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Next-Gen Compliance</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Clear, Actionable AML Compliance for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MSBs and Fintechs</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-cyan-400 font-medium mb-12 text-glow"
          >
            Automation + Human Expertise = Zero Regulatory Surprises
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(255,123,0,0.4)] transition-all active:scale-95 text-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
