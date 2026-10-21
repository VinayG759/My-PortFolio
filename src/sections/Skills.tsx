import { motion } from 'framer-motion';
import { toolbox } from '../data/work';
import { SectionHeader } from '../components/SectionHeader';

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="grid-bg absolute inset-0 opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeader index="03" title="Skills" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {toolbox.map((t, i) => (
            <motion.div
              key={t.area}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card glow-border rounded-xl p-5"
            >
              <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-electric">{t.area}</h3>
              <div className="flex flex-wrap gap-1.5">
                {t.items.split(', ').map((s) => (
                  <span key={s} className="tag-pill">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
