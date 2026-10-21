import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import photo from '../assets/vinay.jpg';

const ParticleField = lazy(() => import('../three/ParticleField').then((m) => ({ default: m.ParticleField })));

const roles = ['AI Product Builder', 'Full Stack Engineer', 'Multi-Agent AI Architect', 'Hackathon Winner'];

const stats = [
  { value: '760+', label: 'commits in OmniConnect AI' },
  { value: '~1,860', label: 'automated tests' },
  { value: '2', label: 'hackathon wins' },
  { value: '6', label: 'channels, one inbox' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/VinayG759' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-vinay-gowda/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/vinay0758/' },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export function Hero() {
  const typed = useTypewriter(roles, 75, 2200);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-10">
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 50% 45%, transparent 0%, rgba(10,15,30,0.55) 60%, rgba(10,15,30,0.95) 100%)',
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <motion.p {...fade(0.8)} className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-electric">
              &gt; Hello, I'm
            </motion.p>
            <motion.h1
              {...fade(1.0)}
              className="mb-3 text-6xl font-black leading-none tracking-tight text-white sm:text-7xl md:text-8xl"
            >
              <span className="gradient-text">Vinay</span> G
            </motion.h1>
            <motion.div {...fade(1.2)} className="mb-5 flex h-9 items-center font-mono text-xl text-teal-light md:text-2xl">
              <span>{typed}</span>
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="text-electric">
                |
              </motion.span>
            </motion.div>
            <motion.p {...fade(1.4)} className="mb-7 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              Winner of Freshworks’ <span className="text-white">Great Agent Hackathon</span> and the GradSkills
              hackathon. For the past five months I’ve built AI products end to end, including{' '}
              <span className="text-white">OmniConnect AI</span>, a customer-messaging product I engineer alone.
            </motion.p>
            <motion.div {...fade(1.6)} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-full bg-electric px-7 py-3 font-mono text-sm font-semibold text-navy transition-shadow"
                style={{ boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
              >
                View My Work
              </a>
              <a
                href="/Vinay_G_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-electric/40 px-7 py-3 font-mono text-sm font-semibold text-electric transition-colors hover:bg-electric/10"
              >
                Résumé (PDF)
              </a>
              <div className="ml-1 flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 px-3 py-2 font-mono text-xs text-slate-400 transition-all hover:border-electric/40 hover:text-electric"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fade(1.2)} className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="glass-card glow-border rounded-2xl p-4">
              <div className="flex items-center gap-4">
                <img
                  src={photo}
                  alt="Portrait of Vinay G"
                  width={495}
                  height={710}
                  className="h-28 w-24 shrink-0 rounded-xl border border-electric/20 object-cover"
                />
                <div className="min-w-0">
                  <p className="font-bold text-white">Vinay G</p>
                  <p className="font-mono text-xs text-teal-light">Bengaluru · B.Tech CS, Presidency University</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
                    <span className="pulse-badge h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Open to internships &amp; roles
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-electric/10 bg-navy/60 p-3">
                    <p className="gradient-text text-2xl font-black">{s.value}</p>
                    <p className="text-xs leading-snug text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
