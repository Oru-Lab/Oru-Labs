import React from 'react';
// Import Link component
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="flex-grow py-40">
      <div className="max-w-7xl mx-auto">
        <header className="mb-40">
          <div className="inline-block px-6 py-2.5 border-2 border-current/10 text-[11px] uppercase tracking-[0.6em] mb-16 opacity-50 font-black">System Manifesto</div>
          <h1 className="text-4xl md:text-[160px] font-black tracking-tighter leading-[0.75] uppercase italic mb-20" style={{ lineHeight: '1' }}>
            BEDROCK <br/>  <span className="" style={{ WebkitTextStroke: '2px currentColor' }}>STRATEGY.</span>
          </h1>
          <p className="text-xl md:text-4xl font-light leading-[1.15] opacity-60 max-w-5xl italic border-l-4 border-current/10 pl-16">
            "We are tired of building on broken parts. Oru Labs is about taking control of the stack by building the foundation instead of just the floor."
          </p>
        </header>

        {/* Philosophy Matrix */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-32 mb-64 border-t border-current/10 pt-32">
          <div className="lg:col-span-4">
            <h2 className="text-[14px] font-black uppercase tracking-[0.8em] opacity-30 mb-12">The Narrative</h2>
          </div>
          <div className="lg:col-span-6 space-y-16 text-2xl md:text-3xl opacity-80 leading-relaxed font-light">
            <p>
              Nigerian developers and indeed developers everywhere are constantly building final products, but we aren't building the essential, high-quality tools that enable us to build better and faster.
            </p>
            <p className="italic">
              We rely on tools from abroad, many of which are half-baked, poorly documented, or not open source, which forces us to work with broken parts. <strong>Oru Labs will change this.</strong>
            </p>
            <p>
              We focus exclusively on creating the open-source tools currently missing from the global developer ecosystem—tools for development, testing, and integration that act as the bedrock for building complex applications in <strong>Blockchain, AI, Web, and IoT.</strong>
            </p>
          </div>
        </section>

        {/* Operational Values Matrix */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-current/10 border border-current/10 mb-32 md:mb-64 shadow-2xl overflow-hidden rounded-sm">
          {[
            { 
              title: "Utility-First", 
              desc: "Every tool will solve a specific, painful problem. We don't build features; we build solutions for development, testing, and monitoring." 
            },
            { 
              title: "Open Core", 
              desc: "Transparency is non-negotiable. All core tools are open source to ensure global establishment and community-led evolution." 
            },
            { 
              title: "Architectural Synergy", 
              desc: "Individually powerful, collectively unstoppable. Our tools are designed with a shared logic to reduce fragmented toolchain friction." 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 md:p-16 lg:p-24 bg-[#fafafa] dark:bg-[#0a0a0a] hover:bg-current/[0.03] dark:hover:bg-current/[0.03] transition-all group min-h-[350px] md:min-h-[500px] flex flex-col justify-between">
              <div className="text-[10px] mb-8 md:mb-14 opacity-20 mono font-black tracking-widest uppercase text-gray-300">MANIFESTO_UNIT_0{i+1}</div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-6 md:mb-8 group-hover:italic transition-all duration-700 text-gray-300">{item.title}</h3>
                <p className="text-sm md:text-base opacity-50 leading-relaxed font-medium italic text-gray-400">{item.desc}</p>
              </div>
              <div className="h-[2px] w-0 bg-current group-hover:w-full transition-all duration-1000 mt-8"></div>
            </div>
          ))}
        </section>

        {/* Specialized Domains */}
        <section className="mb-64">
          <div className="text-center mb-32">
            <h2 className="text-[12px] font-black uppercase tracking-[0.8em] opacity-30 mb-6">Execution Domains</h2>
            <div className="h-1 w-32 bg-current/20 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { 
                domain: "Blockchain Layer", 
                detail: "Automating functions and events loading from ABI. Making blockchain integration a zero-error process." 
              },
              { 
                domain: "AI Inference Core", 
                detail: "Solving the gap in edge-optimized proxies and inference gateways for localized LLM deployment." 
              },
              { 
                domain: "IoT Mesh Protocols", 
                detail: "High-density sensor orchestration. The glue between physical hardware and cloud logic." 
              },
              { 
                domain: "Web System Utility", 
                detail: "Essential bedrock components for high-concurrency environments and specialized developer dashboards." 
              }
            ].map((d, i) => (
              <div key={i} className="p-20 border-2 border-current/5 bg-current/[0.01] hover:bg-current/[0.05] transition-all group overflow-hidden relative">
                <div className="absolute -right-8 -top-8 text-8xl font-black opacity-[0.03] group-hover:opacity-[0.08] transition-opacity italic select-none">{i+1}</div>
                <h4 className="text-[12px] font-black uppercase tracking-[0.6em] opacity-40 mb-10 group-hover:opacity-100 transition-opacity">{d.domain}</h4>
                <p className="text-xl opacity-60 leading-relaxed font-light italic">{d.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Sustainability Vision */}
        <section className="py-64 border-t-2 border-current/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-5"></div>
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter mb-16 italic relative z-10">UaaS Model.</h2>
          <p className="text-2xl md:text-4xl font-light opacity-60 max-w-5xl mx-auto leading-relaxed mb-24 relative z-10 italic">
            "Use our tools for free; pay us to manage the infrastructure for you." We ensure long-term health through our managed <strong>Utility-as-a-Service</strong> portal.
          </p>
          <Link 
            to="/contact" 
            className="px-12 py-6 bg-black dark:bg-white text-white dark:text-black text-[13px] uppercase tracking-[1em] font-black hover:scale-110 transition-all duration-300 shadow-2xl dark:shadow-2xl relative z-10 inline-block hover:shadow-3xl dark:hover:shadow-3xl"
          >
            Connect With The Lab
          </Link>
        </section>
      </div>
    </div>
  );
};