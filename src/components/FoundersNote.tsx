import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const FoundersNote = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="founders-note"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#0B132B] via-black to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="font-['Poppins'] font-bold text-[clamp(2rem,5vw,3rem)] text-white mb-3">
              A Message from the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
                Founder
              </span>
            </h2>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C82FF]/20 via-[#00D4FF]/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#1C82FF]/40 via-[#00D4FF]/40 to-[#1C82FF]/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-[#0B132B]/90 to-black/90 backdrop-blur-xl border border-[#1C82FF]/30 rounded-3xl p-10 md:p-12">
              <div className="space-y-6 font-['Inter'] text-gray-300 text-lg leading-relaxed text-center">
                <p className="text-2xl font-['Poppins'] font-semibold text-white mb-8">
                  "Every system I build is custom-tested by me before it reaches a client.
                </p>

                <p className="text-2xl font-['Poppins'] font-semibold text-white mb-8">
                  I believe automation should feel human — fast, helpful, and personal."
                </p>

                <div className="pt-8 border-t border-[#1C82FF]/20 mt-8">
                  <p className="font-['Poppins'] text-white font-semibold text-xl mb-2">
                    – DeAndre Russell
                  </p>
                  <p className="text-gray-400 text-base">
                    Founder of AutomateWithDre
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#1C82FF]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
