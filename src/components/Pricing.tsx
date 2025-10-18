import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pricingTiers = [
  {
    name: 'Starter Build',
    description: '1 custom AI Lead Capture Agent + Calendly + CRM setup',
    price: '$450',
    period: 'one-time',
    features: [
      'Custom AI Lead Capture Agent',
      'Calendly integration',
      'Basic CRM setup',
      'Instant response system',
    ],
    cta: 'Book Free Consultation',
    isBestValue: false,
  },
  {
    name: 'Pro Growth',
    description: 'Starter + qualification logic + CRM follow-up flow',
    price: '$750',
    period: 'one-time',
    features: [
      'Everything in Starter Build',
      'Advanced qualification logic',
      'Custom CRM follow-up flow',
      'Lead scoring system',
    ],
    cta: 'Book Free Consultation',
    isBestValue: true,
  },
  {
    name: 'Premium System',
    description: 'Full automation suite: AI agent, CRM dashboard, analytics',
    price: '$1,200',
    period: 'one-time',
    features: [
      'Everything in Pro Growth',
      'Custom CRM dashboard',
      'Advanced analytics tracking',
      'Priority support & optimization',
    ],
    cta: 'Book Free Consultation',
    isBestValue: false,
  },
];


export const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-[#0B132B] to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-[#1C82FF] to-[#00D4FF] rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-['Poppins'] font-bold text-[clamp(1.75rem,4.5vw,3.5rem)] text-white mb-6">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
              Growth Path
            </span>
          </h2>
          <p className="font-['Inter'] text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            You only pay for real results — no fluff, no risk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const delays = [0, 150, 300];
            return (
              <div
                key={index}
                style={{
                  transitionDelay: isVisible ? `${delays[index]}ms` : '0ms',
                }}
                className={`group relative transition-all duration-[600ms] ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {tier.isBestValue && (
                  <div
                    style={{
                      transitionDelay: isVisible ? `${delays[index] + 150}ms` : '0ms',
                    }}
                    className={`best-value-pill absolute -top-[18px] left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#00A8FF] to-[#00E0FF] rounded-full shadow-[0_6px_24px_rgba(28,130,255,0.4)] z-20 transition-all duration-[500ms] cubic-bezier(0.4, 0.0, 0.2, 1) will-change-transform ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                    }`}
                  >
                    <span className="font-['Poppins'] text-white text-xs font-bold tracking-wider">BEST VALUE</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-[#1C82FF]/20 via-[#00D4FF]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 will-change-transform" />

                <div
                  className={`absolute -inset-0.5 bg-gradient-to-br from-[#1C82FF] via-[#00D4FF] to-[#1C82FF] rounded-3xl transition-opacity duration-300 will-change-transform ${
                    tier.isBestValue ? 'opacity-30 group-hover:opacity-50' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                <div className={`relative bg-gradient-to-br from-[#0B132B]/95 to-black/95 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-[500ms] cubic-bezier(0.4, 0.0, 0.2, 1) h-full flex flex-col min-h-[580px] hover:scale-[1.02] will-change-transform ${
                  tier.isBestValue
                    ? 'border-[#1C82FF]/60 shadow-[0_0_30px_rgba(0,224,255,0.25)] hover:border-[#1C82FF]/80 hover:shadow-[0_20px_60px_rgba(28,130,255,0.4)]'
                    : 'border-[#1C82FF]/40 hover:border-[#1C82FF] hover:shadow-[0_20px_60px_rgba(28,130,255,0.25)]'
                }`}>
                  <div className="mb-6">
                    <h3 className="font-['Poppins'] font-bold text-2xl text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="font-['Inter'] text-gray-400 text-sm mb-4 min-h-[48px]">
                      {tier.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-['Poppins'] font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
                        {tier.price}
                      </span>
                      <span className="font-['Inter'] text-gray-500 text-base">
                        {tier.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#1C82FF] flex-shrink-0 mt-0.5" />
                        <span className="font-['Inter'] text-gray-300 text-base leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://calendly.com/russelldeandre79/20min"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      transitionDelay: isVisible ? `${delays[index] + 500}ms` : '0ms',
                    }}
                    className={`w-full uppercase text-sm flex items-center justify-center ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    } ${
                      tier.isBestValue ? 'cta-button' : 'cta-outline'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-[#0B132B]/80 to-black/80 backdrop-blur-xl border-2 border-[#1C82FF]/40 rounded-3xl p-10 md:p-12 shadow-[0_30px_100px_rgba(28,130,255,0.4)] text-center">
            <div className="mb-6">
              <span className="text-6xl mb-4 block" role="img" aria-label="Lightning bolt">⚡</span>
              <h3 className="font-['Poppins'] font-bold text-3xl text-white mb-4">
                No Risk Guarantee
              </h3>
            </div>
            <p className="font-['Inter'] text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              If your system doesn't bring 5 qualified leads in 30 days, you don't pay a dime.
            </p>
            <a
              href="https://calendly.com/russelldeandre79/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center gap-3 text-base uppercase"
            >
              Book Your Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
