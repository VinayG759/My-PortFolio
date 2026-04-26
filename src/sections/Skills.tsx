import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillGroups } from '../data/skills';

interface TooltipState {
  name: string;
  x: number;
  y: number;
}

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-mono group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.07 + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        >
          {/* Shimmer */}
          <motion.div
            animate={{ x: ['−100%', '200%'] }}
            transition={{ duration: 1.5, delay: index * 0.07 + 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function OrbitRing() {
  const outerSkills = [
    { name: 'Python',     abbr: 'PY',  color: '#3B82F6' },
    { name: 'React',      abbr: 'Re',  color: '#61DAFB' },
    { name: 'TypeScript', abbr: 'TS',  color: '#3178C6' },
    { name: 'TensorFlow', abbr: 'TF',  color: '#FF6F00' },
    { name: 'FastAPI',    abbr: 'FA',  color: '#009688' },
    { name: 'Groq LLM',  abbr: 'AI',  color: '#10B981' },
  ];

  const innerSkills = [
    { name: 'PostgreSQL', abbr: 'PG',  color: '#336791' },
    { name: 'Git',        abbr: 'Git', color: '#F05032' },
    { name: 'Vite',       abbr: 'Vi',  color: '#646CFF' },
  ];

  const OUTER_R = 145;
  const INNER_R = 82;
  const ICON    = 40;

  function OrbitIcon({ name, abbr, color }: { name: string; abbr: string; color: string }) {
    return (
      <motion.div
        whileHover={{ scale: 1.3 }}
        className="group relative w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold font-mono"
        style={{ background: `${color}18`, border: `1px solid ${color}40`, color }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${color}60`; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
      >
        {abbr}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-mono bg-navy-dark border border-electric/20 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
          {name}
        </span>
      </motion.div>
    );
  }

  return (
    <div className="relative flex items-center justify-center w-full h-[360px]">
      {/* Visual orbit rings */}
      <div
        className="absolute rounded-full border border-dashed border-electric/10"
        style={{ width: OUTER_R * 2, height: OUTER_R * 2 }}
      />
      <div
        className="absolute rounded-full border border-dashed border-teal-portfolio/15"
        style={{ width: INNER_R * 2, height: INNER_R * 2 }}
      />

      {/* Center hub */}
      <div
        className="absolute w-14 h-14 rounded-full flex items-center justify-center z-10 font-bold text-lg gradient-text font-mono"
        style={{
          background: 'rgba(13,21,48,0.9)',
          border: '1px solid rgba(0,212,255,0.3)',
          boxShadow: '0 0 30px rgba(0,212,255,0.2)',
        }}
      >
        VG
      </div>

      {/* Outer orbit — clockwise */}
      {outerSkills.map((skill, i) => {
        const start = (360 / outerSkills.length) * i;
        return (
          <motion.div
            key={skill.name}
            className="absolute"
            style={{ width: 0, height: 0, left: '50%', top: '50%' }}
            animate={{ rotate: [start, start + 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          >
            <motion.div
              style={{ position: 'absolute', top: -(OUTER_R + ICON / 2), left: -(ICON / 2) }}
              animate={{ rotate: [-start, -start - 360] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            >
              <OrbitIcon {...skill} />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Inner orbit — counter-clockwise */}
      {innerSkills.map((skill, i) => {
        const start = (360 / innerSkills.length) * i;
        return (
          <motion.div
            key={skill.name}
            className="absolute"
            style={{ width: 0, height: 0, left: '50%', top: '50%' }}
            animate={{ rotate: [start, start - 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          >
            <motion.div
              style={{ position: 'absolute', top: -(INNER_R + ICON / 2), left: -(ICON / 2) }}
              animate={{ rotate: [-start, -start + 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            >
              <OrbitIcon {...skill} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: '-80px' });
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-electric text-sm tracking-[0.2em] uppercase mb-3"
          >
            03. Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white section-title"
          >
            What I Work With
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: orbit animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <OrbitRing />
          </motion.div>

          {/* Right: grouped skill bars */}
          <div className="space-y-10">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{group.icon}</span>
                  <h3 className="text-white font-semibold font-mono text-sm tracking-wider uppercase">
                    {group.category}
                  </h3>
                  <div className="flex-1 h-px bg-electric/10 ml-2" />
                </div>
                <div className="space-y-3">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                      index={gi * 5 + si}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating tag cloud at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex flex-wrap justify-center gap-3"
        >
          {[
            'TensorFlow', 'PyTorch', 'LangChain', 'Groq', 'FastAPI', 'React', 'Next.js',
            'TypeScript', 'Python', 'C++', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis',
            'GitHub Actions', 'Vite', 'Three.js', 'Framer Motion', 'Tailwind CSS',
          ].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="tag-pill"
              onMouseEnter={(e) => {
                setTooltip({ name: tag, x: e.clientX, y: e.clientY });
              }}
              onMouseLeave={() => setTooltip(null)}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 px-3 py-1 rounded-md bg-navy-dark border border-electric/20 text-white text-xs font-mono pointer-events-none"
          style={{ left: tooltip.x + 14, top: tooltip.y - 30 }}
        >
          {tooltip.name}
        </div>
      )}
    </section>
  );
}
