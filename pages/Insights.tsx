
import React from 'react';

export const Insights: React.FC = () => {
  const posts = [
    { date: "Nov 17, 2025", title: "Oru Labs: The Vision for 2026", category: "Manifesto" },
    { date: "Dec 01, 2025", title: "Why Smart Contract Integration is Broken", category: "Technical" },
    { date: "Jan 12, 2026", title: "Announcing our First Hero Tool: Oru-Sync", category: "Releases" },
  ];

  return (
    <div className="flex-grow py-20 px-6">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase italic">Lab Logs.</h1>
          <p className="text-gray-500 tracking-[0.3em] uppercase text-xs font-bold">Research • Development • Updates</p>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-white/10">
          {posts.map((post, i) => (
            <div key={i} className="py-12 group flex flex-col md:flex-row md:items-center gap-6 cursor-pointer">
              <div className="md:w-32">
                 <span className="text-sm text-gray-500 mono">{post.date}</span>
              </div>
              <div className="flex-grow">
                 <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block font-bold">{post.category}</span>
                 <h2 className="text-3xl md:text-4xl font-bold group-hover:translate-x-4 transition-transform duration-300 group-hover:text-white">
                   {post.title}
                 </h2>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
