import { useRef, useEffect, useState } from 'react';

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 40 : 80;
      const connectionDistance = isMobile ? 120 : 150;

      return { particleCount, connectionDistance, isMobile };
    };

    let { particleCount, connectionDistance, isMobile } = resizeCanvas();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
    }> = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    initParticles();

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        const particleSize = isMobile ? 2 : 2.5;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(28, 130, 255, 0.7)';
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i === j) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = 0.25 * (1 - distance / connectionDistance);
            ctx.strokeStyle = `rgba(28, 130, 255, ${opacity})`;
            ctx.lineWidth = isMobile ? 0.8 : 1;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newConfig = resizeCanvas();
      particleCount = newConfig.particleCount;
      connectionDistance = newConfig.connectionDistance;
      isMobile = newConfig.isMobile;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#030B17] via-[#040D1E] to-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
          opacity: 0.85
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030B17]/30 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h1
            className="hero-headline opacity-0"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5.5vw, 4rem)',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
              color: '#ffffff',
              animation: 'fadeInUp 600ms cubic-bezier(0.4, 0.0, 0.2, 1) forwards'
            }}
          >
            <span className="block">Train Clients.</span>
            <span
              className="block mt-2"
              style={{
                background: 'linear-gradient(90deg, #1C82FF, #00E0FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Not DMs.
            </span>
          </h1>

          <p
            className="hero-subheadline opacity-0"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '600px',
              margin: '0 auto',
              animation: 'fadeInUp 600ms cubic-bezier(0.4, 0.0, 0.2, 1) 100ms forwards'
            }}
          >
            24/7 AI Lead Capture for Personal Trainers – turn followers into booked consultations automatically.
          </p>

          <div
            className="hero-ctas opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            style={{
              animation: 'fadeInUp 600ms cubic-bezier(0.4, 0.0, 0.2, 1) 200ms forwards'
            }}
          >
            <a
              href="https://calendly.com/russelldeandre79/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button flex items-center justify-center text-center uppercase text-sm w-full sm:w-auto"
              aria-label="Book a free strategy call with AutomateWithDre"
            >
              Book a Free Strategy Call
            </a>

            <button
              onClick={scrollToDemo}
              className="cta-outline uppercase text-sm w-full sm:w-auto"
              aria-label="View live demo of AI lead capture system"
            >
              See it in Action
            </button>
          </div>

          <p
            className="opacity-0"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '0.875rem',
              lineHeight: '1.65',
              color: 'rgba(255, 255, 255, 0.4)',
              marginTop: '2rem',
              animation: 'fadeInUp 600ms cubic-bezier(0.4, 0.0, 0.2, 1) 300ms forwards'
            }}
          >
            No templates. Every system is custom-built and tested personally by DeAndre Russell.
          </p>
        </div>
      </div>
    </section>
  );
};
