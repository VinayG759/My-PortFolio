import { motion } from 'framer-motion';
import { caseStudies, earlierWork, type CaseStudy } from '../data/work';
import { SectionHeader } from '../components/SectionHeader';

function Visual({ study }: { study: CaseStudy }) {
  if (study.image) {
    return (
      <div className="overflow-hidden rounded-xl border border-electric/15 bg-navy-dark">
        <img
          src={study.image.src}
          alt={study.image.alt}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    );
  }
  return (
    <div className="grid h-full grid-cols-1 content-center gap-2 rounded-xl border border-electric/15 bg-navy-dark/70 p-5">
      {study.facts.map((f) => (
        <p key={f} className="font-mono text-sm text-electric">
          <span className="text-teal-light">▸ </span>
          {f}
        </p>
      ))}
    </div>
  );
}

function Study({ study, index }: { study: CaseStudy; index: number }) {
  const flip = index % 2 === 1;
  return (
    <motion.article
      id={study.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="glass-card glow-border group scroll-mt-24 overflow-hidden rounded-2xl"
    >
      <div className="h-1 w-full bg-gradient-to-r from-electric to-teal-portfolio" />
      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-12">
        <div className={`min-w-0 lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
          <Visual study={study} />
          {study.image && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {study.facts.map((f) => (
                <li key={f} className="tag-pill">
                  {f}
                </li>
              ))}
            </ul>
          )}
          <p className="mb-2 mt-5 font-mono text-[11px] uppercase tracking-wider text-slate-500">Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {study.stack.map((s) => (
              <span key={s} className="tag-pill">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-xs text-electric/50">{String(index + 1).padStart(2, '0')}.</span>
            <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-electric">{study.name}</h3>
            <span className="font-mono text-xs text-slate-500">{study.year}</span>
          </div>
          <p className="mt-1 font-mono text-xs text-teal-light">{study.badge}</p>
          <p className="mt-3 text-lg font-semibold leading-snug text-slate-100">{study.headline}</p>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
            <p>
              <span className="font-mono text-xs uppercase tracking-wider text-electric/70">Problem · </span>
              {study.problem}
            </p>
            <p>
              <span className="font-mono text-xs uppercase tracking-wider text-electric/70">Built · </span>
              {study.built}
            </p>
          </div>

          <div className="mt-4 rounded-xl border-l-2 border-electric bg-electric/5 p-4 text-sm leading-relaxed text-slate-300">
            <span className="font-mono text-xs uppercase tracking-wider text-electric">The hard part · </span>
            {study.hardPart}
          </div>

          {(study.links.length > 0 || study.note) && (
            <p className="mt-4 text-sm text-slate-500">
              {study.links.map((l, i) => (
                <span key={l.href}>
                  {i > 0 && ' · '}
                  <a href={l.href} target="_blank" rel="noreferrer" className="font-mono text-electric hover:underline">
                    {l.label} ↗
                  </a>
                </span>
              ))}
              {study.note && <span className="block">{study.note}</span>}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20">
      <div className="grid-bg absolute inset-0 opacity-25" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeader index="01" title="Projects" blurb="Case studies: what each one is for, what I built, and the part that was hard." />

        <div className="space-y-6">
          {caseStudies.map((s, i) => (
            <Study key={s.slug} study={s} index={i} />
          ))}
        </div>

        <div className="mt-10">
          <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-electric">Earlier projects</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {earlierWork.map((w, i) => (
              <motion.a
                key={w.name}
                href={w.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-card glow-border flex flex-col rounded-xl p-4"
              >
                <p className="font-semibold text-white">{w.name}</p>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-400">{w.what}</p>
                <p className="mt-3 font-mono text-[11px] text-teal-light">{w.stack}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
