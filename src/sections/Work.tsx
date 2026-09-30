import { caseStudies, earlierWork, type CaseStudy } from '../data/work';

function Study({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article id={study.slug} className="scroll-mt-20 border-t border-rule py-14 sm:py-20">
      <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[14rem_1fr]">
        {/* Left rail: identity */}
        <div>
          <p className="label">
            {String(index + 1).padStart(2, '0')} · {study.year}
          </p>
          <h3 className="mt-2 font-serif text-[30px] leading-tight">{study.name}</h3>
          <p className="mt-2 text-[14px] font-medium text-accent">{study.badge}</p>
        </div>

        {/* Body */}
        <div className="min-w-0">
          <p className="max-w-[30ch] font-serif text-[26px] leading-snug sm:text-[30px]">{study.headline}</p>

          {study.image && (
            <figure className="mt-8 overflow-hidden rounded-lg border border-rule bg-raised">
              <img
                src={study.image.src}
                alt={study.image.alt}
                loading="lazy"
                className="block aspect-[16/10] w-full object-cover object-top"
              />
            </figure>
          )}

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="label mb-2">The problem</h4>
              <p>{study.problem}</p>
            </div>
            <div>
              <h4 className="label mb-2">What I built</h4>
              <p>{study.built}</p>
            </div>
          </div>

          <blockquote className="mt-8 border-l-2 border-accent pl-5">
            <h4 className="label mb-2">The hard part</h4>
            <p className="font-serif text-[20px] leading-relaxed">{study.hardPart}</p>
          </blockquote>

          <dl className="mt-8 grid gap-y-3 text-[15px] sm:grid-cols-[7rem_1fr]">
            <dt className="label pt-[3px]">Details</dt>
            <dd className="text-muted">{study.facts.join('  ·  ')}</dd>
            <dt className="label pt-[3px]">Stack</dt>
            <dd className="text-muted">{study.stack.join(', ')}</dd>
            {(study.links.length > 0 || study.note) && (
              <>
                <dt className="label pt-[3px]">Links</dt>
                <dd>
                  {study.links.map((l, i) => (
                    <span key={l.href}>
                      {i > 0 && <span className="text-muted">  ·  </span>}
                      <a href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    </span>
                  ))}
                  {study.note && (
                    <span className="block text-muted">{study.note}</span>
                  )}
                </dd>
              </>
            )}
          </dl>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="page scroll-mt-14">
      <div className="flex items-baseline justify-between pb-6">
        <h2 className="font-serif text-[34px]">Selected work</h2>
        <p className="label hidden sm:block">2026</p>
      </div>

      {caseStudies.map((s, i) => (
        <Study key={s.slug} study={s} index={i} />
      ))}

      <div className="border-t border-rule py-14 sm:py-20">
        <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[14rem_1fr]">
          <div>
            <h3 className="font-serif text-[26px]">Earlier projects</h3>
            <p className="mt-2 text-[15px] text-muted">Where I learned the basics.</p>
          </div>
          <ul className="divide-y divide-rule border-y border-rule">
            {earlierWork.map((w) => (
              <li key={w.name}>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noreferrer"
                  className="plain group grid gap-1 py-4 text-ink hover:text-ink sm:grid-cols-[13rem_1fr_auto] sm:gap-6"
                >
                  <span className="font-medium group-hover:text-accent">{w.name}</span>
                  <span className="text-[15px] text-muted">{w.what}</span>
                  <span className="font-mono text-[12px] text-muted sm:pt-1">{w.stack}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
