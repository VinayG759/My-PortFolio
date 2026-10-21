import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import gradskills from '../assets/certs/gradskills-summership-internship.jpg';
import wemakedevs from '../assets/certs/wemakedevs-first-commit.jpg';
import freshworks from '../assets/certs/freshworks-great-product-festival.jpg';

const certs: { title: string; issuer: string; date: string; note: string; img?: string; alt?: string; href?: string; portrait?: boolean }[] = [
  {
    title: 'The Great Product Festival 2026',
    issuer: 'Freshworks × Women in Products',
    date: 'Sep 2026',
    note: 'In recognition of outstanding contribution, innovative thinking and passion for building better products.',
    img: freshworks,
    alt: 'Great Product Festival 2026 certificate',
  },
  {
    title: 'Certificate of Excellence & Appreciation',
    issuer: 'GradSkills · Summership Internship 2026',
    date: '2026',
    note: 'For the successful completion of the three-month Summership Internship. Verification ID GS-SS-26-004.',
    img: gradskills,
    alt: 'GradSkills Summership Internship certificate',
    portrait: true,
  },
  {
    title: 'First Commit · Bharat Builds Tour',
    issuer: 'WeMakeDevs × AWS',
    date: '20 Sep 2026',
    note: 'For taking part in event 01 of the hackathon series and shipping a project (Baseline). Certificate ID NK4MQTQS4W.',
    img: wemakedevs,
    alt: 'WeMakeDevs First Commit certificate of participation',
    href: '/certificates/WeMakeDevs_First_Commit_Vinay_G.pdf',
  },
  {
    title: 'AI Tools Workshop',
    issuer: 'be10x',
    date: 'Mar 2026',
    note: 'Advanced AI tools, productivity workflows and practical uses of large language models.',
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-16 sm:py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeader index="04" title="Certificates" />
        <div className="grid gap-5 md:grid-cols-2">
          {certs.map((c, i) => {
            const link = c.href ?? c.img;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card glow-border flex flex-col gap-4 rounded-2xl p-4 sm:flex-row"
              >
                {c.img && (
                  <a href={link} target="_blank" rel="noreferrer" className="shrink-0">
                    <img
                      src={c.img}
                      alt={c.alt}
                      loading="lazy"
                      className={`rounded-lg border border-electric/15 object-cover object-top ${c.portrait ? 'h-36 w-28' : 'h-28 w-40'}`}
                    />
                  </a>
                )}
                <div className="min-w-0">
                  <p className="font-mono text-[11px] text-electric">{c.date}</p>
                  <h3 className="font-bold leading-snug text-white">{c.title}</h3>
                  <p className="text-sm text-teal-light">{c.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.note}</p>
                  {link && (
                    <a href={link} target="_blank" rel="noreferrer" className="mt-2 inline-block font-mono text-xs text-electric hover:underline">
                      View certificate ↗
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
