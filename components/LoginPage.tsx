
import React, { useState } from 'react';
import { ShieldCheck, Lock, Shield, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-[#0b0e14]">
      {/* Left Side: Brand & Visuals */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-[#080a0f] border-r border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
          <div className="grid grid-cols-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/5 h-20 w-full"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 p-20 flex flex-col justify-between w-full h-full">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-600/40">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <span className="text-3xl font-black tracking-tighter text-white">EVRIA</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl font-black tracking-tighter text-white leading-tight">
              Bridging Digital <br /> Assets to Reality.
            </h1>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              Experience the next generation of institutional-grade crypto settlement. Secure, fast, and compliant.
            </p>
          </div>

          <div className="flex gap-10">
            <div className="flex items-center gap-2 opacity-50">
              <Shield size={16} className="text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">SOC2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 opacity-50">
              <Lock size={16} className="text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">256-Bit Encrypted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-10"
        >
          <div className="lg:hidden text-center">
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">EVRIA</span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Access Terminal</h2>
            <p className="text-slate-500 text-sm">Sign in to your institutional account to manage settlements.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@institution.com"
                className="w-full bg-[#080a0f] border border-white/5 rounded-2xl p-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-800"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Password</label>
                <button type="button" className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-400">Forgot?</button>
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#080a0f] border border-white/5 rounded-2xl p-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-800"
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/20 transition-all active:scale-[0.98]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Authenticating...
                </>
              ) : (
                <>
                  Secure Login
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            Institutional Account Holders Only • EVRIA Security Protocol v2.4
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
