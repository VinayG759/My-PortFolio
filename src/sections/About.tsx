import photo from '../assets/vinay.jpg';
import gradskillsCert from '../assets/certs/gradskills-summership-internship.jpg';
import freshworksCert from '../assets/certs/freshworks-great-product-festival.jpg';
import { toolbox } from '../data/work';

const recognition = [
  {
    what: 'Winner, The Great Agent Hackathon',
    who: 'Freshworks · Track 3, AI-native Enterprise · SentinelOps AI',
    when: 'Sep 2026',
    cert: freshworksCert,
    certAlt: 'Great Product Festival 2026 certificate, Freshworks and Women in Products',
  },
  {
    what: 'Winner, Compete & Win: Summership 2026',
    who: 'GradSkills · OmniConnect AI began at its SummerShip Challenge',
    when: '2026',
  },
  {
    what: 'Completed the Summership Internship (3 months)',
    who: 'Grad Skills India Private Limited · certificate of excellence & appreciation',
    when: '2026',
    cert: gradskillsCert,
    certAlt: 'GradSkills certificate of excellence and appreciation for the Summership Internship 2026',
  },
  {
    what: 'First Commit, Bharat Builds Tour',
    who: 'WeMakeDevs × AWS · shipped Baseline',
    when: 'Sep 2026',
    href: '/certificates/WeMakeDevs_First_Commit_Vinay_G.pdf',
  },
  {
    what: 'AI Tools Workshop',
    who: 'be10x',
    when: 'Mar 2026',
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-14 border-t border-rule bg-raised">
      <div className="page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-x-12">
          <div>
            <h2 className="font-serif text-[34px]">About</h2>
            <img
              src={photo}
              alt="Portrait of Vinay G"
              className="mt-6 w-40 rounded-md border border-rule object-cover grayscale-[15%] lg:w-full"
              width={495}
              height={710}
            />
          </div>

          <div className="min-w-0">
            <div className="max-w-prose space-y-5 text-[18px]">
              <p>
                I’m Vinay, an AI product builder in Bengaluru and a Computer Science student at Presidency University
                (2024–2028). After a three-month internship at Grad Skills India, I’ve spent five months building AI
                products end to end: the idea, backend, dashboard, integrations, tests and documentation.
              </p>
              <p>
                My main project is OmniConnect AI, which I build and run on my own. It has taught me the parts that
                tutorials skip: row-level security, connection pooling, webhook retries, and what happens when a
                migration points at the wrong database.
              </p>
              <p>
                The work I care about most is AI that takes real actions, and the unglamorous engineering that makes
                it safe to trust: evidence for every claim, a human approval where it matters, an audit trail, and
                plain code checking the model’s work.
              </p>
            </div>

            <div className="mt-14">
              <h3 className="label mb-4">Experience</h3>
              <ul className="space-y-4 text-[15px]">
                <li className="grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <p className="font-medium">AI Product Builder · OmniConnect AI and hackathon products</p>
                    <p className="text-muted">
                      Four AI products in five months, owned end to end, alone or in a small team.
                    </p>
                  </div>
                  <p className="pt-1 font-mono text-[12px] text-muted">May 2026 – now</p>
                </li>
                <li className="grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <p className="font-medium">Intern · Grad Skills India Private Limited</p>
                    <p className="text-muted">Completed the three-month Summership Internship.</p>
                  </div>
                  <p className="pt-1 font-mono text-[12px] text-muted">3 months</p>
                </li>
              </ul>
            </div>

<div className="mt-14 grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="label mb-4">Toolbox</h3>
                <dl className="space-y-3 text-[15px]">
                  {toolbox.map((t) => (
                    <div key={t.area}>
                      <dt className="font-medium">{t.area}</dt>
                      <dd className="text-muted">{t.items}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="label mb-4">Recognition</h3>
                <ul className="space-y-4 text-[15px]">
                  {recognition.map((r) => (
                    <li key={r.what} className="grid grid-cols-[1fr_auto] gap-4">
                      <div>
                        <p className="font-medium">
                          {r.href ? (
                            <a href={r.href} target="_blank" rel="noreferrer">
                              {r.what}
                            </a>
                          ) : (
                            r.what
                          )}
                        </p>
                        <p className="text-muted">{r.who}</p>
                        {r.cert && (
                          <a href={r.cert} target="_blank" rel="noreferrer" className="plain mt-2 inline-block">
                            <img
                              src={r.cert}
                              alt={r.certAlt}
                              loading="lazy"
                              className="h-24 w-auto rounded border border-rule object-cover"
                            />
                          </a>
                        )}
                      </div>
                      <p className="pt-1 font-mono text-[12px] text-muted">{r.when}</p>
                    </li>
                  ))}
                </ul>

                <h3 className="label mb-3 mt-10">Education</h3>
                <p className="text-[15px] font-medium">B.Tech, Computer Science</p>
                <p className="text-[15px] text-muted">Presidency University, Bengaluru · 2024–2028</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
