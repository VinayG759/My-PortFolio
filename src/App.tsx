import { Header } from './components/Header';
import { Intro } from './sections/Intro';
import { Work } from './sections/Work';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    <>
      <a href="#work" className="plain sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-30">
        Skip to work
      </a>
      <Header />
      <main>
        <Intro />
        <Work />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-rule">
        <div className="page flex flex-wrap justify-between gap-2 py-8 text-[14px] text-muted">
          <p>© {new Date().getFullYear()} Vinay G</p>
          <p>Built with React, Vite and Tailwind.</p>
        </div>
      </footer>
    </>
  );
}
