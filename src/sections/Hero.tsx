import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';

const ParticleField = lazy(() =>
  import('../three/ParticleField').then((m) => ({ default: m.ParticleField }))
);

const roles = [
  'AI/ML Developer',
  'Full Stack Engineer',
  'Computer Vision Builder',
  'Multi-Agent AI Architect',
];

export function Hero() {
  const typed = useTypewriter(roles, 75, 2200);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Particle background */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(10,15,30,0.5) 60%, rgba(10,15,30,0.95) 100%)',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-mono text-electric text-sm md:text-base tracking-[0.25em] uppercase mb-5"
        >
          &gt; Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight mb-4"
        >
          <span className="gradient-text">Vinay</span>
          <span className="text-white"> G</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="h-10 md:h-12 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-xl md:text-2xl text-teal-light">
            {typed}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-electric"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Building intelligent systems at the intersection of AI and full-stack engineering —
          from multi-agent architectures to computer vision pipelines.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('projects')}
            className="px-8 py-3.5 bg-electric text-navy font-semibold font-mono rounded-full text-sm transition-all duration-300"
            style={{ boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = '0 0 40px rgba(0,212,255,0.6)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.3)')
            }
          >
            View My Work
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            download="Vinay_G_Resume.pdf"
            className="px-8 py-3.5 border border-electric/40 text-electric font-semibold font-mono rounded-full text-sm hover:bg-electric/8 transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(0,212,255,0.1)' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                '0 0 25px rgba(0,212,255,0.2)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                '0 0 10px rgba(0,212,255,0.1)')
            }
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            { label: 'GitHub', href: 'https://github.com/VinayG759', icon: 'GH' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-vinay-gowda/', icon: 'LI' },
            { label: 'LeetCode', href: 'https://leetcode.com/u/vinay0758/', icon: 'LC' },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-electric hover:border-electric/40 font-mono text-xs font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-6 h-6 text-electric/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
