import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { GrainOverlay } from './components/GrainOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Certificates } from './sections/Certificates';
import { Contact } from './sections/Contact';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      // Init Lenis smooth scroll after site reveals
      let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
      let rafId: number;

      import('lenis').then(({ default: Lenis }) => {
        lenis = new Lenis({
          lerp: 0.08,
          smoothWheel: true,
          touchMultiplier: 1.5,
        });

        const raf = (time: number) => {
          lenis!.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      });

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        if (lenis) lenis.destroy();
      };
    }
  }, [loaded]);

  return (
    <>
      <GrainOverlay />
      <CustomCursor />

      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {loaded && (
        <div className="relative bg-navy min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Certificates />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}
