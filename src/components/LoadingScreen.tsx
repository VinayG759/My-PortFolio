import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const steps = [15, 35, 55, 72, 88, 100];
    let step = 0;
    const interval = setInterval(() => {
      if (step < steps.length) {
        setProgress(steps[step]);
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 600);
        }, 400);
      }
    }, 280);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy"
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Scan line */}
          <div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-30 animate-scan"
            style={{ animationDuration: '2.5s' }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative mb-10"
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-electric/30"
            />
            {/* Inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-full border border-teal-portfolio/40"
            />

            {/* Logo box */}
            <div
              className="relative w-20 h-20 flex items-center justify-center rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(13,115,119,0.15) 100%)',
                border: '1px solid rgba(0,212,255,0.4)',
                boxShadow: '0 0 30px rgba(0,212,255,0.2)',
              }}
            >
              <span
                className="text-3xl font-bold font-mono gradient-text"
                style={{ lineHeight: 1 }}
              >
                VG
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 font-mono text-sm tracking-[0.3em] uppercase mb-8"
          >
            Initializing Portfolio
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #0D7377, #00D4FF)',
                boxShadow: '0 0 8px rgba(0,212,255,0.5)',
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          <motion.p
            className="text-electric/60 font-mono text-xs mt-3"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
