import React from 'react';

export const Logo: React.FC<{ className?: string, isPreloader?: boolean }> = ({ className = "h-12", isPreloader = false }) => {
  const gearPath = "M88 44h-8.7c-.8-3.4-2.1-6.6-4.1-9.5l6.2-6.2-8.5-8.5-6.2 6.2c-2.9-2-6.1-3.3-9.5-4.1V12h-12v8.7c-3.4.8-6.6 2.1-9.5 4.1l-6.2-6.2-8.5 8.5 6.2 6.2c-2 2.9-3.3 6.1-4.1 9.5H12v12h8.7c.8 3.4 2.1 6.6 4.1 9.5l-6.2 6.2 8.5 8.5 6.2-6.2c2.9 2 6.1 3.3 9.5 4.1V88h12v-8.7c3.4-.8 6.6-2.1 9.5-4.1l6.2 6.2 8.5-8.5-6.2-6.2c2-2.9 3.3-6.1 4.1-9.5H88V44zM50 62c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z";

  return (
    <div className={`flex items-center gap-4 ${className} group cursor-pointer select-none`}>
      <div className={`relative ${isPreloader ? 'w-24 h-24' : 'w-10 h-10'}`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-current opacity-10 blur-2xl rounded-full scale-150 group-hover:opacity-20 transition-opacity"></div>
        
        {/* Main Gear SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-current animate-gear absolute top-0 left-0 drop-shadow-[0_0_10px_rgba(128,128,128,0.2)]"
        >
          <path
            fill="currentColor"
            d={gearPath}
          />
        </svg>

        {/* Small Secondary Gear */}
        <svg
          viewBox="0 0 100 100"
          className={`text-current opacity-40 animate-gear-reverse absolute ${isPreloader ? 'w-10 h-10 -top-2 -right-2' : 'w-4 h-4 -top-1 -right-1'}`}
        >
          <path
            fill="currentColor"
            d={gearPath}
          />
        </svg>
      </div>
      {!isPreloader && (
        <div className="flex flex-col leading-none" style={{marginLeft:"-10px"}}>
          <span className="text-xl font-black tracking-tighter uppercase italic">Oru Labs</span>
          <div className="flex items-center gap-2 mt-0.5">
            <div className="h-[1px] w-3 bg-current opacity-20"></div>
            <span className="text-[8px] tracking-[0.4em] opacity-50 uppercase font-black">Bedrock Engineering</span>
          </div>
        </div>
      )}
    </div>
  );
};