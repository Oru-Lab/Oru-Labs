import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('loading');
    }, 2800);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledVal = (winScroll / height) * 100;
      const progress = document.getElementById('scroll-progress');
      if (progress) progress.style.width = scrolledVal + '%';
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navLinks = [
    { name: 'Core', path: '/' },
    { name: 'Manifesto', path: '/about' },
    { name: 'Infrastructure', path: '/tools' },
    { name: 'Builders', path: '/teams' },
    { name: 'Intake', path: '/contact' },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
        <div className="relative">
          <Logo isPreloader className="text-white mb-10 scale-125" />
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full animate-pulse"></div>
        </div>
        <div className="text-white mono text-[9px] tracking-[0.6em] uppercase font-black opacity-40 mt-12">
          Syncing Structural Bedrock...
        </div>
        <div className="w-48 h-[1px] bg-white/10 mt-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-white animate-shimmer"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen transition-colors duration-700 ease-in-out ${theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-[#fafafa] text-black'} selection:bg-current selection:text-white`}>
      
      {/* Dynamic Background Parallax Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-transform duration-[2.5s] ease-out"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.15)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover grayscale brightness-[0.2] contrast-150 transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-100' : 'opacity-15'}`}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-digital-structure-rendering-31418-large.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-black via-transparent to-black' : 'from-white via-transparent to-white'} opacity-[0.92]`}></div>
        <div className={`absolute inset-0 blueprint-grid ${theme === 'dark' ? 'opacity-[0.06]' : 'opacity-25'}`}></div>
      </div>

      {/* Structural Top Line Indicator */}
      <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-current/5">
        <div id="scroll-progress" className="h-full bg-current w-0 transition-all duration-150 ease-out shadow-[0_0_10px_currentColor]"></div>
      </div>

      {/* Industrial Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 ${scrolled ? (theme === 'dark' ? 'bg-black/90' : 'bg-white/90') + ' backdrop-blur-3xl border-b border-current/5 py-5' : 'bg-transparent py-12'}`}>
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="z-[60] flex items-center">
            <Logo />
          </Link>

          {/* Desktop Matrix Nav */}
          <div className="hidden lg:flex items-center gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative text-[12px] tracking-[0.6em] uppercase font-black transition-all ${pathname === link.path ? 'opacity-100' : 'opacity-30 hover:opacity-100'}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-current transition-all duration-700 ease-out ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-10 z-[60]">
            {/* Elegant Mode Toggle */}
            <button 
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              className="p-3 border border-current/10 hover:border-current/40 transition-all rounded-full hover:scale-110 active:scale-90"
              aria-label="Toggle Systems Theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>

            {/* Industrial Hamburger */}
            <button 
              className="lg:hidden flex flex-col gap-2 p-2 w-10 items-end group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu Matrix"
            >
              <div className={`h-[2px] bg-current transition-all duration-500 ${isMenuOpen ? 'w-8 rotate-45 translate-y-[10px]' : 'w-8 group-hover:w-10'}`}></div>
              <div className={`h-[2px] bg-current transition-all duration-500 ${isMenuOpen ? 'w-0 opacity-0' : 'w-5 group-hover:w-7'}`}></div>
              <div className={`h-[2px] bg-current transition-all duration-500 ${isMenuOpen ? 'w-8 -rotate-45 translate-y-[-10px]' : 'w-3 group-hover:w-5'}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Full Overlay */}
      <div className={`fixed inset-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden overflow-hidden ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'} ${theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#ffffff]'}`}>
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="flex flex-col items-center justify-center h-full gap-12 px-6 relative z-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-5xl font-black uppercase tracking-tighter hover:italic hover:translate-x-6 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-20 h-px w-40 bg-current/10"></div>
          <div className="text-[10px] tracking-[0.7em] uppercase font-black opacity-30 italic">Engineering the matrix.</div>
        </div>
      </div>

      {/* Main Contextual Container */}
      <main className="relative z-10 flex flex-col pt-0">
        <div className="container mx-auto px-8 min-h-screen">
          {children}
        </div>
        
        {/* Footer: Infrastructure Summary */}
        <footer className={`border-t border-current/5 py-40 px-8 ${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'} backdrop-blur-xl`}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 mb-32">
              <div className="lg:col-span-7">
                <Logo className="mb-14" />
                <p className="text-current/60 text-lg leading-relaxed max-w-lg mb-20 font-medium italic">
                  "Building our own bedrock instead of building on someone else's broken floor."
                </p>
                <div className="flex flex-wrap gap-x-16 gap-y-8">
                  {['GitHub', 'Twitter', 'LinkedIn', 'Discord'].map(social => (
                    <a key={social} href="#" className="text-[9px] uppercase tracking-[0.6em] font-black hover:italic opacity-40 hover:opacity-100 transition-all group flex items-center gap-2">
                      <span className="w-2 h-2 bg-current opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
                      {social}
                    </a>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-20">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.7em] mb-12 opacity-30">Infrastructure</h4>
                  <ul className="space-y-8 text-xs font-bold uppercase tracking-widest">
                    <li><Link to="/tools" className="hover:italic opacity-60 hover:opacity-100 transition-all block">Oru-Sync Core</Link></li>
                    <li><Link to="/tools" className="hover:italic opacity-60 hover:opacity-100 transition-all block">Neural Gateway</Link></li>
                    <li><Link to="/tools" className="hover:italic opacity-60 hover:opacity-100 transition-all block">Mesh Protocols</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.7em] mb-12 opacity-30">Lab Operations</h4>
                  <ul className="space-y-8 text-xs font-bold uppercase tracking-widest">
                    <li><Link to="/about" className="hover:italic opacity-60 hover:opacity-100 transition-all block">Manifesto</Link></li>
                    <li><Link to="/teams" className="hover:italic opacity-60 hover:opacity-100 transition-all block">Core Builders</Link></li>
                    <li><Link to="/contact" className="hover:italic opacity-60 hover:opacity-100 transition-all block">System Intake</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-current/10 gap-12">
              <div className="text-[9px] uppercase tracking-[0.6em] opacity-30 font-black">
                ORU LABS — Port Harcourt, Nigeria — Est. 2025
              </div>
              <div className="flex items-center gap-10">
                <span className="flex items-center gap-3 text-[9px] uppercase tracking-[0.6em] font-black text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></span>
                  Matrix Status: Operational
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};