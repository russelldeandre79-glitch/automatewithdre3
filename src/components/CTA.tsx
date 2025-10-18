import { useRef } from 'react';
import { Zap, ArrowUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-[#0B132B] to-black overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#1C82FF] via-[#00D4FF] to-[#1C82FF] rounded-full blur-[200px] opacity-30 animate-gradient" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div
          className={`text-center space-y-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h2 className="font-['Poppins'] font-bold text-[clamp(2rem,5.5vw,4rem)] text-white mb-6 leading-tight">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
                Automate Your Leads?
              </span>
            </h2>

            <p className="font-['Inter'] text-gray-300 text-xl max-w-3xl mx-auto" style={{lineHeight: '1.7'}}>
              Let's build your custom AI Lead Capture Agent. Book a free strategy call to see if it's a fit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center pt-8">
            <a
              href="https://calendly.com/russelldeandre79/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center justify-center gap-3 text-base uppercase w-full sm:w-auto"
              aria-label="Book a free strategy call with AutomateWithDre"
            >
              <Zap className="w-5 h-5" />
              Book Free Consultation
            </a>
            <button
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-outline inline-flex items-center justify-center text-base uppercase w-full sm:w-auto"
              aria-label="View interactive demo of AI agent"
            >
              See Demo
            </button>
          </div>

        </div>
      </div>

      <footer className="relative z-10 mt-32 pt-12 border-t border-[#1C82FF]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="font-['Poppins'] font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] mb-2">
                AutomateWithDre
              </div>
              <p className="font-['Inter'] text-gray-500 text-sm">
                AI Lead Capture for Personal Trainers
              </p>
            </div>

            <div className="font-['Inter'] text-gray-500 text-sm text-center">
              © 2025 AutomateWithDre | Built by DeAndre Russell
            </div>

            <button
              onClick={scrollToTop}
              className="group p-4 bg-gradient-to-br from-[#1C82FF]/20 to-[#00D4FF]/20 hover:from-[#1C82FF] hover:to-[#00D4FF] border border-[#1C82FF]/30 hover:border-[#1C82FF] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(28,130,255,0.6)]"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6 text-[#1C82FF] group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};
