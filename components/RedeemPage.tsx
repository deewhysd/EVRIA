
import React, { useState } from 'react';
import { AppView, Recipient } from '../types';
import { ASSETS, ASSET_RATES, SUPPORTED_METHODS } from '../constants';
import { Search, ChevronRight, ShieldAlert, ArrowRight, User, CheckCircle, Wallet, CreditCard, Loader2, Mail } from 'lucide-react';

interface RedeemPageProps {
  onNavigate: (view: AppView) => void;
}

const RedeemPage: React.FC<RedeemPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');
  const [asset, setAsset] = useState('BTC');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [payoutUsername, setPayoutUsername] = useState('');
  const [targetRecipient, setTargetRecipient] = useState<Recipient | null>(null);
  const [method, setMethod] = useState(SUPPORTED_METHODS[0].id);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isRecipientSelected, setIsRecipientSelected] = useState(false);

  // Conversion logic
  const cryptoRate = ASSET_RATES[asset as keyof typeof ASSET_RATES] || 1;
  const cryptoAmount = amount ? (parseFloat(amount) / cryptoRate).toFixed(6) : '0.000000';

  const handleUsernameInput = (val: string) => {
    setPayoutUsername(val);
    setIsRecipientSelected(false);
    if (val.trim().length >= 2) {
      // Dynamically generate a verified profile based on the input
      setTargetRecipient({
        id: 'dynamic-' + Date.now(),
        name: val,
        tag: val.startsWith('$') || val.startsWith('@') ? val : '@' + val.toLowerCase().replace(/\s/g, ''),
        email: recipientEmail,
        platform: SUPPORTED_METHODS.find(m => m.id === method)?.name || 'Platform',
        avatar: val.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
      });
    } else {
      setTargetRecipient(null);
    }
  };

  const handleInitiate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      onNavigate(AppView.ACTIVATION);
    }, 1200);
  };

  const currentMethodName = SUPPORTED_METHODS.find(m => m.id === method)?.name || 'Platform';

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Form Controls */}
        <div className="w-full lg:w-[600px] space-y-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tighter text-white">Bridge Settlement</h2>
            <p className="text-slate-400 text-sm">Initiate a secure redemption from your digital portfolio to fiat payout rails.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <StepIndicator num={1} title="Liquidity" active={step >= 1} />
            <StepIndicator num={2} title="Rail" active={step >= 2} />
            <StepIndicator num={3} title="Contact" active={step >= 3} />
            <StepIndicator num={4} title="Identity" active={step >= 4} />
          </div>

          <div className="space-y-6">
            {/* Step 1: Asset & Amount */}
            <div className={`p-8 rounded-[2rem] border transition-all ${step === 1 ? 'bg-blue-600/5 border-blue-500/20' : 'bg-slate-900/30 border-white/5 grayscale'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-xs">01</div>
                <h3 className="font-bold text-white uppercase tracking-widest text-[10px]">Asset & Liquidity</h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block ml-1">Asset</label>
                    <div className="relative">
                      <select 
                        value={asset}
                        onChange={(e) => setAsset(e.target.value)}
                        className="w-full bg-[#080a0f] border border-white/5 rounded-2xl py-4 pl-4 pr-10 text-white font-bold outline-none appearance-none cursor-pointer focus:border-blue-500 transition-all"
                      >
                        {ASSETS.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 rotate-90" size={16} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block ml-1">Amount (USD)</label>
                    <input 
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-[#080a0f] border border-white/5 rounded-2xl py-4 px-4 text-white font-bold outline-none focus:border-blue-500 transition-all placeholder:text-slate-800"
                    />
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl flex justify-between items-center">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Rate Settlement</span>
                  <span className="text-xs font-bold text-white">Selling ≈ {cryptoAmount} {asset}</span>
                </div>
                {step === 1 && (
                  <button 
                    onClick={() => setStep(2)}
                    disabled={!amount || parseFloat(amount) <= 0}
                    className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-50 transition-all disabled:opacity-20"
                  >
                    Confirm Selection
                  </button>
                )}
              </div>
            </div>

            {/* Step 2: Payout Rail */}
            <div className={`p-8 rounded-[2rem] border transition-all ${step === 2 ? 'bg-blue-600/5 border-blue-500/20' : step > 2 ? 'bg-slate-900/30 border-white/5' : 'bg-slate-900/30 border-white/5 grayscale pointer-events-none opacity-50'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-xs">02</div>
                <h3 className="font-bold text-white uppercase tracking-widest text-[10px]">Payout Rail</h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {SUPPORTED_METHODS.map(m => (
                  <button
                    key={m.id}
                    onClick={() => { setMethod(m.id); if(step === 2) setStep(3); }}
                    className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                      method === m.id ? 'border-blue-600 bg-blue-600/10 text-blue-400' : 'border-slate-800 bg-[#080a0f] text-slate-500'
                    }`}
                  >
                    <span className="text-xl">{m.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-tighter truncate w-full text-center">{m.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Recipient Email */}
            <div className={`p-8 rounded-[2rem] border transition-all ${step === 3 ? 'bg-blue-600/5 border-blue-500/20' : step > 3 ? 'bg-slate-900/30 border-white/5' : 'bg-slate-900/30 border-white/5 grayscale pointer-events-none opacity-50'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-xs">03</div>
                <h3 className="font-bold text-white uppercase tracking-widest text-[10px]">Recipient Contact</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block ml-1">Recipient Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input 
                      type="email"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      placeholder="recipient@example.com"
                      required
                      className="w-full bg-[#080a0f] border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white font-bold outline-none focus:border-blue-500 transition-all placeholder:text-slate-800"
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium px-1">
                    This email will be used to notify the recipient of an incoming payment request.
                  </p>
                </div>
                {step === 3 && (
                  <button 
                    onClick={() => setStep(4)}
                    disabled={!recipientEmail.includes('@')}
                    className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-50 transition-all disabled:opacity-20"
                  >
                    Continue to Payout ID
                  </button>
                )}
              </div>
            </div>

            {/* Step 4: Payout Username */}
            <div className={`p-8 rounded-[2rem] border transition-all ${step === 4 ? 'bg-blue-600/5 border-blue-500/20' : 'bg-slate-900/30 border-white/5 grayscale pointer-events-none opacity-50'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-xs">04</div>
                <h3 className="font-bold text-white uppercase tracking-widest text-[10px]">Payout Identity</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block ml-1">{currentMethodName} Username or Cashtag</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input 
                      type="text"
                      value={payoutUsername}
                      onChange={(e) => handleUsernameInput(e.target.value)}
                      placeholder={`Enter ${currentMethodName} ID`}
                      className="w-full bg-[#080a0f] border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white font-bold outline-none focus:border-blue-500 transition-all placeholder:text-slate-800"
                    />
                  </div>
                </div>

                {targetRecipient && (
                  <button
                    type="button"
                    onClick={() => setIsRecipientSelected(!isRecipientSelected)}
                    className={`w-full p-6 rounded-2xl border transition-all flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300 text-left ${
                      isRecipientSelected ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-white/5 border-white/10 hover:border-emerald-500/30'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm shadow-xl transition-all ${
                      isRecipientSelected ? 'bg-emerald-600 shadow-emerald-600/20' : 'bg-slate-700 shadow-black'
                    }`}>
                      {targetRecipient.avatar}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <p className="font-black text-white">{targetRecipient.name}</p>
                        <div className="bg-emerald-500/20 text-[#10b981] px-2 py-0.5 rounded text-[8px] font-black uppercase flex items-center gap-1">
                          <CheckCircle size={10} /> Verified Recipient
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">
                        Rail: {targetRecipient.platform}
                      </p>
                    </div>
                    {isRecipientSelected && <CheckCircle size={20} className="text-emerald-500" />}
                  </button>
                )}

                <button 
                  onClick={handleInitiate}
                  disabled={!isRecipientSelected || isProcessing}
                  className="w-full py-5 bg-[#10b981] hover:bg-[#059669] disabled:opacity-20 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 shadow-2xl shadow-emerald-600/20"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Processing Bridge...
                    </>
                  ) : (
                    <>
                      Execute Redemption
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Data Visualization & Recap */}
        <div className="flex-grow space-y-8">
          <div className="glass-card p-10 rounded-[3rem] border-white/5 space-y-10 sticky top-24">
            <h3 className="text-xl font-bold border-b border-white/5 pb-6">Settlement Summary</h3>
            
            <div className="space-y-8">
              <SummaryRow icon={<Wallet className="text-blue-500" size={18} />} label="Funding Asset" value={asset + " Wallet"} />
              <SummaryRow icon={<CreditCard className="text-slate-500" size={18} />} label="Payout Rail" value={currentMethodName} />
              <SummaryRow icon={<Mail className="text-slate-500" size={18} />} label="Notify Contact" value={recipientEmail || 'Awaiting Email'} />
              <SummaryRow icon={<User className="text-slate-500" size={18} />} label="Recipient ID" value={payoutUsername || 'Awaiting ID'} />
              
              <div className="pt-8 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Expected Settlement</p>
                  <p className="text-3xl font-black text-white">${amount || '0.00'}</p>
                </div>
                <p className="text-[10px] text-slate-600 font-bold text-right italic">
                  *Settlement reflects current real-time {asset}/USD liquidity rates.
                </p>
              </div>
            </div>

            <div className="p-6 bg-yellow-400/5 rounded-3xl border border-yellow-500/20 flex gap-4">
              <ShieldAlert className="text-yellow-500 shrink-0" size={24} />
              <p className="text-[10px] text-slate-400 font-bold leading-relaxed uppercase tracking-widest">
                Verification Required: Recipient details are shown for confirmation before initiating redemption. 
                Compliance gate active for all settlements above $1.0k.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryRow = ({ icon, label, value }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-left truncate max-w-[120px]">{label}</span>
    </div>
    <span className="text-sm font-black text-white truncate max-w-[150px]">{value}</span>
  </div>
);

const StepIndicator = ({ num, title, active }: any) => (
  <div className="flex flex-col items-center gap-2">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-[10px] transition-all ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-800 text-slate-500'}`}>
      {num}
    </div>
    <span className={`text-[8px] font-black uppercase tracking-[0.1em] text-center ${active ? 'text-white' : 'text-slate-600'}`}>{title}</span>
  </div>
);

export default RedeemPage;
