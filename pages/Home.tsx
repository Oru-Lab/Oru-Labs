import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

const TechnicalBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <defs>
        <pattern id="dotPatternHome" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" fillOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotPatternHome)" />
      
      {/* Moving Technical Illustrators */}
      <g className="animate-float-technical" style={{ color: 'currentColor' }}>
        <path 
          d="M100,200 L150,250 L200,200" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.8" 
          strokeDasharray="5 5"
          className="animate-technical-pulse"
        />
        <circle cx="150" cy="250" r="3" fill="currentColor" className="animate-pulse" />
      </g>
      
      
      <g className="animate-float-technical" style={{ color: 'currentColor', animationDelay: '-12s' }}>
        <circle 
          cx="300" cy="800" r="50" 
          fill="none" 
          stroke="currentColor" 
          strokeDasharray="10 4" 
          strokeWidth="0.6" 
          className="animate-technical-pulse"
        />
        <path d="M250,800 L350,800" stroke="currentColor" strokeWidth="0.2" opacity="0.4" />
      </g>
      
      {/* Floating Nodes */}
      {[...Array(12)].map((_, i) => (
        <circle
          key={i}
          cx={150 + (i * 145) % 700}
          cy={100 + (i * 115) % 800}
          r="1.8"
          fill="currentColor"
          className="animate-float-technical"
          style={{ 
            opacity: 0.15,
            animationDuration: `${15 + i * 3}s`,
            animationDelay: `${i * -2.5}s`
          }}
        />
      ))}
    </svg>
  </div>
);

export const Home: React.FC = () => {
  const gearPath = "M88 44h-8.7c-.8-3.4-2.1-6.6-4.1-9.5l6.2-6.2-8.5-8.5-6.2 6.2c-2.9-2-6.1-3.3-9.5-4.1V12h-12v8.7c-3.4.8-6.6 2.1-9.5 4.1l-6.2-6.2-8.5 8.5 6.2 6.2c-2 2.9-3.3 6.1-4.1 9.5H12v12h8.7c.8 3.4 2.1 6.6 4.1 9.5l-6.2 6.2 8.5 8.5 6.2-6.2c2.9 2 6.1 3.3 9.5 4.1V88h12v-8.7c3.4-.8 6.6-2.1 9.5-4.1l6.2 6.2 8.5-8.5-6.2-6.2c2-2.9 3.3-6.1 4.1-9.5H88V44zM50 62c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z";

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden">
        <TechnicalBackground />
        
        <div className="container mx-auto relative z-10 mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-8 overflow-hidden group">
                <div className="h-[1px] w-6 bg-current/30 group-hover:w-12 transition-all duration-700"></div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] opacity-40 font-black whitespace-nowrap">
                  Engineering the Infrastructure of tomorrow
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.95] mb-10 uppercase italic selection:bg-current selection:text-white">
                BUILDING THE<br/>
                <span className="" style={{ WebkitTextStroke: '1.5px currentColor', opacity: 0.25 }}>BEDROCK</span><br/>
                FOR BUILDERS.
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl opacity-50 mb-12 max-w-lg font-light leading-relaxed border-l-2 border-current/10 pl-6">
                Oru Labs focuses exclusively on architecting high-quality, open-source utility tools for Blockchain, AI, and IoT ecosystems.
              </p>
              
              <div className="flex flex-wrap gap-5 mb-10">
                <Link 
                  to="/tools" 
                  className="group relative px-8 py-4 bg-black text-white dark:bg-white dark:text-black text-[10px] font-black uppercase tracking-[0.2em] overflow-hidden shadow-lg hover:translate-y-[-2px] transition-all"
                >
                  <span className="relative z-10">Access Library</span>
                  <div className="absolute inset-0 bg-white/10 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
                <Link to="/about" className="px-8 py-4 border border-current/20 text-[10px] font-black uppercase tracking-[0.2em] hover:border-current hover:bg-current/[0.03] transition-all">
                  The Charter
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block lg:col-span-4 relative">
              {/* Very Faint Moving Gear Illustration */}
              <div className="relative w-full aspect-square flex items-center justify-center opacity-[0.06] group transition-opacity duration-1000 group-hover:opacity-[0.08]">
                {/* Main large gear */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-current animate-gear absolute"
                >
                  <path fill="currentColor" d={gearPath} />
                </svg>
                
                {/* Secondary gear */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-1/3 h-1/3 text-current animate-gear-reverse absolute -top-4 -right-4"
                >
                  <path fill="currentColor" d={gearPath} />
                </svg>

                {/* Third gear */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-1/4 h-1/4 text-current animate-gear-reverse absolute -bottom-8 left-10"
                >
                  <path fill="currentColor" d={gearPath} />
                </svg>

                {/* HUD markings on top of the faint illustration */}
                <div className="absolute inset-0 border border-current/5 pointer-events-none">
                  <div className="absolute top-4 left-4 text-[7px] mono font-bold uppercase tracking-widest">SYSTEM_MODEL_X</div>
                  <div className="absolute bottom-4 right-4 text-[7px] mono font-bold uppercase rotate-90 origin-right tracking-[0.5em]">ALIGNED</div>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-current/20 to-transparent -translate-x-full animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Focus Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-current/5 border border-current/5">
            {[
              { domain: 'Blockchain', count: '12+', status: 'Active' },
              { domain: 'Artificial Intelligence', count: '08+', status: 'Research' },
              { domain: 'Internet of Things', count: '15+', status: 'Deployment' },
              { domain: 'Web Engineering', count: '24+', status: 'Bedrock' },
            ].map((item, i) => (
              <div key={i} className="bg-current/[0.01] p-10 hover:bg-current/[0.04] transition-all group min-h-[220px] flex flex-col justify-between">
                <div className="text-[9px] opacity-20 mb-6 mono uppercase tracking-[0.3em] font-black">{item.status}</div>
                <div>
                  <h3 className="text-lg font-black mb-1 group-hover:italic transition-all uppercase tracking-tight">{item.domain}</h3>
                  <div className="text-4xl font-black opacity-5 group-hover:opacity-20 transition-all italic mono">{item.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Split */}
      <section className="py-32 px-6 overflow-hidden relative">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-24 -left-12 text-[160px] font-black opacity-[0.01] select-none pointer-events-none italic">TOOLS</div>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none uppercase italic">
                 UTILITY-FIRST<br/><span className="opacity-20 not-italic">ENGINEERING.</span>
               </h2>
               <div className="space-y-10">
                 {[
                   { title: "Zero-Friction Integration", desc: "Our 'hero' tools enable seamless interaction between smart contracts and frontend layers with automated ABI mapping." },
                   { title: "Scale-Ready Infrastructure", desc: "Open-source core components designed to handle high-concurrency demands in IoT and AI environments." },
                   { title: "Deterministic Testing", desc: "Robust mocking and simulation frameworks for critical application paths and failover scenarios." }
                 ].map((feat, i) => (
                   <div key={i} className="flex gap-8 group">
                      <div className="flex-shrink-0 w-12 h-12 border border-current/10 flex items-center justify-center text-[10px] mono opacity-30 group-hover:border-current group-hover:opacity-100 transition-all font-black">0{i+1}</div>
                      <div>
                        <h4 className="text-base font-black mb-2 uppercase tracking-tight group-hover:italic transition-all">{feat.title}</h4>
                        <p className="opacity-40 text-xs leading-relaxed max-w-sm italic font-medium">{feat.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:w-1/2">
               <div className="relative aspect-video border border-current/5 bg-current/[0.01] overflow-hidden group shadow-xl p-1">
                  <img
                    src="/image.png"
                    alt="Industrial Architectural Foundation"
                    className="w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 group-hover:scale-105 transition-all duration-[5s] mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-current/10 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 p-4 bg-black/40 backdrop-blur-md border border-white/5">
                     <div className="text-[9px] uppercase tracking-[0.2em] font-black text-white/60 mb-1">Infrastructure Schema</div>
                     <div className="text-[8px] text-white/30 mono font-black">ORU_CORE_LOGS: 8829_X</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy / CTA */}
      <section className="py-48 bg-black dark:bg-white text-white dark:text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-20 rotate-12 scale-125 select-none pointer-events-none">
           <Logo isPreloader />
        </div>
        <div className="container mx-auto px-0 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-12 uppercase italic leading-[0.85] selection:bg-white selection:text-black dark:selection:bg-black dark:selection:text-white">
              TRANSFORMING RAW <br/> CODE INTO BEDROCK.
            </h2>
            <p className="text-lg md:text-2xl mb-16 font-light opacity-60 italic max-w-2xl mx-auto leading-relaxed">
              Oru Labs isn't just another dev shop. We are the architects of the tools you use every day. Join the foundation.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="px-12 py-5 bg-white dark:bg-black text-black dark:text-white text-[10px] font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl relative group overflow-hidden">
                <span className="relative z-10">Initiate Contact</span>
                <div className="absolute inset-0 bg-black/10 dark:bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visual Separation */}
      <div className="py-16 flex justify-center items-center gap-8 opacity-5 font-black text-[8px] uppercase tracking-[1em]">
         <div className="h-px w-16 bg-current"></div>
         Oru Labs — Portal Protocol — 2025
         <div className="h-px w-16 bg-current"></div>
      </div>
    </div>
  );
};