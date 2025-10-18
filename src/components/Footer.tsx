import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(footerRef);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-[#0B132B] to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-[#1C82FF] to-[#00D4FF] rounded-full blur-[150px]" />
      </div>


      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1C82FF]/50 to-transparent" />

      <div className={`relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          <div className="space-y-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 group">
              <span className="font-['Poppins'] font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
                AutomateWithDre
              </span>
            </div>
            <p className="font-['Inter'] text-gray-400 text-sm leading-relaxed">
              AI Lead Capture Systems for Personal Trainers. Custom-built automation that books real clients automatically.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h4 className="font-['Poppins'] font-semibold text-white text-lg mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'Solution', id: 'features' },
                { label: 'Demo', id: 'demo' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Contact', id: 'cta' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-['Inter'] text-gray-400 hover:text-[#00E0FF] transition-all duration-[250ms] text-sm relative group"
                    style={{
                      textShadow: '0 0 0 rgba(0,224,255,0)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = '0 0 8px rgba(0,224,255,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = '0 0 0 rgba(0,224,255,0)';
                    }}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <h4 className="font-['Poppins'] font-semibold text-white text-lg mb-6 tracking-tight">Get Started</h4>
            <p className="font-['Inter'] text-gray-400 text-sm mb-4">
              Based in Michigan • Serving Personal Trainers Nationwide
            </p>
            <a
              href="https://calendly.com/russelldeandre79/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center justify-center uppercase text-sm"
              aria-label="Schedule a free consultation call"
            >
              Book Free Call
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1C82FF]/5">
          <p className="font-['Inter'] text-gray-500 text-sm text-center">
            © {currentYear} AutomateWithDre | Built by DeAndre Russell | Custom AI Automation for Personal Trainers.
          </p>
        </div>
      </div>
    </footer>
  );
};
