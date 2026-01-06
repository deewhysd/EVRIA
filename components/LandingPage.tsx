
import React from 'react';
import { AppView } from '../types';
import { ArrowRight, ChevronRight, Zap, Shield, Globe } from 'lucide-react';
import { SUPPORTED_METHODS } from '../constants';
import { motion } from 'framer-motion';

interface LandingPageProps {
  onNavigate: (view: AppView) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-40 md:pb-52">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10 opacity-30"></div>
        
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 inline-block border border-blue-600/20">
              New: Direct Payouts via Cash App
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Redeem Crypto Into <br />
              <span className="gradient-text">Real-World Cash</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              EVRIA enables seamless conversion of digital assets into fiat payouts across 
              multiple payment rails with military-grade security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => onNavigate(AppView.DASHBOARD)}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-600/20"
              >
                View Wallet <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate(AppView.REDEEM)}
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 border border-slate-700"
              >
                Redeem Assets
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payout Channels */}
      <section id="payouts" className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 font-medium mb-10 uppercase tracking-[0.2em] text-sm">Unified Redemption Interface Supported By</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {SUPPORTED_METHODS.map((method) => (
               <div key={method.id} className="flex items-center gap-3">
                 <span className="text-4xl">{method.icon}</span>
                 <span className="font-bold text-xl">{method.name}</span>
               </div>
             ))}
          </div>
          <p className="mt-12 text-slate-400 max-w-xl mx-auto">
            Multiple payout channels supported through a unified, compliant redemption interface designed for global liquidity.
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Redeem in 3 Simple Steps</h2>
            <p className="text-slate-400">Our automated settlement engine handles the complexity.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
              index={1}
              icon={<Shield className="text-blue-500" />}
              title="Select Crypto Asset"
              description="Connect your digital wallet and select the BTC, ETH, or USDT assets you wish to convert."
            />
            <StepCard 
              index={2}
              icon={<Zap className="text-blue-500" />}
              title="Redeem into Fiat"
              description="Enter your target amount and select your preferred payout rail from our supported partners."
            />
            <StepCard 
              index={3}
              icon={<Globe className="text-blue-500" />}
              title="Activate & Receive"
              description="Recipient completes a one-time activation and funds are instantly released to the selected account."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const StepCard: React.FC<{ index: number; icon: React.ReactNode; title: string; description: string }> = ({ index, icon, title, description }) => (
  <div className="p-8 glass-card rounded-3xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
    <div className="absolute -top-4 -right-4 text-9xl font-black text-white/5 group-hover:text-blue-600/10 transition-colors">{index}</div>
    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 relative z-10">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 relative z-10">{title}</h3>
    <p className="text-slate-400 leading-relaxed relative z-10">{description}</p>
  </div>
);

export default LandingPage;
