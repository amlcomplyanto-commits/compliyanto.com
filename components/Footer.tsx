
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy-950 text-slate-400 pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Identity Column */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Logo scale={1.25} light />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm font-light">
              ComplyAnto is a premier regulatory consulting group specializing in AML/CFT governance. We integrate deep legal expertise with automated forensic tools to deliver audit-ready compliance for the digital era.
            </p>
          </div>
          
          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-8">
            <nav aria-label="Footer Company Links">
              <h4 className="text-white font-bold mb-8 uppercase text-[11px] tracking-[0.3em]">Company</h4>
              <ul className="space-y-5 text-sm font-medium text-slate-400">
                <li><Link to="/about" className="hover:text-cyan-400 transition-colors block">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition-colors block">Contact</Link></li>
              </ul>
            </nav>
            
            <nav aria-label="Footer Contact Links">
              <h4 className="text-white font-bold mb-8 uppercase text-[11px] tracking-[0.3em]">Contact</h4>
              <ul className="space-y-5 text-sm font-medium text-slate-400">
                <li><a href="mailto:contact@complyanto.com" className="hover:text-cyan-400 transition-colors block">contact@complyanto.com</a></li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 text-[10px] text-slate-500 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 uppercase tracking-[0.2em] font-bold">
          <p>&copy; 2026 ComplyAnto™</p>
          <nav aria-label="Footer Legal Links" className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookies</Link>
            <Link to="#" className="hover:text-white transition-colors">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
