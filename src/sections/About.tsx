import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

const experience = [
  {
    role: 'AI Product Builder',
    org: 'OmniConnect AI and hackathon products',
    when: 'May 2026 – now',
    what: 'Four AI products in five months, owned end to end: idea, backend, dashboard, integrations, tests and documentation.',
  },
  {
    role: 'Intern',
    org: 'Grad Skills India Private Limited',
    when: '3 months · completed',
    what: 'Completed the Summership Internship 2026.',
  },
];

const wins = [
  { what: 'Winner, The Great Agent Hackathon', who: 'Freshworks · Track 3, AI-native Enterprise · SentinelOps AI', when: 'Sep 2026' },
  { what: 'Winner, Compete & Win: Summership 2026', who: 'GradSkills · OmniConnect AI began at its SummerShip Challenge', when: '2026' },
  { what: 'First Commit, Bharat Builds Tour', who: 'WeMakeDevs × AWS · shipped Baseline', when: 'Sep 2026' },
];

const principles = [
  'Evidence for every claim',
  'A human approves what matters',
  'An audit trail for every step',
  'Plain code checks the model’s work',
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeader index="02" title="About" />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 lg:col-span-3"
          >
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p>
                I’m Vinay, an AI product builder in Bengaluru and a Computer Science student at Presidency University
                (2024–2028). After a three-month internship at Grad Skills India, I’ve spent five months building AI
                products end to end.
              </p>
              <p>
                My main project, OmniConnect AI, I build and run alone. It taught me what tutorials skip: row-level
                security, connection pooling, webhook retries, and what happens when a migration points at the wrong
                database.
              </p>
              <p>
                The work I care about most is AI that takes real actions, and the unglamorous engineering that makes it
                safe to trust.
              </p>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {principles.map((p) => (
                <li key={p} className="rounded-lg border border-electric/15 bg-electric/5 px-3 py-2 font-mono text-xs text-electric">
                  ✓ {p}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6 lg:col-span-2"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-electric">Experience</h3>
            <ul className="space-y-5">
              {experience.map((e) => (
                <li key={e.role} className="border-l-2 border-teal-portfolio pl-4">
                  <p className="font-semibold text-white">{e.role}</p>
                  <p className="text-sm text-teal-light">{e.org}</p>
                  <p className="font-mono text-[11px] text-slate-500">{e.when}</p>
                  <p className="mt-1 text-sm text-slate-400">{e.what}</p>
                </li>
              ))}
            </ul>
            <h3 className="mb-2 mt-6 font-mono text-xs uppercase tracking-[0.2em] text-electric">Education</h3>
            <p className="font-semibold text-white">B.Tech, Computer Science</p>
            <p className="text-sm text-slate-400">Presidency University, Bengaluru · 2024–2028</p>
            <p className="mt-1 font-mono text-[11px] text-slate-500">English · Hindi · Kannada</p>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wins.map((w, i) => (
            <motion.div
              key={w.what}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card glow-border rounded-xl p-4"
            >
              <p className="font-mono text-[11px] text-electric">{w.when}</p>
              <p className="mt-1 font-semibold text-white">{w.what}</p>
              <p className="mt-1 text-sm text-slate-400">{w.who}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
