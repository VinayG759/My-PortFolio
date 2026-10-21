export function Intro() {
  return (
    <section id="top" className="page pb-16 pt-16 sm:pb-24 sm:pt-28">
      <p className="label mb-6">AI product builder · Bengaluru</p>
      <h1 className="max-w-[18ch] font-serif text-[40px] leading-[1.08] tracking-[-0.01em] sm:text-[64px]">
        I build AI systems that are allowed to act, and the engineering that makes that safe.
      </h1>
      <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <p className="max-w-prose text-[18px] text-muted">
          Winner of Freshworks’ <span className="text-ink">Great Agent Hackathon</span> and the GradSkills hackathon.
          For the past five months I’ve built AI products end to end, including{' '}
          <span className="text-ink">OmniConnect AI</span>, a customer-messaging product I engineer alone, with
          760+ commits and about 1,860 tests.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
          <li>
            <a href="mailto:vinayg1752004@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://github.com/VinayG759" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/-vinay-gowda/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="/Vinay_G_Resume.pdf" target="_blank" rel="noreferrer">
              Résumé (PDF)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
