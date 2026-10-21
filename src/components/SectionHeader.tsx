import { motion } from 'framer-motion';

interface Props {
  index: string;
  title: string;
  blurb?: string;
}

export function SectionHeader({ index, title, blurb }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <p className="font-mono text-electric text-sm tracking-[0.2em] uppercase mb-3">
        {index}. {title}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white section-title mx-auto inline-block">{title}</h2>
      {blurb && <p className="text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">{blurb}</p>}
    </motion.div>
  );
}
