import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'pain-points', label: 'Problems' },
  { id: 'features', label: 'Solution' },
  { id: 'demo', label: 'Demo' },
  { id: 'about', label: 'About' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'cta', label: 'Contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map((item) => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
          isScrolled
            ? 'bg-[#0B132B]/80 backdrop-blur-xl border-b border-[#1C82FF]/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="group"
            >
              <span
                className="font-['Poppins'] font-bold text-white group-hover:text-[#1C82FF] transition-all duration-300"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  letterSpacing: '-0.01em'
                }}
              >
                AutomateWithDre
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-['Inter'] font-medium text-base transition-all duration-[250ms] ease-out relative group ${
                    activeSection === item.id
                      ? 'text-[#1C82FF]'
                      : 'text-gray-400 hover:text-[#00E0FF]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href="https://calendly.com/russelldeandre79/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center justify-center uppercase text-xs px-5 py-2.5"
                aria-label="Book a consultation call"
              >
                Book Call
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#1C82FF] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-20 right-6 left-6 bg-gradient-to-br from-[#0B132B] to-black border border-[#1C82FF]/30 rounded-2xl shadow-[0_20px_60px_rgba(28,130,255,0.3)] transition-all duration-300 will-change-transform ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-['Inter'] font-medium text-lg text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-[#1C82FF]/20 text-[#1C82FF] border border-[#1C82FF]/50'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            <a
              href="https://calendly.com/russelldeandre79/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button mt-4 uppercase text-sm"
            >
              Book Call
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://calendly.com/russelldeandre79/20min"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 lg:hidden p-4 bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] rounded-full shadow-[0_10px_40px_rgba(28,130,255,0.6)] transition-all duration-100 hover:scale-110 active:scale-95 animate-pulse-slow flex items-center justify-center touch-manipulation"
        aria-label="Book consultation call"
      >
        <span className="text-white text-2xl font-bold" role="img" aria-label="Phone">📞</span>
      </a>
    </>
  );
};
