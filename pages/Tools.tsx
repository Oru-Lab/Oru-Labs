
import React from 'react';

export const Tools: React.FC = () => {
  const categories = [
    { name: "Blockchain Integration", count: "01" },
    { name: "AI Utilities", count: "02" },
    { name: "IoT Bedrock", count: "03" },
    { name: "Web Infrastructure", count: "06" }
  ];

  const tools = [
    { 
      name: "Oru-Lens", 
      tag: "Blockchain", 
      desc: "Automated smart contract ABI to Frontend mapping. Loads functions, events, and types instantly from a contract address and ABI.",
      status: "Stable",
      repo: "https://github.com/Oru-Lab/oru-lens"
    },
    { 
      name: "Neural-Gate", 
      tag: "AI", 
      desc: "Lightweight inference proxy for edge computing. Optimizes model calls and handles local caching strategies.",
      status: "Beta",
      repo: "https://github.com/Oru-Lab/neural-gate"
    },
    { 
      name: "Grid-Link", 
      tag: "IoT", 
      desc: "Ultra-low latency protocol for device orchestration. Built for high-density sensor environments.",
      status: "Research",
      repo: "https://github.com/Oru-Lab/grid-link"
    },
    { 
      name: "Bedrock-UI", 
      tag: "Web", 
      desc: "A set of unstyled, accessible primitives focused on developer dashboards and industrial applications.",
      status: "Stable",
      repo: "https://github.com/Oru-Lab/bedrock-ui"
    },
  ];

  return (
    <div className="flex-grow py-32 px-6">
      <div className="container mx-auto">
        <div className="mb-24">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">The Library.</h1>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button key={cat.name} className="flex items-center gap-3 px-6 py-2 border border-white/10 hover:border-white/40 transition-all group">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-white">{cat.name}</span>
                <span className="text-[10px] mono text-gray-700">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
           {tools.map((tool, i) => (
             <div key={i} className="bg-black p-12 hover:bg-white/[0.02] transition-all group border border-white/0 hover:border-white/5">
                <div className="flex justify-between items-start mb-12">
                   <span className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-widest font-bold text-gray-400">{tool.tag}</span>
                   <span className={`text-[10px] uppercase tracking-widest font-bold ${tool.status === 'Stable' ? 'text-green-500' : 'text-orange-500'}`}>{tool.status}</span>
                </div>
                <h3 className="text-4xl text-gray-400 font-bold mb-6 tracking-tight group-hover:translate-x-2 transition-transform">{tool.name}</h3>
                <p className="text-gray-500 leading-relaxed mb-10 max-w-sm">{tool.desc}</p>
                <a href={tool.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 transition-colors">
                  View Repository
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
             </div>
           ))}
        </div>

        {/* UaaS Promo */}
        <div className="mt-32 p-16 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent text-center">
           <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">Utility-as-a-Service</h2>
           <p className="text-gray-500 max-w-2xl mx-auto mb-10">
             Our tools are open source and free to use. However, for teams requiring managed infrastructure, high availability, and 24/7 monitoring, we offer a dedicated UaaS portal.
           </p>
           <button className="px-12 py-4 bg-white text-black font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-gray-200 transition-colors">
             Launch Managed Portal
           </button>
        </div>
      </div>
    </div>
  );
};
