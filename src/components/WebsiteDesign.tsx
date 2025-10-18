import { useRef } from 'react';
import { Globe, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const websitePlans = [
  {
    name: 'Starter Site',
    description: '1-page high-conversion design',
    price: '$300',
    features: [
      'Mobile-optimized single page',
      'Professional design',
      'Fast loading speed',
      'Contact form integration',
    ],
    isBestValue: false,
  },
  {
    name: 'Professional Site',
    description: '3–5 pages with full functionality',
    price: '$600',
    features: [
      'Multi-page responsive design',
      'SEO optimization',
      'Custom branding',
      'Analytics setup',
    ],
    isBestValue: true,
  },
  {
    name: 'Full Brand Package',
    description: 'Website + AI system + CRM',
    price: '$900',
    features: [
      'Complete website build',
      'AI Lead Capture Agent',
      'CRM integration',
      'Priority support',
    ],
    isBestValue: false,
  },
];

export const WebsiteDesign = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="website-design"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-[#0B132B] to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-l from-[#1C82FF] to-[#00D4FF] rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Globe className="w-12 h-12 text-[#1C82FF]" />
          </div>
          <h2 className="font-['Poppins'] font-bold text-[clamp(1.75rem,4.5vw,3.5rem)] text-white mb-6">
            Want a Website{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
              Like This
            </span>
            {' '}for Your Business?
          </h2>
          <p className="font-['Inter'] text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            I also design high-converting websites for fitness pros and local brands.
            <br />
            Each site is custom-built — optimized for mobile, SEO, and conversions.
            <br />
            Get a clean, professional site that turns visitors into clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {websitePlans.map((plan, index) => {
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
                {plan.isBestValue && (
                  <div
                    style={{
                      transitionDelay: isVisible ? `${delays[index] + 200}ms` : '0ms',
                    }}
                    className={`absolute -top-[18px] left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gradient-to-r from-[#00A8FF] to-[#00E0FF] rounded-full shadow-[0_4px_20px_rgba(28,130,255,0.35)] z-20 transition-all duration-[600ms] ease-out ${
                      isVisible ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                  >
                    <span className="font-['Poppins'] text-white text-xs font-semibold">BEST VALUE</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-[#1C82FF]/20 via-[#00D4FF]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`absolute -inset-0.5 bg-gradient-to-br from-[#1C82FF] via-[#00D4FF] to-[#1C82FF] rounded-3xl transition-opacity duration-300 ${
                    plan.isBestValue ? 'opacity-30 group-hover:opacity-50' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                <div className={`relative bg-gradient-to-br from-[#0B132B]/95 to-black/95 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-300 ease-out h-full flex flex-col min-h-[520px] hover:scale-[1.03] ${
                  plan.isBestValue
                    ? 'border-[#1C82FF]/60 shadow-[0_0_30px_rgba(0,224,255,0.25)] hover:border-[#1C82FF]/80 hover:shadow-[0_20px_60px_rgba(28,130,255,0.4)]'
                    : 'border-[#1C82FF]/40 hover:border-[#1C82FF] hover:shadow-[0_20px_60px_rgba(28,130,255,0.25)]'
                }`}>
                  <div className="mb-6">
                    <h3 className="font-['Poppins'] font-bold text-2xl text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="font-['Inter'] text-gray-400 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-['Poppins'] font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#1C82FF] to-[#00D4FF]">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
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
                    className={`w-full uppercase text-sm flex items-center justify-center transition-all duration-[500ms] ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    } ${
                      plan.isBestValue ? 'cta-button' : 'cta-outline'
                    }`}
                  >
                    Book Free Consultation
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
