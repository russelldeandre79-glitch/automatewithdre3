import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Features } from './components/Features';
import { Demo } from './components/Demo';
import { WhyTrainers } from './components/WhyTrainers';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { WebsiteDesign } from './components/WebsiteDesign';
import { FoundersNote } from './components/FoundersNote';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030B17] to-[#040D1E] overflow-x-hidden">
      <Navigation />
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1C82FF]/10 to-transparent" />
      <PainPoints />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1C82FF]/10 to-transparent" />
      <Features />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1C82FF]/10 to-transparent" />
      <Demo />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1C82FF]/10 to-transparent" />
      <WhyTrainers />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1C82FF]/10 to-transparent" />
      <Testimonials />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1C82FF]/10 to-transparent" />
      <About />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1C82FF]/10 to-transparent" />
      <Pricing />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1C82FF]/10 to-transparent" />
      <WebsiteDesign />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1C82FF]/10 to-transparent" />
      <FoundersNote />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1C82FF]/10 to-transparent" />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
