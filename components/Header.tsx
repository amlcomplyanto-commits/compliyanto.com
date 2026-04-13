
import React from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import Logo from './Logo';
import { ShieldCheck, Lock, MessageSquare } from 'lucide-react';

interface NavLinkProps {
  label: string;
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, to }) => {
  return (
    <RouterNavLink 
      to={to} 
      className={({ isActive }) => 
        `relative px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-cyan-400 focus:outline-none focus-visible:text-cyan-400 ${
          isActive ? 'text-cyan-400' : 'text-slate-400'
        }`
      }
    >
      {label}
    </RouterNavLink>
  );
};

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-navy-900/80 backdrop-blur-xl border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo and Security Status */}
        <div className="flex items-center space-x-6">
          <Link 
            to="/"
            className="group relative cursor-pointer transition-transform hover:scale-105 focus:outline-none" 
            aria-label="ComplyAnto Home"
          >
            <Logo scale={0.8} light className="origin-left" />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full group cursor-help transition-all hover:bg-emerald-500/20">
             <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
             <span className="text-[9px] font-black uppercase text-emerald-400 tracking-widest">Secure Node Active</span>
             <Lock size={10} className="text-emerald-400 ml-1 opacity-80" />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main Navigation">
          <NavLink label="Services" to="/services" />
          <NavLink label="About" to="/about" />
          <NavLink label="Contact" to="/contact" />
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button 
            type="button"
            className="relative group bg-navy-800 text-slate-300 px-6 py-2.5 rounded-lg font-bold text-[11px] tracking-widest uppercase border border-white/10 transition-all hover:border-cyan-400/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] focus:outline-none"
          >
            Client Portal
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-[0_0_10px_rgba(255,123,0,0.5)]">
              Soon
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
