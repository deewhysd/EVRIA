
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <h2 className="text-5xl font-black mb-12 tracking-tighter">The EVRIA Vision</h2>
      <div className="space-y-12 text-slate-400 leading-relaxed text-lg">
        <section>
          <h3 className="text-white text-2xl font-bold mb-4">Unified Digital Liquidity</h3>
          <p>
            EVRIA was born from the need to bridge the gap between digital assets and traditional financial systems. 
            By leveraging advanced multi-signature security and real-time liquidity protocols, we enable instant, 
            compliant redemptions that respect the speed of the modern web.
          </p>
        </section>
        
        <section className="p-10 glass-card rounded-[2rem] border-white/5">
          <h3 className="text-white text-2xl font-bold mb-4">Institutional-Grade Security</h3>
          <p className="mb-6">
            Our platform utilizes MPC (Multi-Party Computation) and hardware isolation to ensure that user assets 
            remain secured at rest and in transit. Every redemption undergoes triple-layer verification:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-slate-200">
            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Real-time AML Screening</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> On-Chain Forensics</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Biometric Threshold Auth</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Instant Settlement Audit</li>
          </ul>
        </section>

        <section>
          <h3 className="text-white text-2xl font-bold mb-4">Compliance First</h3>
          <p>
            Operating at the intersection of crypto and fiat requires a rigorous approach to regulation. EVRIA maintains 
            partnerships with Tier-1 banking institutions to ensure every payout rail is fully compliant with 
            global financial standards.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
