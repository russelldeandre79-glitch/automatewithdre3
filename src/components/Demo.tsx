import { useRef, useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Demo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="relative py-32 md:py-32 pb-24 bg-gradient-to-b from-black via-[#0B132B] to-black overflow-x-hidden overflow-y-visible"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#1C82FF] rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full flex justify-center items-center flex-col px-6 py-[60px] pb-[80px]">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1C82FF]/10 border border-[#1C82FF]/30 rounded-full mb-6 backdrop-blur-sm">
            <Play className="w-5 h-5 text-[#1C82FF]" />
            <span className="font-['Inter'] text-[#1C82FF] font-semibold">Live Prototype</span>
          </div>

          <h2 className="font-['Poppins'] font-bold text-[clamp(1.75rem,4.5vw,3.5rem)] text-white mb-6">
            See It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
              Capture Leads
            </span>{' '}
            in Real Time.
          </h2>

          <p className="font-['Inter'] text-gray-400 text-xl max-w-2xl mx-auto">
            Watch exactly how your future AI agent qualifies leads and books calls.
          </p>
        </div>

        <div
          className={`w-[90%] max-w-[420px] md:max-w-7xl mx-auto mb-[60px] transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative group overflow-visible">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1C82FF] via-[#00D4FF] to-[#1C82FF] rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />

            <div className="relative bg-gradient-to-br from-[#0B132B] to-black p-4 rounded-[20px] border border-[#1C82FF]/50 overflow-visible">
              <div className="w-full bg-black rounded-2xl overflow-visible shadow-[0_20px_80px_rgba(28,130,255,0.4)] h-auto min-h-[650px] md:min-h-0 md:aspect-video">
                <iframe
                  src="https://voiceglow.org/app/na/prototype?vg_id=LMvOcDB1StHBzf4tbvek"
                  className="w-full h-full min-h-[650px] md:min-h-0"
                  style={{ objectFit: 'contain' }}
                  title="AI Lead Capture Agent Interactive Demo - Try the conversation flow"
                  allow="microphone"
                  loading="lazy"
                  aria-label="Interactive demo of AI lead capture agent"
                />
              </div>

              <div className="absolute top-8 left-8 w-3 h-3 bg-[#FF3C3C] rounded-full animate-pulse shadow-[0_0_20px_rgba(255,60,60,0.8)] max-md:scale-90" aria-hidden="true" />
              <div className="absolute top-8 left-16 px-4 py-2 bg-[#FF3C3C]/20 border border-[#FF3C3C]/50 rounded-full backdrop-blur-sm max-md:scale-90">
                <span className="font-['Inter'] text-[#FF3C3C] text-sm font-semibold" role="status">LIVE</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-6 mb-10 text-center w-[90%] max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="px-8 py-4 bg-gradient-to-r from-[#1C82FF]/10 to-[#00D4FF]/10 border border-[#1C82FF]/40 rounded-xl backdrop-blur-sm shadow-[0_0_15px_rgba(28,130,255,0.3)]">
            <p className="font-['Inter'] text-gray-300 text-lg">
              Every AI Agent is handcrafted and tested by DeAndre Russell before launch — no copy-paste systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
