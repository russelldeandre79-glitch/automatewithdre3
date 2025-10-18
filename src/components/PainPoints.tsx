import { useRef } from 'react';
import { MessageSquareX, Clock, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const painPoints = [
  {
    icon: MessageSquareX,
    title: 'Missed Leads',
    description: 'Prospects ghost if you don\'t reply fast enough.',
  },
  {
    icon: Clock,
    title: 'Unqualified Chats',
    description: 'Hours wasted talking to people who\'ll never buy.',
  },
  {
    icon: Calendar,
    title: 'Scheduling Chaos',
    description: 'Leads vanish in endless back-and-forth.',
  },
];

export const PainPoints = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="pain-points"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-[#0B132B] to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF3C3C]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF3C3C]/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-['Poppins'] font-bold text-[clamp(1.75rem,4.5vw,3.5rem)] text-white mb-4">
            You're Losing Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3C3C] to-[#FF6B6B]">
              Without Realizing It.
            </span>
          </h2>
          <p className="font-['Inter'] text-gray-400 text-xl max-w-3xl mx-auto">
            Slow responses and missed DMs cost trainers thousands every month.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF3C3C]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#FF3C3C] to-[#FF6B6B] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative bg-gradient-to-br from-[#0B132B] to-black p-8 rounded-2xl border border-[#FF3C3C]/30 hover:border-[#FF3C3C] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,60,60,0.4)]">
                  <div className="mb-6 inline-flex p-4 bg-[#FF3C3C]/10 rounded-xl border border-[#FF3C3C]/30 group-hover:bg-[#FF3C3C]/20 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8 text-[#FF3C3C]" />
                  </div>

                  <h3 className="font-['Poppins'] font-bold text-2xl text-white mb-4 group-hover:text-[#FF6B6B] transition-colors duration-300">
                    {point.title}
                  </h3>

                  <p className="font-['Inter'] text-gray-400 text-lg" style={{lineHeight: '1.7'}}>
                    {point.description}
                  </p>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3C3C]/5 rounded-full blur-2xl group-hover:bg-[#FF3C3C]/20 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-8 py-4 bg-[#FF3C3C]/10 border-2 border-[#FF3C3C]/50 rounded-xl backdrop-blur-sm">
            <p className="font-['Inter'] text-gray-300 text-lg">
              Every missed message is money left on the table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
