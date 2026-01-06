
import React from 'react';

const DisclaimerBanner: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-yellow-400 text-black py-2.5 px-4 text-center font-bold text-xs md:text-sm tracking-tight shadow-2xl border-t border-yellow-500">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <span className="bg-black text-yellow-400 px-2 py-0.5 rounded text-[10px] uppercase">Official Disclaimer</span>
        <p>EVRIA is a conceptual design for demonstration purposes only. No real transactions are processed. All data is simulated.</p>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
