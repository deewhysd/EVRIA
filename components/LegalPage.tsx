
import React from 'react';

const LegalPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <h2 className="text-4xl font-black mb-8">Legal & Compliance</h2>
      
      <div className="p-8 bg-yellow-400/10 border border-yellow-500/30 rounded-2xl mb-12">
        <h3 className="text-yellow-500 font-black uppercase text-sm mb-2 tracking-widest">Crucial Notice</h3>
        <p className="text-slate-200 font-bold leading-relaxed">
          THIS IS A SIMULATION. EVRIA is a conceptual design prototype. No real currency (fiat or digital) 
          is ever transmitted, held, or redeemed by this application. All figures, names, and transaction 
          logs are purely for demonstration and UX/UI evaluation.
        </p>
      </div>

      <div className="space-y-10 text-slate-500 text-sm">
        <section>
          <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Terms of Conceptual Use</h4>
          <p className="leading-relaxed">
            By interacting with this interface, you acknowledge that you are using a non-functional design prototype. 
            Any "fees" displayed (e.g., recipient activation fees) are conceptual placeholders used to demonstrate 
            product flow and are not collectible.
          </p>
        </section>

        <section>
          <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Data Privacy (Simulated)</h4>
          <p className="leading-relaxed">
            This prototype does not store personal financial data on persistent servers. Any information entered 
            during a session is temporary and intended only to demonstrate the "Autocomplete" and "Confirmation" 
            features of the redemption engine.
          </p>
        </section>

        <section>
          <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Compliance Verification</h4>
          <p className="leading-relaxed">
            In a production environment, EVRIA would be subject to KYC (Know Your Customer) and KYB (Know Your Business) 
            requirements under the jurisdictions of its operational licenses. This includes reporting obligations 
            under the Bank Secrecy Act and similar global frameworks.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalPage;
