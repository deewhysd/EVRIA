
import React from 'react';
import { AppView, TransactionStatus } from '../types';
import { MOCK_TRANSACTIONS } from '../constants';
import { Search, Filter, ArrowUpRight, ArrowDownRight, MoreVertical, ShieldCheck } from 'lucide-react';

interface ActivityPageProps {
  onNavigate: (view: AppView) => void;
}

const ActivityPage: React.FC<ActivityPageProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-3">Settlement History</h2>
          <p className="text-slate-500 font-medium">Verified logs for your digital asset redemptions.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
            <input 
              type="text" 
              placeholder="Search by Transaction ID..."
              className="bg-[#080a0f] border border-slate-800 rounded-2xl pl-12 pr-6 py-3 text-sm focus:border-blue-500 outline-none transition-all w-full md:w-80"
            />
          </div>
          <button className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-white transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="glass-card rounded-[2.5rem] border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-8 py-6 text-xs font-black text-slate-600 uppercase tracking-[0.2em]">Transaction Detail</th>
                <th className="px-8 py-6 text-xs font-black text-slate-600 uppercase tracking-[0.2em]">Asset Rail</th>
                <th className="px-8 py-6 text-xs font-black text-slate-600 uppercase tracking-[0.2em]">Amount</th>
                <th className="px-8 py-6 text-xs font-black text-slate-600 uppercase tracking-[0.2em]">Status</th>
                <th className="px-8 py-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_TRANSACTIONS.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/[0.01] transition-colors group cursor-pointer">
                  <td className="px-8 py-8">
                    <div className="flex items-center gap-5">
                      <div className={`p-3 rounded-2xl bg-slate-800 text-slate-500 group-hover:text-blue-400 transition-colors`}>
                        {tx.amount < 0 ? <ArrowUpRight size={22} /> : <ArrowDownRight size={22} />}
                      </div>
                      <div>
                        <p className="font-bold text-slate-200 text-lg">{tx.type}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <p className="text-[10px] text-slate-600 font-black tracking-widest">{tx.id}</p>
                          <span className="text-[10px] text-slate-600">•</span>
                          <p className="text-[10px] text-slate-600 font-bold uppercase">{tx.date}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-8">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-[10px] font-black">{tx.asset}</span>
                      <span className="text-xs font-bold text-slate-400">{tx.method}</span>
                    </div>
                  </td>
                  <td className="px-8 py-8">
                    <p className={`text-xl font-black ${tx.amount < 0 ? 'text-slate-400' : 'text-white'}`}>
                      {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </p>
                  </td>
                  <td className="px-8 py-8">
                    <StatusBadge status={tx.status} onNavigate={onNavigate} />
                  </td>
                  <td className="px-8 py-8 text-right">
                    <button className="p-3 text-slate-700 hover:text-white transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-12 flex flex-col items-center gap-4">
        <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.5em]">End of Log</p>
        <div className="flex items-center gap-2 text-slate-600">
          <ShieldCheck size={14} />
          <span className="text-xs font-bold">Immutable Ledger Signature: e4d9...2f1a</span>
        </div>
      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: TransactionStatus; onNavigate: (v: AppView) => void }> = ({ status, onNavigate }) => {
  const isActionRequired = status === 'Activation Required';
  
  const styles = {
    'Completed': 'bg-emerald-500/10 text-[#10b981] border-[#10b981]/20',
    'Processing': 'bg-blue-500/10 text-[#3b82f6] border-[#3b82f6]/20',
    'Activation Required': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20',
    'Pending': 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };

  const Component = isActionRequired ? 'button' : 'span';
  const props = isActionRequired ? { onClick: (e: any) => { e.stopPropagation(); onNavigate(AppView.ACTIVATION); } } : {};

  return (
    <Component 
      {...props}
      className={`inline-flex items-center px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all ${styles[status as keyof typeof styles] || styles.Pending}`}
    >
      {status}
    </Component>
  );
};

export default ActivityPage;
