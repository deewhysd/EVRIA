
import React from 'react';
import { AppView } from '../types';
import { Wallet, RefreshCw, List, Settings, ShieldCheck, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const isLanding = currentView === AppView.LANDING;

  return (
    <nav className={`fixed top-0 w-full z-50 border-b border-white/5 transition-all ${
      isLanding ? 'bg-[#0b0e14]/50 backdrop-blur-xl h-20' : 'bg-[#080a0f]/80 backdrop-blur-md h-16'
    }`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => onNavigate(AppView.LANDING)}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
            <ShieldCheck className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter">EVRIA</span>
        </div>
        
        {isLanding ? (
          <div className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
            <a href="#how" className="hover:text-white transition-colors">Infrastructure</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
            <a href="#payouts" className="hover:text-white transition-colors">Payout Rails</a>
            <button onClick={() => onNavigate(AppView.ABOUT)} className="hover:text-white transition-colors">Vision</button>
          </div>
        ) : (
          <div className="flex items-center gap-1 md:gap-4">
            <NavItem 
              active={currentView === AppView.DASHBOARD} 
              onClick={() => onNavigate(AppView.DASHBOARD)}
              icon={<Wallet size={18} />}
              label="Terminal"
            />
            <NavItem 
              active={currentView === AppView.REDEEM} 
              onClick={() => onNavigate(AppView.REDEEM)}
              icon={<RefreshCw size={18} />}
              label="Redeem"
            />
            <NavItem 
              active={currentView === AppView.ACTIVITY} 
              onClick={() => onNavigate(AppView.ACTIVITY)}
              icon={<List size={18} />}
              label="Activity"
            />
          </div>
        )}

        <div className="flex items-center gap-4">
          {!isLanding && (
            <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/5 px-3 py-1.5 rounded-2xl">
              <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center text-[10px] font-black text-blue-400">JD</div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-white leading-none">Institutional User</span>
                <span className="text-[8px] font-black text-[#10b981] uppercase tracking-tighter flex items-center gap-0.5"><UserCheck size={8}/> Verified</span>
              </div>
            </div>
          )}
          <button 
            onClick={() => onNavigate(AppView.DASHBOARD)}
            className={`font-black uppercase tracking-widest text-[10px] transition-all ${
              isLanding 
                ? 'px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-xl shadow-blue-600/20' 
                : 'p-2 text-slate-500 hover:text-white'
            }`}
          >
            {isLanding ? 'Launch Terminal' : <Settings size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
      active ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' : 'text-slate-500 hover:text-white hover:bg-white/5 border border-transparent'
    }`}
  >
    {icon}
    <span className="hidden lg:inline">{label}</span>
  </button>
);

export default Navbar;
