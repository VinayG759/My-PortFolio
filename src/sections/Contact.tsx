import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_64vz0rn';
const EMAILJS_TEMPLATE_ID = 'template_2q4q32p';
const EMAILJS_PUBLIC_KEY = 'i4wK01qibrZ9lEwvr';

const profiles = [
  { label: 'GitHub', href: 'https://github.com/VinayG759' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-vinay-gowda/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/vinay0758/' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/vinayg1752004' },
];

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error' };

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ kind: 'sending' });
    try {
      // EmailJS v4 takes the public key in an options object, not as a bare string.
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, to_name: 'Vinay' },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setForm({ name: '', email: '', message: '' });
      setStatus({ kind: 'sent' });
    } catch (err) {
      console.error('[EmailJS]', err);
      setStatus({ kind: 'error' });
    }
  };

  return (
    <section id="contact" className="scroll-mt-14 border-t border-rule">
      <div className="page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-x-12">
          <h2 className="font-serif text-[34px]">Contact</h2>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="max-w-[26ch] font-serif text-[26px] leading-snug">
                Open to internships, engineering roles and interesting problems.
              </p>
              <p className="mt-6 text-muted">Email is the fastest way to reach me.</p>
              <a href="mailto:vinayg1752004@gmail.com" className="mt-1 inline-block text-[18px] font-medium">
                vinayg1752004@gmail.com
              </a>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
                {profiles.map((p) => (
                  <li key={p.label}>
                    <a href={p.href} target="_blank" rel="noreferrer">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[15px] text-muted">
                Résumé: <a href="/Vinay_G_Resume.pdf" target="_blank" rel="noreferrer">PDF</a>
                {' · '}
                <a href="/Vinay_G_Resume.docx" download>
                  Word
                </a>
              </p>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label htmlFor="c-name" className="mb-1.5 block text-[14px] text-muted">
                  Name
                </label>
                <input id="c-name" required value={form.name} onChange={update('name')} className="field" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-1.5 block text-[14px] text-muted">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className="field"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="c-msg" className="mb-1.5 block text-[14px] text-muted">
                  Message
                </label>
                <textarea id="c-msg" required rows={5} value={form.message} onChange={update('message')} className="field resize-y" />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status.kind === 'sending'}
                  className="rounded-md bg-ink px-5 py-2.5 text-[15px] font-medium text-paper transition-opacity hover:opacity-85 disabled:opacity-50"
                >
                  {status.kind === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                <p role="status" aria-live="polite" className="text-[14px]">
                  {status.kind === 'sent' && <span className="text-muted">Sent. I’ll reply soon.</span>}
                  {status.kind === 'error' && (
                    <span className="text-accent">That didn’t go through. Please email me directly.</span>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
