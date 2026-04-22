import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-navy/80 backdrop-blur-xl border-b border-electric/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#home')} className="group relative">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-lg font-bold font-mono text-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(13,115,119,0.15))',
              border: '1px solid rgba(0,212,255,0.3)',
            }}
          >
            <span className="gradient-text">VG</span>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            return (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={`relative px-4 py-2 text-sm font-mono transition-colors duration-200 ${
                    active === id ? 'text-electric' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md bg-electric/10 border border-electric/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="mailto:vinayg1752004@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-mono text-electric border border-electric/30 rounded-lg hover:bg-electric/10 hover:border-electric/60 transition-all duration-300"
        >
          Hire Me
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-electric origin-center transition-transform"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-electric"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-electric origin-center transition-transform"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy/95 backdrop-blur-xl border-t border-electric/10 overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="w-full text-left px-8 py-3 text-sm font-mono text-slate-300 hover:text-electric hover:bg-electric/5 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
