import photo from '../assets/vinay.jpg';
import gradskillsCert from '../assets/GradSkills_Summership_Certificate_Vinay_G.jpg';
import { toolbox } from '../data/work';

const recognition = [
  {
    what: 'Winner, The Great Agent Hackathon',
    who: 'Freshworks · Track 3, AI-native Enterprise',
    when: 'Sep 2026',
  },
  {
    what: 'Cleared Round 1, Compete & Win: Summership 2026',
    who: 'GradSkills',
    when: 'May 2026',
    href: gradskillsCert,
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
                I’m Vinay, a Computer Science student at Presidency University in Bengaluru (2024–2028). Most of
                what I know, I learned by shipping something and then fixing it when it broke in front of real users.
              </p>
              <p>
                My main project is OmniFlow AI, which I build and run on my own. It has taught me the parts that
                tutorials skip: row-level security, connection pooling, webhook retries, and what happens when a
                migration points at the wrong database.
              </p>
              <p>
                The work I care about most is AI that takes real actions, and the unglamorous engineering that makes
                it safe to trust: evidence for every claim, a human approval where it matters, an audit trail, and
                plain code checking the model’s work.
              </p>
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
                      </div>
                      <p className="font-mono text-[12px] text-muted pt-1">{r.when}</p>
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
