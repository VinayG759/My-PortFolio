import { motion } from 'framer-motion';
import vinayPhoto from '../assets/vinay.jpg';

const skills = [
  'Python', 'TypeScript', 'TensorFlow', 'React', 'FastAPI',
  'Groq LLM', 'Computer Vision', 'Spring Boot', 'PostgreSQL',
  'Three.js', 'Multi-Agent AI',
];

const stats = [
  { label: 'Projects Built', value: '6+' },
  { label: 'Accuracy (CV Model)', value: '86.96%' },
  { label: 'Agent Systems', value: '2+' },
  { label: 'Year', value: '2026' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function PhotoPortrait() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px]">
      {/* Ambient glow blob behind everything */}
      <div
        className="absolute w-72 h-72 rounded-full blur-[90px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(13,115,119,0.10) 50%, transparent 80%)',
        }}
      />

      {/* Outermost ring — dashed, slow CW */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full border border-dashed border-electric/20"
        style={{ width: 340, height: 340 }}
      />

      {/* Middle ring — teal, pulsing opacity */}
      <motion.div
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.025, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full border border-teal-portfolio"
        style={{
          width: 300,
          height: 300,
          boxShadow:
            '0 0 18px rgba(13,115,119,0.35), inset 0 0 18px rgba(13,115,119,0.08)',
        }}
      />

      {/* Inner ring — electric blue, slow CCW */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full"
        style={{
          width: 268,
          height: 268,
          border: '1px solid rgba(0,212,255,0.28)',
          boxShadow: '0 0 12px rgba(0,212,255,0.15)',
        }}
      />

      {/* Photo with float animation */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-full overflow-hidden z-10"
        style={{
          width: 230,
          height: 230,
          border: '2px solid rgba(0,212,255,0.45)',
          boxShadow:
            '0 0 28px rgba(0,212,255,0.22), 0 0 56px rgba(13,115,119,0.14), 0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        <img
          src={vinayPhoto}
          alt="Vinay G"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />

        {/* Dark vignette — edges fade into the background */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 45%, rgba(10,15,30,0.55) 80%, rgba(10,15,30,0.82) 100%)',
          }}
        />
      </motion.div>

      {/* Floating sparkle dots */}
      {[
        { top: '12%', left: '8%',  size: 5, delay: 0 },
        { top: '78%', left: '14%', size: 4, delay: 1.2 },
        { top: '18%', right: '6%', size: 6, delay: 0.6 },
        { top: '72%', right: '10%',size: 4, delay: 1.8 },
      ].map((s, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: s.delay }}
          className="absolute rounded-full bg-electric"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: 'left' in s ? s.left : undefined,
            right: 'right' in s ? s.right : undefined,
            boxShadow: `0 0 ${s.size * 2}px rgba(0,212,255,0.7)`,
          }}
        />
      ))}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-teal-portfolio/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-electric/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-electric text-sm tracking-[0.2em] uppercase mb-3">
            01. About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white section-title">
            Who I Am
          </h2>
        </motion.div>

        {/*
          Mobile:  photo (order-1) above text (order-2) — single col
          Desktop: text left (lg:order-1), photo right (lg:order-2)
        */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo — first on mobile, right col on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <PhotoPortrait />
          </motion.div>

          {/* Text — second on mobile, left col on desktop */}
          <div className="order-2 lg:order-1 space-y-8">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="text-slate-300 text-lg leading-relaxed"
            >
              I'm a{' '}
              <span className="text-electric font-semibold">
                Computer Science student
              </span>{' '}
              at Presidency University Bengaluru (2024–2028), passionate about building at the
              frontier of AI and software engineering. I specialize in multi-agent systems,
              computer vision pipelines, and full-stack applications that actually ship.
            </motion.p>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="text-slate-400 text-base leading-relaxed"
            >
              From designing 6-agent AI workspaces to building CV defect detection systems for
              international research internships, I thrive on projects that push the boundary of
              what's possible. My goal is to be the engineer who bridges the gap between
              cutting-edge ML research and production-grade systems.
            </motion.p>

            {/* Location & contact */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-wrap gap-4 text-sm"
            >
              {[
                { icon: '📍', text: 'Bengaluru, India' },
                { icon: '🎓', text: 'B.Sc. CS · Presidency University' },
                { icon: '✉️', text: 'vinayg1752004@gmail.com' },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 text-slate-400 font-mono"
                >
                  <span>{icon}</span>
                  <span>{text}</span>
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="glass-card rounded-xl p-4 border border-electric/10 hover:border-electric/30 transition-colors"
                >
                  <p className="text-2xl font-bold gradient-text">{value}</p>
                  <p className="text-slate-500 text-xs font-mono mt-1">{label}</p>
                </div>
              ))}
            </motion.div>

            {/* Skill tags */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="tag-pill"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
