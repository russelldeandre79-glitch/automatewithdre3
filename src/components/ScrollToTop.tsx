import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[40px] right-[40px] max-md:bottom-[100px] max-md:right-[20px] max-md:shadow-[0_0_10px_rgba(0,0,0,0.3)] z-40 w-[60px] h-[60px] flex items-center justify-center bg-gradient-to-r from-[#1C82FF] to-[#00D4FF] rounded-full shadow-[0_8px_32px_rgba(28,130,255,0.4)] transition-all duration-[300ms] ease-in-out will-change-transform hover:scale-110 hover:shadow-[0_12px_48px_rgba(28,130,255,0.6)] active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-white" strokeWidth={3} />
    </button>
  );
};
