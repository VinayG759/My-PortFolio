import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: 'be10x AI Tools Workshop',
    issuer: 'be10x',
    date: 'March 1, 2026',
    description:
      'Comprehensive workshop covering advanced AI tools, productivity workflows, and practical applications of large language models in real-world scenarios.',
    skills: ['AI Tools', 'LLM Workflows', 'Prompt Engineering', 'Automation'],
    verified: true,
    color: '#00D4FF',
    icon: '🏆',
  },
];

function CertCard({ cert, index }: { cert: typeof certificates[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative max-w-lg mx-auto"
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
        style={{ background: `linear-gradient(135deg, ${cert.color}30, rgba(13,115,119,0.2))` }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(13,21,48,0.9) 0%, rgba(10,15,30,0.95) 100%)',
          border: '1px solid rgba(0,212,255,0.15)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
        }}
      >
        {/* Top bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${cert.color}, #0D7377)` }}
        />

        {/* Corner decorations */}
        <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-electric/20 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-teal-portfolio/20 rounded-bl-lg" />

        <div className="p-8">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: `${cert.color}15`,
                  border: `1px solid ${cert.color}30`,
                }}
              >
                {cert.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-xl leading-tight">{cert.title}</h3>
                <p className="text-teal-light font-mono text-sm mt-0.5">{cert.issuer}</p>
              </div>
            </div>

            {/* Verified badge */}
            {cert.verified && (
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full flex-shrink-0"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.3)',
                }}
              >
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-emerald-400 text-xs font-mono font-semibold">Verified</span>
              </motion.div>
            )}
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 mb-5">
            <svg className="w-4 h-4 text-electric/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-slate-400 font-mono text-sm">Issued {cert.date}</span>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{cert.description}</p>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span key={skill} className="tag-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Certificates() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="certificates" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-teal-portfolio/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-electric text-sm tracking-[0.2em] uppercase mb-3"
          >
            04. Certificates
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white inline-block section-title mx-auto"
          >
            Credentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 mt-5 max-w-md mx-auto"
          >
            Verified learning and achievements from workshops and programs.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="flex justify-center">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
