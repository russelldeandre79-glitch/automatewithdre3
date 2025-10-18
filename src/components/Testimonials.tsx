import { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonialPlaceholders = [
  {
    text: 'Trainer success story coming soon',
    icon: '👀',
  },
  {
    text: 'First clients testing this system now',
    icon: '🔥',
  },
  {
    text: 'Next testimonial could be yours',
    icon: '💪',
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-[#0B132B] to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#1C82FF] to-[#00D4FF] rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-['Poppins'] font-bold text-[clamp(1.75rem,4.5vw,3.5rem)] text-white mb-6">
            Trusted Systems.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
              Real Results
            </span>
            {' '}(Coming Soon).
          </h2>
          <p className="font-['Inter'] text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Every system I build is tested with real trainers before it's launched publicly.
            <br />
            These results speak for themselves — and soon you'll see real trainer stories here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialPlaceholders.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 delay-${index * 150} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C82FF]/30 via-[#00D4FF]/30 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#1C82FF] via-[#00D4FF] to-[#1C82FF] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-[#0B132B]/95 to-black/95 backdrop-blur-xl p-8 rounded-3xl border border-[#1C82FF]/40 hover:border-[#1C82FF] transition-all duration-500 transform hover:scale-103 hover:shadow-[0_30px_80px_rgba(28,130,255,0.5)] h-full flex flex-col items-center justify-center min-h-[280px]">
                <div className="mb-6">
                  <Sparkles className="w-16 h-16 text-[#1C82FF] animate-pulse-slow" />
                </div>

                <p className="font-['Poppins'] font-semibold text-2xl text-white text-center mb-4">
                  {testimonial.text}
                </p>

                <div className="text-6xl">{testimonial.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
