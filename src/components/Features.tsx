import { useRef } from 'react';
import { Zap, Filter, CalendarCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Zap,
    title: 'Instant Response',
    description: 'Replies 24/7 so you never lose a lead.',
  },
  {
    icon: Filter,
    title: 'Smart Qualification',
    description: 'Filters out browsers, keeps buyers.',
  },
  {
    icon: CalendarCheck,
    title: 'Auto-Booking',
    description: 'Syncs with Calendly to fill your schedule while you train.',
  },
];

export const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-[#0B132B] to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#1C82FF] to-[#00D4FF] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-['Poppins'] font-bold text-[clamp(1.75rem,4.5vw,3.5rem)] text-white mb-6">
            Meet Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
              AI Lead Capture Agent.
            </span>
          </h2>
          <p className="font-['Inter'] text-gray-400 text-xl max-w-3xl mx-auto">
            A smart digital assistant that replies instantly, filters serious leads, and books consultations automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 delay-${index * 150} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C82FF]/20 via-[#00D4FF]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#1C82FF] via-[#00D4FF] to-[#1C82FF] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />

                <div className="relative bg-gradient-to-br from-[#0B132B]/90 to-black/90 backdrop-blur-xl p-10 rounded-3xl border border-[#1C82FF]/30 hover:border-[#1C82FF] transition-all duration-500 transform hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(28,130,255,0.5)]">
                  <div className="mb-6 inline-flex p-5 bg-gradient-to-br from-[#1C82FF]/20 to-[#00D4FF]/20 rounded-2xl border border-[#1C82FF]/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-10 h-10 text-[#1C82FF] group-hover:text-[#00D4FF] transition-colors duration-500" />
                  </div>

                  <h3 className="font-['Poppins'] font-bold text-2xl text-white mb-4 group-hover:text-[#1C82FF] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="font-['Inter'] text-gray-400 text-lg" style={{lineHeight: '1.7'}}>
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#1C82FF]/10 rounded-full blur-3xl group-hover:bg-[#1C82FF]/30 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1C82FF]/10 via-[#00D4FF]/10 to-[#1C82FF]/10 border-2 border-[#1C82FF]/50 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C82FF]/20 via-[#00D4FF]/20 to-[#1C82FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Zap className="w-6 h-6 text-[#1C82FF] relative z-10 group-hover:animate-pulse" />
            <p className="font-['Poppins'] text-white text-xl font-semibold relative z-10">
              While you're training, your agent is closing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
