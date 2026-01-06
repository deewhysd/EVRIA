
import React from 'react';
import { AppView } from '../types';
import { Lock, Zap, ShieldCheck, AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActivationPageProps {
  onNavigate: (view: AppView) => void;
}

const ActivationPage: React.FC<ActivationPageProps> = ({ onNavigate }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-[#0b0e14]/95 backdrop-blur-xl">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <div className="glass-card rounded-[3rem] overflow-hidden border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.1)] relative">
          <div className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>
          
          <div className="p-10 md:p-14 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600/10 rounded-full mb-4 border border-blue-500/20">
                <Lock className="text-blue-400" size={48} />
              </div>
              <h2 className="text-4xl font-black tracking-tighter text-white">Payout Activation Required</h2>
              <p className="text-slate-400 font-medium">
                To complete crypto-to-fiat settlement, a <span className="text-white">one-time activation fee</span> must be processed.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-blue-600/10 rounded-[2.5rem] border border-blue-500/30 text-center relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Verification Settlement Cost</p>
                  <div className="flex items-center justify-center gap-4">
                    <h3 className="text-6xl font-black text-white">$49.99</h3>
                    <div className="text-left border-l border-blue-500/30 pl-4">
                      <p className="text-blue-400 text-sm font-black tracking-widest">USD</p>
                      <p className="text-slate-400 text-[10px] font-bold">≈ 0.00052 BTC</p>
                    </div>
                  </div>
                </div>
                <Zap className="absolute -bottom-8 -right-8 text-blue-500/10 group-hover:scale-110 transition-transform duration-1000" size={160} />
              </div>

              <div className="space-y-4">
                <div className="flex gap-5 p-6 bg-white/5 rounded-3xl border border-white/5">
                  <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
                  <div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-1">One-time Settlement Activation</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      One-time recipient activation fee required for settlement. This fee is paid by the recipient and applies only on the first redemption to a new recipient.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 bg-white/5 rounded-3xl border border-white/5">
                  <AlertCircle className="text-yellow-500 shrink-0" size={24} />
                  <div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-1">Compliance Policy</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Funds are released immediately upon activation verification. Unactivated transactions are returned after 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <button 
                disabled
                className="w-full py-6 bg-slate-800 text-slate-500 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 cursor-not-allowed border border-white/5"
              >
                <RefreshCw className="animate-spin" size={20} />
                Waiting for Recipient...
              </button>

              <button 
                onClick={() => onNavigate(AppView.REDEEM)}
                className="w-full text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-all"
              >
                <ArrowLeft size={14} />
                Cancel & Return
              </button>
            </div>

            <p className="text-center text-[8px] text-slate-700 uppercase tracking-[0.6em] font-black">
              EVRIA BRIDGE PROTOCOL v2.4 SECURED
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ActivationPage;
