import { useRef, useState, useEffect } from 'react';
import { Zap, CheckCircle2, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const badges = [
  {
    icon: Zap,
    title: 'Custom-Built',
    subtitle: 'No Templates',
  },
  {
    icon: CheckCircle2,
    title: 'Tested Systems',
    subtitle: 'Proven Results',
  },
  {
    icon: Wrench,
    title: 'US-Based',
    subtitle: 'Nationwide Trainer Support',
  },
];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setParallaxY(scrollPercent * 50 - 25);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-[#0B132B] to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[#1C82FF] to-[#00D4FF] rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-['Poppins'] font-bold text-[clamp(1.75rem,4.5vw,3.5rem)] text-white mb-4">
            Meet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] relative inline-block">
              DeAndre Russell
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] animate-pulse" />
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transform: `translateY(${parallaxY}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C82FF]/30 to-[#00D4FF]/30 rounded-3xl blur-3xl" />

            <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-[#1C82FF]/30 shadow-[0_30px_100px_rgba(28,130,255,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C82FF]/20 via-transparent to-[#00D4FF]/20" />

              <div className="w-full h-full bg-gradient-to-br from-[#0B132B] to-black flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="w-36 h-36 lg:w-[130px] lg:h-[130px] mx-auto rounded-full overflow-hidden border-4 border-[#00E0FF]/30 shadow-[0_0_40px_rgba(0,224,255,0.4)] relative">
                    <img
                      src="/dre.png"
                      alt="DeAndre Russell - AI Automation Specialist and Founder of AutomateWithDre"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                  </div>
                  <div className="font-['Poppins'] font-bold text-2xl text-white">DeAndre Russell</div>
                  <div className="font-['Inter'] text-[#1C82FF] text-lg">AI Automation Specialist</div>
                </div>
              </div>

              <div className="absolute top-6 right-6 px-4 py-2 bg-[#1C82FF]/90 backdrop-blur-sm rounded-full border border-[#00D4FF]/50">
                <span className="font-['Inter'] text-white text-sm font-semibold">Verified Expert</span>
              </div>
            </div>
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div>
              <div className="space-y-4 font-['Inter'] text-gray-300 text-lg" style={{lineHeight: '1.7'}}>
                <p>
                  Founder of AutomateWithDre.
                </p>
                <p>
                  AI Automation Specialist focused on helping personal trainers capture more clients, not chase them.
                </p>
                <p>
                  My systems combine Voiceflow, Airtable, and Calendly to automate lead capture and qualification — so you can train more, stress less.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1C82FF]/20 to-[#00D4FF]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative bg-gradient-to-br from-[#0B132B]/80 to-black/80 backdrop-blur-sm p-6 rounded-xl border border-[#1C82FF]/30 group-hover:border-[#1C82FF] transition-all duration-500 transform group-hover:-translate-y-1">
                      <Icon className="w-8 h-8 text-[#1C82FF] mb-3 group-hover:scale-110 transition-transform duration-500" />
                      <div className="font-['Poppins'] font-semibold text-white text-sm mb-1">
                        {badge.title}
                      </div>
                      <div className="font-['Inter'] text-gray-400 text-xs">
                        {badge.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
