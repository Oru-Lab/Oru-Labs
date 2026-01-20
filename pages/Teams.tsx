import React from 'react';
import { Link } from 'react-router-dom';

export const Teams: React.FC = () => {
  return (
    <div className="flex-grow py-32">
      <div className="max-w-6xl mx-auto mt-20">
        <div className="mb-32">
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter uppercase italic mb-12">Builders.</h1>
          <p className="text-xl md:text-3xl font-light opacity-60 max-w-3xl leading-relaxed">
            Oru Labs acts as a specialized, high-output unit within the Borderless Dev community.
            We channel our collective talent into high-impact assets that raise the profile of Nigerian engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="group">
            <div className="aspect-[4/5] border border-current/10 bg-current/[0.02] mb-12 overflow-hidden relative">
              <img src="/Saggio.jpeg" className="w-full h-full object-cover opacity-90 group-hover:opacity-60 transition-opacity grayscale" alt="Founder" />
              <div className="absolute top-10 left-10">
                <span className="px-5 py-2  dark:border-current/50 text-[10px] font-black uppercase tracking-[0.6em] bg-white/90 dark:bg-black/80 backdrop-blur-md text-black dark:text-white">
                  Core Architect
                </span>
              </div>
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tight mb-4 group-hover:italic transition-all">Nworah C. Gabriel</h3>
            <p className="text-[11px] uppercase tracking-[0.6em] opacity-40 font-black mb-8 italic">Visionary & Engineering Lead</p>
            <p className="text-base opacity-50 leading-relaxed font-medium">Personally recruiting a seasoned team of developers who agree to a clear charter of quality and commitment.</p>
          </div>

          <div className="border border-current/10 p-20 flex flex-col justify-center items-center text-center group bg-current/[0.01] hover:bg-current/[0.04] transition-all relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="w-28 h-28 border-2 border-dashed border-current/20 flex items-center justify-center mb-12 group-hover:border-current/50 transition-all relative z-10">
              <svg className="w-10 h-10 opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
            </div>
            <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter italic relative z-10">Recruiting Core Engineers</h3>
            <p className="text-base opacity-40 max-w-xs mb-14 font-medium relative z-10">We are seeking senior engineers in Blockchain, AI, and IoT to build the next layer of utility tools.</p>
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-current text-white dark:bg-white dark:text-black text-[10px] font-black uppercase tracking-[0.2em] overflow-hidden shadow-lg hover:translate-y-[-2px] transition-all"
            >
              <span className="relative z-10">Join Us</span>
              <div className="absolute inset-0 bg-white/10 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>

        <div className="mt-48 pt-24 border-t border-current/10">
          <h2 className="text-[12px] font-black uppercase tracking-[0.6em] opacity-30 mb-10">Community Core</h2>
          <p className="text-3xl md:text-5xl font-light opacity-50 max-w-5xl italic leading-tight">
            "Oru Labs is more than a team; it's a movement to build our own foundation instead of always building on someone else's."
          </p>
        </div>
      </div>
    </div>
  );
};