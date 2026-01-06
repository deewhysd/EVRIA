
import React, { useState, useEffect } from 'react';
import { AppView } from './types';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import RedeemPage from './components/RedeemPage';
import ActivationPage from './components/ActivationPage';
import ActivityPage from './components/ActivityPage';
import AboutPage from './components/AboutPage';
import LegalPage from './components/LegalPage';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import DisclaimerBanner from './components/DisclaimerBanner';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as AppView;
      if (Object.values(AppView).includes(hash)) {
        setCurrentView(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: AppView) => {
    window.location.hash = view;
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigateTo(AppView.DASHBOARD);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderView = () => {
    switch (currentView) {
      case AppView.LANDING: return <LandingPage onNavigate={navigateTo} />;
      case AppView.DASHBOARD: return <Dashboard onNavigate={navigateTo} />;
      case AppView.REDEEM: return <RedeemPage onNavigate={navigateTo} />;
      case AppView.ACTIVATION: return <ActivationPage onNavigate={navigateTo} />;
      case AppView.ACTIVITY: return <ActivityPage onNavigate={navigateTo} />;
      case AppView.ABOUT: return <AboutPage />;
      case AppView.LEGAL: return <LegalPage />;
      default: return <Dashboard onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-20 bg-[#0b0e14]">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <footer className="py-8 bg-[#080a0f] border-t border-white/5 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-black text-slate-400">EVRIA</span>
            <span>&copy; 2024 Institutional Digital Asset Bridge. All Rights Reserved.</span>
          </div>
          <div className="flex gap-8">
            <button onClick={() => navigateTo(AppView.ABOUT)} className="hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => navigateTo(AppView.LEGAL)} className="hover:text-blue-400 transition-colors">Compliance</button>
            <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>
      
      <DisclaimerBanner />
    </div>
  );
};

export default App;
