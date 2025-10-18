import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const WhyTrainers = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="why-trainers"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-[#0B132B] to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.3)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-['Poppins'] font-bold text-[clamp(1.75rem,4.5vw,3.5rem)] text-white text-center mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
              Why Personal Trainers?
            </span>
          </h2>

          <div className="bg-gradient-to-br from-[#0B132B]/95 to-black/95 backdrop-blur-xl border border-[#1C82FF]/30 rounded-3xl p-10 md:p-12 shadow-[0_30px_100px_rgba(28,130,255,0.3)]">
            <div className="space-y-6 font-['Inter'] text-gray-300 text-lg text-center" style={{lineHeight: '1.7'}}>
              <p>
                I've spent years training and helping friends, family, and coworkers get in shape.
              </p>

              <p>
                That real-world experience helps me speak your language and build automations that feel human — not robotic.
              </p>

              <p>
                I understand the daily grind and how easily missed DMs can mean missed income.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <button
                onClick={scrollToDemo}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] text-white font-['Inter'] font-semibold text-sm tracking-wider uppercase rounded-xl shadow-[0_8px_24px_rgba(28,130,255,0.35)] transition-all duration-200 ease-out hover:scale-105 hover:shadow-[0_12px_32px_rgba(28,130,255,0.5)] active:scale-95 will-change-transform"
                aria-label="View demo of AI lead capture system"
              >
                <span className="relative z-10">See How It Works</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#1C82FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
