
import React from 'react';
import { AppView } from '../types';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  CreditCard, 
  ShieldCheck, 
  UserCheck, 
  Activity, 
  Zap, 
  PieChart, 
  Globe, 
  Wallet,
  ArrowRight
} from 'lucide-react';
import { MOCK_TRANSACTIONS } from '../constants';

interface DashboardProps {
  onNavigate: (view: AppView) => void;
}

const PortfolioChart = () => (
  <svg viewBox="0 0 800 200" className="w-full h-full chart-glow">
    <defs>
      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M0 160 Q 100 140, 200 150 T 400 100 T 600 120 T 800 40"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M0 160 Q 100 140, 200 150 T 400 100 T 600 120 T 800 40 L 800 200 L 0 200 Z"
      fill="url(#chartGradient)"
    />
    <line x1="0" y1="180" x2="800" y2="180" stroke="white" strokeOpacity="0.03" />
    <line x1="0" y1="130" x2="800" y2="130" stroke="white" strokeOpacity="0.03" />
    <line x1="0" y1="80" x2="800" y2="80" stroke="white" strokeOpacity="0.03" />
  </svg>
);

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-6 py-8 max-w-[1600px]">
      <div className="flex flex-col xl:flex-row gap-6 h-full">
        
        {/* Column 1: Navigation & Market Context (Sidebar feel) */}
        <aside className="w-full xl:w-72 space-y-6 shrink-0">
          <div className="glass-card p-6 rounded-3xl border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-black text-xs text-blue-400">JD</div>
              <div>
                <p className="text-xs font-black text-white leading-none">John Doe</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-1">ID: #8841-B</p>
              </div>
            </div>
            <nav className="space-y-1">
              <SidebarItem icon={<Globe size={16} />} label="Overview" active />
              <SidebarItem icon={<PieChart size={16} />} label="Assets" />
              <SidebarItem icon={<Activity size={16} />} label="Security" />
              <SidebarItem icon={<Zap size={16} />} label="Settings" />
            </nav>
          </div>

          <div className="glass-card p-6 rounded-3xl border-white/5 bg-blue-600/5 border-blue-500/10">
            <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4">Market Index</h4>
            <div className="space-y-4">
              <MarketItem symbol="BTC" price="$96,480.22" change="+1.2%" up />
              <MarketItem symbol="ETH" price="$2,642.10" change="+0.4%" up />
              <MarketItem symbol="SOL" price="$145.20" change="-0.2%" />
            </div>
          </div>
        </aside>

        {/* Column 2: Main Portfolio Terminal */}
        <main className="flex-grow space-y-6">
          <section className="glass-card p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden h-full min-h-[400px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-3">Consolidated Portfolio Balance</p>
                <div className="flex items-end gap-3">
                  <h2 className="text-6xl font-black tracking-tighter text-white">$716,378.00</h2>
                  <span className="text-sm font-black text-slate-500 pb-2">USD</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-2xl border border-emerald-500/20">
                <TrendingUp size={16} />
                <span className="text-xs font-black uppercase tracking-widest">+12.5%</span>
              </div>
            </div>
            
            <div className="h-64 relative">
              <PortfolioChart />
              <div className="absolute inset-x-0 bottom-0 flex justify-between text-[10px] font-black text-slate-600 uppercase tracking-widest px-2">
                <span>MAR 01</span>
                <span>MAR 08</span>
                <span>MAR 15</span>
                <span>MAR 22</span>
                <span>MAR 29</span>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AssetCard symbol="BTC" amount="8.42" value="$298,420" color="#f59e0b" />
            <AssetCard symbol="ETH" amount="142.50" value="$312,150" color="#6366f1" />
            <AssetCard symbol="USDT" amount="105,808" value="$105,808" color="#10b981" />
          </div>
        </main>

        {/* Column 3: Quick Swap & Activity Summary */}
        <aside className="w-full xl:w-96 space-y-6 shrink-0">
          <div className="glass-card p-8 rounded-[2.5rem] border-white/5">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Zap className="text-blue-500" size={18} />
              Quick Redemption
            </h3>
            <div className="space-y-4">
              <div className="bg-[#080a0f] border border-white/5 p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Redeem From</p>
                  <p className="font-bold text-white">BTC Wallet</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-bold">Balance: 8.42</p>
                </div>
              </div>
              <div className="bg-[#080a0f] border border-white/5 p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Amount USD</p>
                  <p className="font-bold text-white">$12,500.00</p>
                </div>
                <ArrowRight size={16} className="text-slate-700" />
              </div>
              <button 
                onClick={() => onNavigate(AppView.REDEEM)}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-blue-600/20"
              >
                Start Redemption
              </button>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2.5rem] border-white/5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Activity className="text-slate-500" size={18} />
                Recent History
              </h3>
              <button onClick={() => onNavigate(AppView.ACTIVITY)} className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Full Log</button>
            </div>
            <div className="space-y-6">
              {MOCK_TRANSACTIONS.slice(0, 3).map(tx => (
                <div key={tx.id} className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl ${tx.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                    {tx.amount > 0 ? <ArrowDownRight size={18} /> : <ArrowUpRight size={18} />}
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-xs font-bold truncate text-slate-200">{tx.type}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-0.5">{tx.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black text-white">${tx.amount.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active = false }: any) => (
  <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
    active ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-500 hover:text-white hover:bg-white/5'
  }`}>
    {icon}
    {label}
  </button>
);

const MarketItem = ({ symbol, price, change, up = false }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-[8px] font-black text-white">{symbol}</div>
      <span className="text-[10px] font-bold text-slate-400">{symbol}</span>
    </div>
    <div className="text-right">
      <p className="text-[10px] font-black text-white">{price}</p>
      <p className={`text-[8px] font-black ${up ? 'text-emerald-500' : 'text-red-500'}`}>{change}</p>
    </div>
  </div>
);

const AssetCard = ({ symbol, amount, value, color }: any) => (
  <div className="glass-card p-8 rounded-[2rem] border-white/5 group hover:border-blue-500/30 transition-all cursor-pointer">
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white shadow-lg" style={{ backgroundColor: color }}>
        {symbol[0]}
      </div>
      <ArrowUpRight className="text-slate-700 group-hover:text-white transition-colors" size={20} />
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{symbol} Holdings</p>
      <p className="text-2xl font-black text-white">{amount}</p>
      <p className="text-xs text-slate-400 font-bold mt-1">{value} USD</p>
    </div>
  </div>
);

export default Dashboard;
